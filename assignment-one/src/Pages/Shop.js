import React from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/card'

const info= [{"name":"Bags", "Price":"245$", "Rating":"⭐⭐⭐⭐" ,"Image":"https://images-eu.ssl-images-amazon.com/images/I/61CJVUL2taL._AC._SR360,460.jpg"},
{"name":"Jackets and Gloves", "Price":"58 $", "Rating":"⭐⭐⭐⭐⭐" ,"Image":"https://thumbs.dreamstime.com/b/human-red-sport-jacket-blue-gloves-holds-two-sticks-hiking-human-red-sport-jacket-blue-gloves-holds-two-sticks-109070486.jpg"},
{"name":"Boots", "Price":"78 $", "Rating":"⭐⭐⭐" ,"Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqnfBzVUgiJ7ov94kJob2amfAsbM0Y8SLLQ&usqp=CAU"},
{"name":"sleeping bags", "Price":"250 $", "Rating":"⭐⭐⭐⭐" ,"Image":"https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1614393358074-N0TBC1LRRXSOWZ3NBZIY/A%2Bview%2Bof%2Btwo%2Bsleeping%2Bbags%2Bin%2Ba%2Btent%2Bwith%2Ba%2Bmountain%2Bin%2Bthe%2Bbackground"}]

const Shop = () => {
  document.title ="Shop"
  console.log(info)
  return (
    <div>
      <Header/>
  
      <div className='body'>
        <div className='plates'>
          {info.map((value,index)=>{
              return <Card name={value.name} price={value.Price} rating={value.Rating} image={value.Image}/> 

          })}

        </div>
      </div>
    </div>
  )
}

export default Shop
