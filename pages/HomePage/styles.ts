import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lista: {
    marginHorizontal: 10,
  },
  item: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row'
  },
  item_foto: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  item_conteudo: {
    justifyContent: "space-between"
  },
  item_botoes: {
    width: "84%",
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  item_botao_adicionar: {
    marginRight: 5,
  },
  item_texto: {
    flexWrap: 'wrap',
    fontSize: 20
  }
});

export default styles;
