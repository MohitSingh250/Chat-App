import ChatForum from "@/components/chatforum"



export default async function Page({ params }) {
    const { slug } = await params
    return <ChatForum slug={slug}/>

  }