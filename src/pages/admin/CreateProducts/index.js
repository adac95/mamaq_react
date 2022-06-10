import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminProduct from "../../../components/admin/create-products/AdminProduct";
import {CreateProductsForm} from "../../../components/admin/create-products/CreateProductsForm"

import "./styles.css";
export const CreateProducts = () => {
  const products = useSelector((state) => state.listProducts);
  return (
    <div>
      <section className='create-item-section'>
        <CreateProductsForm/>
        <div>
          <p className='p create-item__p'>
            Revisa como quedó la carta en la página! Haciendo click {" "}
            <Link className='a create-item__a-render' to='/carta'>
              Aquí
            </Link>
          </p>
        </div>
      </section>
      <section id='list-item-section' className='list-item-section'>
        <h2 className='h2 items__h2'>Productos</h2>
        <table className='items-table'>
          <thead>
            <tr className='items__tr'>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {products.map((product) => (
            <AdminProduct
              key={product._id}
              product={product}
            />
          ))}
        </table>
      </section>
    </div>
  );
};
