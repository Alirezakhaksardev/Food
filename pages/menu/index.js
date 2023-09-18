import React from 'react'
import MenuPage from '../../components/templates/MenuPage'

function menu({data}) {
  return (
    <MenuPage data={data} />
  )
}

export default menu


export async function getStaticProps(){
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();

    return {
        props : {data},
        revalidate : 10 , 
    }

}