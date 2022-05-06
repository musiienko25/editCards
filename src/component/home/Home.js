import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './home.scss';

function Home() {
  const navigate = useNavigate();
  const { customers } = useSelector((store) => store.customers);
  function handleCLick(id) {
    navigate(`/posts/edit/${id}`);
  }
  return (
    <div className="home">
      <div className="home_wrapper">
        {customers.map((data) => (
          <div key={data.id}>
            <a
              className="home_cardLink"
              onDoubleClick={() => handleCLick(data.id)}
            >
              <div className="home_cardItem" key={data.id}>
                <div className="home_card">
                  <div className="home_cardHeader">
                    <div>
                      {data?.title?.substring(0, 20)}
                    </div>
                    <div>
                      {data?.body?.substring(0, 50)}
                    </div>
                  </div>

                  <div className="home_cardFooter">
                    <div>{data.email}</div>
                    <div>{data.address.street}</div>
                    <div>{data.address.suite}</div>
                    <div>{data.address.city}</div>
                    <div>{data.address.zipcode}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
