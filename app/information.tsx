import { useEffect, useState } from "react";
import { Divider, List } from "react-native-paper";
import { Services } from "./result";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ScrollView, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import tailwind from "twrnc";
import { Skeleton } from "moti/skeleton";
import responseAll from "@/services/services";

const Information = () => {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

  const glob = useGlobalSearchParams();
  const id = glob.id;

  // async function fetchServices() {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       "http://192.168.254.1:8081/services/mock.json"
  //     );
  //     const data = await response.json();
  //     const filter = data.filter((item: any) => item.ID === id);
  //     setServices(filter);
  //   } catch (error) {
  //     console.error("Erro ao buscar serviços:", error);
  //   } finally {
  //     setIsLoading(false);
  //     setIsPageLoading(false);
  //   }
  // }

  const fetchServices = () => {
    responseAll()
      .then(async (response: any) => {
        console.log(123)
        console.log(response)
        const json = await response.json();
        console.log(json)
      })
      .finally(() => {
        setIsLoading(false);
      });
    }

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      {services.map((item) => (
        <ScrollView style={tailwind`bg-white`}>
          <List.Item title={item.ID} description="ID" />
          <Divider />

          <List.Item title={item.Equipamento} description="Equipamento" />
          <Divider />
          <List.Item title={item.Descrição} description="Descrição" />
          <Divider />
          <List.Item title={item.Serie} description="Serie" />
          <Divider />
          <List.Item title={item.NFTelmex} description="NF Telmex" />
          <Divider />
          <List.Item title={item.OS} description="OS" />
          <Divider />
          <List.Item title={item.Reserva} description="Reserva" />
          <Divider />
          <List.Item title={item.Cliente} description="Cliente" />
          <Divider />
          <List.Item title={item.Projeto} description="Projeto" />
          <Divider />
          <List.Item title={item.UF} description="UF" />
          <Divider />
          <List.Item title={item.Cidade} description="Cidade" />
          <Divider />
          <List.Item title={item.NFCliente} description="NF CLiente" />
          <Divider />
          <List.Item title={item.ValorUnitário} description="Valor Unitário" />
          <Divider />
          <List.Item title={item.ValorTotal} description="Valor total" />
          <Divider />
          <List.Item title={item.Quantidade} description="Quantidade" />
          <Divider />
          <List.Item title={item.DataEntrada} description="Data de entrada" />
        </ScrollView>
      ))}
    </>
  );
};

export default Information;
