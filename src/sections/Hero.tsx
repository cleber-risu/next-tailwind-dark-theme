import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        Hi I&apos;m <span className="dark:text-purple-600">RiSu</span>
      </h1>
      <h3 className="text-4xl my-3">I am a Full Stack developer</h3>
      <p className="text-gray-700 mb-8 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eligendi, ducimus fugit quibusdam facere eius fuga suscipit repudiandae quasi velit necessitatibus maiores est dolores quisquam eveniet accusantium exercitationem sunt quae!</p>
      <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
    </section>
  )
}

export default Hero
