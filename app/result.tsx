import { Modal, ScrollView, StyleSheet, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Dialog,
  PaperProvider,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";
import { useEffect, useState } from "react";
import React from "react";
import { router, useGlobalSearchParams } from "expo-router";
import tailwind from "twrnc";

export interface Services {
  ID: string;
  Equipamento: string;
  Descrição: string;
  Serie: string;
  NFTelmex: string;
  OS: string;
  Reserva: string;
  Cliente: string;
  Projeto: string;
  UF: string;
  Cidade: string;
  NFCliente: string;
  ValorUnitário: string;
  ValorTotal: string;
  Quantidade: string;
  DataEntrada: string;
}

const Result = () => {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  const glob = useGlobalSearchParams();
  const id = glob.id;

  async function fetchServices() {
    try {
      const response = await fetch(
        "http://192.168.254.1:8081/services/mock.json"
      );
      const data = await response.json();
      const filter = data.filter((item: any) => item.ID === id);
      setServices(filter);
      setIsPageLoading(false)
    } catch (error) {
      console.error("Erro:", error);
      setIsPageLoading(false)
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  const handleConfirm = () => {
    setVisible(true);
    setIsloading(true);

    setTimeout(() => {
      setVisible(false);
      setIsloading(false);
      router.push("/");
    }, 3000);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <PaperProvider>
      {!isPageLoading ? (
        <View style={tailwind`bg-white flex-1`}>
          {services.length > 0 ? (
            services.map((item) => (
              <ScrollView key={item.ID} style={styles.container}>
                <TextInput
                  label="ID"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.ID}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Equipamento"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Equipamento}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Descrição"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Descrição}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Serie"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Serie}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="NF Telmex"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.NFTelmex}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="OS"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.OS}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Reserva"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Reserva}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Cliente"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Cliente}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Projeto"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Projeto}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="UF"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.UF}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Cidade"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Cidade}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="NF Cliente"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.NFCliente}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Valor Unitário"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.ValorUnitário}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Valor Total"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.ValorTotal}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Quantidade"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.Quantidade}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <TextInput
                  label="Data da entrada"
                  activeOutlineColor="#B3FB4F"
                  mode="outlined"
                  value={item.DataEntrada}
                  textColor="#000000"
                  style={tailwind`bg-white`}
                ></TextInput>

                <Button
                  mode="contained"
                  buttonColor="#B3FB4F"
                  textColor="#000000"
                  loading={isLoading}
                  style={isLoading ? tailwind`opacity-50 mt-5` : tailwind`mt-5`}
                  onPress={() => handleConfirm()}
                >
                  Confirmar
                </Button>
              </ScrollView>
            ))
          ) : (
            <View style={tailwind`flex items-center top-10`}>
              <Text>Nenhum resultado correspondente!</Text>
            </View>
          )}

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Content>
                <Text variant="bodyMedium">Confirmado com sucesso</Text>
              </Dialog.Content>
            </Dialog>
          </Portal>
        </View>
      ) : (
        <View style={tailwind`flex-1 items-center justify-center`}>
          <ActivityIndicator animating={true} color="#000" />
        </View>
      )}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
    paddingInline: 10,
    marginBottom: 100,
  },
});

export default Result;
