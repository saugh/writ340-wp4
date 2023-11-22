export default function Quizzes() {
    return (
        <div className="quizzes container col-12">
            <h1><strong>Quizzes</strong></h1>
            <h2><em>Thinking about getting a dog?</em></h2>
            <h3>Take one of our quizzes to prepare!</h3>
            <div className="row">
                <img className="col-5" src="https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2023/corgi-walking-on-leash.jpg?h=370&w=660&la=en&hash=75F9113C9EAD114133F5B6BB93934581" alt="corgi on a walk"/>
                <a href="https://take.quiz-maker.com/QEE7WJUSV" target="_blank" rel="noreferrer" className="quiz col-6">
                    <h4><u>Dog Ownership</u></h4>
                    <p>This is a general knowledge test on dogs and the responsibilities of dog ownership. Take this quiz to prepare!</p>
                </a>
                <img className="col-5"src="https://www.annexvet.com/wp-content/uploads/sites/323/2022/07/shutterstock_336435884.jpg" alt="puppies of different breeds"/>

                <a href="https://take.quiz-maker.com/Q3KHD4GD9" target="_blank" rel="noreferrer" className="quiz col-6">
                    <h4><u>Dog Breeds</u></h4>
                    <p>Test how well you can identify different dog breeds!</p>
                </a>
            </div>
            <div className="row">
                {/* <img className="col-5" src="https://highlandcanine.com/wp-content/uploads/2021/05/two-small-dogs-running-in-grass.jpg" alt="two dogs playing outside"/>
                <a href="" target="_blank" rel="noreferrer" className="quiz col-6">
                    <h4><u>What dog breeds are best for you?</u></h4>
                    <p>Find out what dog breed is most suitable for your home and lifestyle!</p>
                </a> */}
                <img className="col-5" src="https://qph.cf2.quoracdn.net/main-qimg-c1630e23411044615aec2ead79e328a6-lq" alt="dog tilting head"/>
                <a href="https://take.quiz-maker.com/QBKAG6YK7" target="_blank" rel="noreferrer" className="quiz col-6">
                    <h4><u>Interpreting Dog Behaviors and Expressions</u></h4>
                    <p>How accurately can you understand what your dog is trying to say through their actions and expressions?</p>
                </a>
            </div>
        </div>
    )
}