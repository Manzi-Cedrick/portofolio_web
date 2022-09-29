import type { NextApiRequest, NextApiResponse } from "next";
import Reviews from "../../../model/Reviews";

const validateEmail = (email:string) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
}
const validateForm = async (FormData : any ) => {
    let errors = { username: '', email: '', subject: '' , message : ''};
    if(!FormData.name.trim()) {
        errors.username = "Username required";
    }if(!FormData.message.trim()) {
        errors.message = "Message required";
    }else if(!validateEmail(FormData.email)){
        errors.email = "Email is invalid"
    }
    return errors;
}
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const FormData = req.body;
    const FoundErrors = await validateForm(FormData);
    if(FoundErrors.email || FoundErrors.email || FoundErrors.username){
        res.status(400).json({errors : FoundErrors,msg : 'Bad Input Fields'})
    }else{
        const newReview = new Reviews({
            username : FormData.username,
            email : FormData.email,
            subject : FormData.subject,
            message : FormData.message
        });
        newReview
        .save()
        .then(() =>
        res.status(200).json({msg : 'Success created the review',Review: newReview})
        ).catch((err:string) =>{
            res.status(400).json({ error: "Error on '/api/reviews.controller/': " + err })
        })
    }
}