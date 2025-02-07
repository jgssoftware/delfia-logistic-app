import { StyleSheet, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import { List } from 'react-native-paper';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Services } from '../result';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

  const handleInformation = (data: string) => {
        setIsLoading(true);
  
        setTimeout(() => {
          setIsLoading(false);
          router.push({ pathname: "/information", params: { id: data }});
        }, 3000);
      
    };

  // Chamada para buscar os serviços na montagem do componente
  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      setIsLoading(true);
      const response = await fetch("http://192.168.254.1:8081/services/mock.json");
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    } finally {
      setIsLoading(false);
      setIsPageLoading(false);
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      {isPageLoading ? (
        <ThemedText>Carregando...</ThemedText>
      ) : services.length > 0 ? (
        services.map((item, index) => (
          <List.Item
            key={index}
            onPress={() => handleInformation(item.ID)}
            title={item.Equipamento || "Título não disponível"}
            description={item.location || "Localização"}
            left={(props) => <List.Icon {...props} icon="folder" />}
          />
        ))
      ) : (
        <ThemedText>Nenhum serviço disponível.</ThemedText>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
