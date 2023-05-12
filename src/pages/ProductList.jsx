import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Container=styled.div``

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;`

const Title=styled.h1`
margin:20px;`

const Filter=styled.div`
`

const FilterText=styled.span`
margin:20px;
font-size:20px;
font-weight: 600;`

const Select=styled.select`
padding:5px;
margin-right:20px;`
const Option=styled.option``
export default function ProductList() {
  return (
   <Container>
    <Navbar/>
    <Announcement/>
    <Title>Dresses</Title>
    <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
            <Option disabled selected>
                Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            </Select>
            <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
    </FilterContainer>
    <Products/>
    <NewsLetter/>
    <Footer/>
   </Container>
  )
}
