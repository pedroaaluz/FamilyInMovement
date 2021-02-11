import React,{useState} from 'react';
import {} from 'react-native';



export const PetData = [

    {
        index: 6,
        name: 'Caminhada',
        color: '#17b978',
        image: require('./../../Assets/petwalk.jpg'),
        difficulty:'Fácil',
        timer:1800,
        power:"300",
        info:"Caminhe com o seu bichinho por 30 minutos e aproveite a companhia dele. Quem cansar primeiro puxa o outro!",
        timerInfo: "30min"
       
    },
    {
        index: 7,
        name: 'Corridinha',
        color: 'blue',
        image: require('./../../Assets/petrun.png'),
        difficulty:'Médio',
        timer:1800,
        power:"400",
        info:"Vamos aumentar um pouco a velocidade dessa caminhada? Tente fazer uma corridinha com o seu bichinho por 30 minutos. Não precisa virar o Bolt, faça dentro dos seus limites!",
        timerInfo:"30min"
       
    },
    {
        index: 8,
        name: 'Pegar ou largar',
        color: 'blue',
        image:require('./../../Assets/petplay.jpg'),
        difficulty:'Médio',
        timer: 600,
        power:"350",
        info:"Pegue um objeto que o seu bichinho gosta muito e brinque com ele. Aproveite, momentos como esse são aqueles em que ficam guardados com muito carinho.",
        timerInfo:"10min"
        
    },
    {
        index: 9,
        name: 'Tô contigo',
        color: 'red',
        image: require('./../../Assets/pet3.gif'),
        difficulty: 'Difícil',
        timer:600,
        power:"250",
        info:"pegue o seu bichinho com muito carinho. Sim, carregue ele! Faça agachamentos por 10 minutos sem parar!",
        timerInfo:"10min"
       
    }

]