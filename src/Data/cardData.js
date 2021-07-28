import chubbs from '../assets/chubbs2.jpg'
import piece from '../assets/piece.jpg'
import donkey from '../assets/donkey.jpg'
import skin from '../assets/skin.jpg'
import skeets from '../assets/skeets.jpg'
import ry from '../assets/ryan.jpg'
import nikki from '../assets/nikki.jpg'
import mac from '../assets/mac.jpg'
import rich from '../assets/rj.jpg'
import stella from '../assets/stella.jpg'
import tatum from '../assets/tatum.jpg'
import jonas from '../assets/jonas.jpg'
import packs from '../assets/packs.jpg'
import pais from '../assets/pais.jpg'

const number = Math.floor(Math.random() * 100);


const cards = [
    {
        number: 1,
        image: chubbs
    },
    {
        number: 1,
        image: chubbs
    },
    {
        number: 2,
        image: piece
    },
    {
        number: 2,
        image: piece
    },
    {
        number: 3,
        image: skin
    },
    {
        number: 3,
        image: skin
    },
    {
        number: 4,
        image: skeets
    },
    {
        number: 4,
        image: skeets
    },
    {
        number: 5,
        image: ry
    },
    {
        number: 5,
        image: ry
    },
    {
        number: 6,
        image: donkey
    },
    {
        number: 6,
        image: donkey
    },
    {
        number: 7,
        image: nikki
    },
    {
        number: 7,
        image: nikki
    },
    {
        number: 8,
        image: mac
    },
    {
        number: 8,
        image: mac
    },
    {
        number: 9,
        image: rich
    },
    {
        number: 9,
        image: rich
    },
    {
        number: 10,
        image: number % 2 === 0 ? stella : tatum
    },
    {
        number: 10,
        image: number % 2 === 0 ? stella : tatum
    },
    {
        number: 11,
        image: jonas
    },
    {
        number: 11,
        image: jonas
    },
    {
        number: 12,
        image: number % 2 === 0 ? pais : packs
    },
    {
        number: 12,
        image: number % 2 === 0 ? pais : packs
    },
]


export default cards
