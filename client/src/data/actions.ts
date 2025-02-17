'use server'

import { subscribeService } from '@/app/services/subscription'
import { z } from 'zod'

export async function subscribeAction(previousState: any, formData: FormData) {

  console.log('previousState', previousState);
  

  const emailSchema = z.object({
    email: z.string().toLowerCase().email()
  }).required({
    email: true
  })

  const email = formData.get('email')?.toString() as string

  const validation = emailSchema.safeParse({email})

  if(!validation.success) {
    return {
      ...previousState,
      zodErrors: validation.error.flatten().fieldErrors,
      strapiErrors: null
    }
  }

  const response = await subscribeService(email)

  if(!response) {
    return {
      ...previousState,
      zodErrors: null,
      strapiErrors: null,
      errorMessage: 'An error occured',
      successMessage: null
    }
  }

  if(response.error) {
    return {
      ...previousState,
      zodErrors: null,
      strapiErrors: response.error.message,
      errorMessage: null,
      successMessage: null
    }
  } else {
      return {
        ...previousState,
        zodErrors: null,
        strapiErrors: null,
        errorMessage: null,
        successMessage: "Thanks for subscribing"
      }
  }
}