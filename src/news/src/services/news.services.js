//Metodo que pega todas as mensagens
  export const getCardsMessagesService = async () => {
    try {     
      const response = await fetch(
        'https://back-end-the-news.herokuapp.com/messages'
      )
      
    } catch (error) {
      console.error(error);
    } 
  };
