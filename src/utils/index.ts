import {z}from "zod"
export const sendMailSchema=z.object({
    email:z.string().email("Please check your email")
})