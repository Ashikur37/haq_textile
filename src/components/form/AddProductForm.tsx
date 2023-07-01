"use client"
import { ProductSchema } from "@/lib/validations/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";
import { useForm } from "react-hook-form";
export default function AddProductForm(){
    const { register, handleSubmit,
        formState: { errors }
      } = useForm<Product>({
        resolver: zodResolver(ProductSchema)
      });
    
      const onSubmit = async (data:Product) => {
        // await addBoard(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Title</label>
          <input type="text" {...register('name')} />
          {errors.name?.message && <p>{errors.name?.message}</p>}
          <input type="submit" />
        </form>
      )
}