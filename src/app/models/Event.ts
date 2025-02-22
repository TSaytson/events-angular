import { Batch } from "./Batch";
import { Socials } from "./Socials";
import { Speaker } from "./Speakers";

export interface Event{
  Id:number,
  location: string,
  eventDate: string,
  topic: string,
  qntPeople: number,
  imageUrl: string,
  phone: string,
  email: string,
  batches: Batch[],
  socials: Socials[],
  speakersEvents: Speaker[]
}