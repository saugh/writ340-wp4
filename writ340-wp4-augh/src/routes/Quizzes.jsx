export default function Quizzes() {
    return (
        <div className="quizzes container col-12">
            <h1><strong>Quizzes</strong></h1>
            <h2><em>Thinking about getting a dog?</em></h2>
            <h3>Take one of our quizzes to prepare!</h3>
            <div className="row">
                <img className="col-5" src="https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2023/corgi-walking-on-leash.jpg?h=370&w=660&la=en&hash=75F9113C9EAD114133F5B6BB93934581"/>
                <div className="quiz col-6">
                    <h4>Dog Ownership</h4>
                    <p>This is a general knowledge test on dogs and the responsibilities of dog ownership. Take this quiz to prepare!</p>
                </div>
                <img className="col-5"src="https://www.annexvet.com/wp-content/uploads/sites/323/2022/07/shutterstock_336435884.jpg"/>

                <div className="quiz col-6">
                    <h4>Dog Breeds</h4>
                    <p>Test how well you can identify different dog breeds!</p>
                </div>
            </div>
            <div className="row">
                <img className="col-5" src="https://highlandcanine.com/wp-content/uploads/2021/05/two-small-dogs-running-in-grass.jpg"/>
                <div className="quiz col-6">
                    <h4>What dog breeds are best for you?</h4>
                    <p>Find out what dog breed is most suitable for your home and lifestyle!</p>
                </div>
                <img className="col-5" src="https://qph.cf2.quoracdn.net/main-qimg-c1630e23411044615aec2ead79e328a6-lq"/>
                <div className="quiz col-6">
                    <h4>How accurately can you interpret dog behaviors and expressions?</h4>
                    <p>After adopting a dog, it is important to be able to understand what your dog is trying to say through their actions and expressions.</p>
                </div>
            </div>
        </div>
    )
}