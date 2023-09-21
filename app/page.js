import Feed from '@components/Feed';
const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Comment Anonymously 
        <br className="max-md:hidden"/>
        <span className="blue_gradient text-center"> Nobody knows!</span></h1>
        <p className='desc text-center'>You can share Opinions, Facts, Tips or confess anything without worrying of getting yourself revealed.</p>
        
      <Feed/>
      </section>
    </div>
  )
}

export default Home;
