import React from 'react';
import styled from 'styled-components';

import { TocRounded } from '@material-ui/icons';

const AppContainer = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  display: flex;

  .sidebar_container {
    background-color: red;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .sidebar {
      display: flex;
      width: 14rem;
      height: 90%;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      border: 1px solid #000;
      padding: 15px;
      margin: 10px;

      .lines_icon {
        display: flex;
        align-self: flex-end;
        border-radius: 5px;
        border: 1px solid #000;
      }

      .profile {
        display: flex;
        width: 4rem;
        align-items: center;
        border-radius: 50%;
        margin-bottom: 1rem;
        align-self: center;

        &>img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
  }

  .body_container {
    flex: 1;
    background-color: blue;
  }
`;

function App() {
  return (
    <AppContainer>
      <div className='sidebar_container'>
        <div className='sidebar'>
          <div className='lines_icon'>
            <TocRounded />
          </div>

          {/* profile */}
          <div className='profile'>
            <img src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg" alt="profile-img" />
          </div>
        </div>
      </div>
      <div className='body_container'>
        i am body <hr />
      </div>
    </AppContainer>
  );
}

export default App;
