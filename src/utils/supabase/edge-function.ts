"use server"

import { createClient } from "@/utils/supabase/server";

export async function sendEmails(date: Date, time: string, email: string, name: string): Promise<boolean> {
     console.log(date)
     const supabase = await createClient()
     const { data, error } = await supabase.functions.invoke("send-email", {
        body: {html: `<h3>Hey there ${name}!</h3>\n<p>You are receiving this email because you are trying to book a spot in Clelia's calendar on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${time} (Central European Time). She will be in contact with you soon about the feasibility of the meeting!</p>\n<br>\n<p>All the best,</p>\n<br>\n<p>BookMe Bot on behalf of Clelia</p>\n`, to: email, subject: "Your BookMe Request"}
     })
     if (error) {
        console.log("An error occurred:", error)
        return false
     } else {
        console.log(data)
        const { data: data1, error: error1 } = await supabase.functions.invoke("send-email", {
        body: {html: `<h3>Hey there!</h3>\n<p>You are receiving this email because ${name} is trying to book a spot in your calendar on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${time} (Central European Time). Please let them know whether that works for you or not!</p>\n<br>\n<p>All the best,</p>\n<br>\n<p>BookMe Bot</p>\n`, to: "astraberte9@gmail.com", subject: "You Got a BookMe Request!"}
     })
     if (error1) {
        console.log("An error occurred:", error1)
        return false
     } else {
        console.log(data1)
        return true
     }
    }
}