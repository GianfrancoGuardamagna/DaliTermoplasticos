import NavegacionRegreso from '@/app/components/NavegacionRegreso'
import Productos from '@/app/components/Productos'

const page = ({ params }) => {
    const allProducts = [
        {
            title: 'Producto 1',
            image: '/carousel/c-img3.png',
            categoria: 'bidones'
        },
        {
            title: 'Producto 2',
            image: '/carousel/c-img3.png',
            categoria: 'bidones'
        },
        {
            title: 'Producto 3',
            image: '/carousel/c-img3.png',
            categoria: 'bidones'
        },
        {
            title: 'Producto 4',
            image: '/carousel/c-img3.png',
            categoria: 'bidones'
        },
        {
            title: 'Producto 5',
            image: '/carousel/c-img3.png',
            categoria: 'bidones'
        },
        {
            title: 'Producto 6',
            image: '/carousel/c-img2.png',
            categoria: 'botellas'
        },
        {
            title: 'Producto 7',
            image: '/carousel/c-img2.png',
            categoria: 'botellas'
        },
        {
            title: 'Producto 8',
            image: '/carousel/c-img2.png',
            categoria: 'botellas'
        },
        {
            title: 'Producto 9',
            image: '/carousel/c-img2.png',
            categoria: 'botellas'
        },
        {
            title: 'Producto 10',
            image: '/carousel/c-img2.png',
            categoria: 'botellas'
        },
        {
            title: 'Producto 11',
            image: '/carousel/c-img1.png',
            categoria: 'contenedores'
        },
        {
            title: 'Producto 12',
            image: '/carousel/c-img1.png',
            categoria: 'contenedores'
        },
        {
            title: 'Producto 13',
            image: '/carousel/c-img1.png',
            categoria: 'contenedores'
        },
        {
            title: 'Producto 14',
            image: '/carousel/c-img1.png',
            categoria: 'contenedores'
        },
        {
            title: 'Producto 15',
            image: '/carousel/c-img1.png',
            categoria: 'contenedores'
        }
    ]

    const products = allProducts.filter((product) => product.categoria === params.id);

    return (
        <>
            <NavegacionRegreso />
            <Productos products={products} />
        </>

    )
}

export default page