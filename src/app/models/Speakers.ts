import { Event } from "./Event"
import { Socials } from "./Socials"

export interface Speaker{
  id: number
  name: string
  miniCurriculum: string
  imageUrl: string
  phone: string
  email: string
  socials: Socials[]
  speakerEvent: Event[]
}