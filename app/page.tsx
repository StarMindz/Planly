import Hero from './components/hero'
import PlanningForm from './components/planning-form'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container max-w-4xl mx-auto p-4 mt-16">
        <PlanningForm />
      </div>
    </>
  )
}

