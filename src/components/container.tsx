function Container(){

    return(
       <section className="container">
                <div className="side">
                    <div>
                        <div className="cover"></div>
                         <section className="profile">
                            <img src="/image/bwall.jpg" alt="" />
                         </section>
                         <h4>Munachimso Covenant2</h4>
                         <p className="full-stack">
                            Full-stack Developer/mern/python<br></br> developer at CHIPNET LIMITED
                         </p>
                         <section className="viewer">
                            <section className="viewerscount">
                                <p>Profile viewers</p><span>53</span>
                            </section>
                            <section className="viewerscount">
                                <p>Post Impression</p><span>25</span>
                            </section>
                         </section>
                         <section>
                            <p className="aielab">
                                Strengthen your profile with AI writing assistant
                            </p>
                            <section className="premium">
                               <i className="bi bi-dropbox"></i>
                               <h6>Try premium for  NGN0 </h6>
            
                            </section>
                            <hr></hr>
                            <section className="premium">
                                <i className="bi bi-bookmark-fill item"></i>
                                <h6 >My items</h6>
                            </section>
                         </section>
                    </div>
                    <div>
                        <section className="recent">
                            <p>Recent</p>
                            <section className="premium">
                            <i className="bi bi-person-fill item"></i>
                                <h6 >React js and react native</h6>
                            </section>
                            <section className="premium">
                            <i className="bi bi-person-fill item"></i>
                                <h6 >Python Web developers</h6>
                            </section>
                            <section className="premium">
                            <i className="bi bi-person-fill item"></i>
                                <h6 >Fintech circle</h6>
                            </section>
                            <section className="viewerscount">
                                <span>Events</span><p>+</p>
                            </section>
                            <button>Discover More</button>
                        </section>
                    </div>
                </div>
                <div className="post"></div>
                <div className="right"></div>
       </section>
    )
}

export default Container;