// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ClothingType } from '../types/product.type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ClothingType[]>
) {
  res.status(200).json([{
    name: 'Camiseta Nike Solo Swoosh Masculina',
    id: 'CV0552-03z0',
    color: 'Branca',
    description: 'Tecido de fleece premium e modelo descontraído destacam o Moletom NikeLab. Parte da coleção Essentials, essa peça utiliza sensação macia com ajuste solto para uso no dia a dia.',
    price: 599.99,
    rating: 5.0,
    style: 'Casual',
    image: [
    {
      description: 'Blusa Cinza',
      id: 1,
      url: 'https://images.lojanike.com.br/500x500/produto/blusao-m-nrg-hoodie-flc-CV0552-030-1-11654635043.jpg'
    },
    {
      description: 'Blusa Cinza',
      id: 2,
      url: 'https://images.lojanike.com.br/500x500/produto/blusao-m-nrg-hoodie-flc-CV0552-030-2-21654635044.jpg'
    },
    {
      description: 'Blusa Cinza',
      id: 3,
      url: 'https://images.lojanike.com.br/500x500/produto/blusao-m-nrg-hoodie-flc-CV0552-030-3-31654635045.jpg'
    },
    {
      description: 'Blusa Cinza',
      id: 4,
      url: 'https://images.lojanike.com.br/500x500/produto/blusao-m-nrg-hoodie-flc-CV0552-030-4-41654635046.jpg'
    },
    {
      description: 'Blusa Cinza',
      id: 5,
      url: 'https://images.lojanike.com.br/500x500/produto/blusao-m-nrg-hoodie-flc-CV0552-030-5-51654635048.jpg'
    },
    {
      description: 'Blusa Cinza',
      id: 6,
      url: 'https://images.lojanike.com.br/500x500/produto/blusao-m-nrg-hoodie-flc-CV0552-030-6-61654635049.jpg'
    },
    ],
    sizes: [
    {
      size: 'P',
      avaliable: true,
    },
    {
      size: 'M',
      avaliable: true,
    },
    {
      size: 'G',
      avaliable: true,
    },
    {
      size: 'GG',
      avaliable: true,
    },
    {
      size: 'GGG',
      avaliable: true,
    },
  ],
    similarProducts: [
    {
      id: 'CV0552-030',
      image: {
        description: 'Cinza_030',
        id: 1,
        url: 'https://images.lojanike.com.br/62x62/produto/blusao-m-nrg-hoodie-flc-CV0552-030-1-11654635043.jpg',
      }
    },
    {
      id: 'CV0552-270',
      image: {
        description: 'Marrom_270',
        id: 1,
        url: 'https://images.lojanike.com.br/62x62/produto/blusao-m-nrg-hoodie-flc-CV0552-270-1-11654635050.jpg',
      }
    },
    {
      id: 'CV0552-245',
      image: {
        description: 'Marrom_245',
        id: 5,
        url: 'https://images.lojanike.com.br/62x62/produto/blusao-m-nrg-hoodie-flc-CV0552-245-1-11629993478.jpg',
      }
    },
    {
      id: 'CV0552-661',
      image: {
        description: 'Vermelho_661',
        id: 4,
        url: 'https://images.lojanike.com.br/62x62/produto/blusao-m-nrg-hoodie-flc-CV0552-661-1-11629993481.jpg',
      }
    },
  
  ],
  }



  ])
}
