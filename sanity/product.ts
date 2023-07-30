import { defineType,defineField } from "sanity";

export const product = defineField({
    name: "product",
    type: 'document',
    title: "Product",
    fields: [
        {
            name: "title",
            title: "Product Title",
            type: "string",
        },
        {
            name: "description",
            title: "Product Description",
            type: "string",
        },
        {
            name: "price",
            title: "Product price",
            type: "number",
        },
        {
            name: "image",
            title: "Product Image",
            type: "image",
        },
        {
            name: "type",
            title: "Product type",
            type: "string",
        },
        {
            name: "size",
            title: "Product size",
            type: "string",
        },
        defineField({
            name: "category",
            title: "Product category",
            type: "reference",
            to: [
                {
                    type: "category",
                },
                  
            ] 
        })
       
    ]
}
)