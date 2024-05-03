import './Descriptions.css';

const Descriptions = () => {
    return (
      <article>
        <div className="house-photo">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            target="description"
          />
          <div className="shadow-desc">
            <h2>Lorem ipsum dolor sit</h2>
            <h2>amet, consectetur</h2>
            <h2>adipisicing elit. Tempore,</h2>
            <h2>debitis.</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
            <p>elit. Aliquid, molestiae! Quidem est esse numquam</p>
            <p>odio deleniti, beatae, magni dolores provident</p>
            <p>quaerat totam eos, aperiam architecto eius quis</p>
            <p>quibusdam fugiat dicta.</p>
            <br />
            <button id="gettouch">Get in Touch</button>
          </div>
        </div>
      </article>
    );
};

export default Descriptions;