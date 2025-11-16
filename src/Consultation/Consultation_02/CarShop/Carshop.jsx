import Car from "../props/Car";
import React from 'react'

export default function  Carshop() {
    return(
        <div>
            <h1>Car Shop</h1>
            <h2>Cars</h2>
            <Car brend="BWM" color="red"/>
            <Car brend="Tesla" color="green"/>
            <Car brend="Mercedes" color="blue"/>
            <Car brend="Kia" color="yellow"/>
            <Car brend="Opel" color="pink"/>
            <Car brend="Lada" color="black"/>
        </div>
    );
}