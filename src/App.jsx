import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';

import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartOutlined,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
} from '@material-ui/icons';
import { motion } from 'framer-motion';

import Item from './components/Item';

const AppContainer = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  display: flex;
  color: #fff;
  background: linear-gradient(179deg, #176eb5, #d545d7);
  text-shadow: 1px 0px 2px #8dc4f0;

  .sidebar_container {
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
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 15px;
      margin: 10px;
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5.5px);
      border-radius: 10px;

      .lines_icon {
        display: flex;
        align-self: flex-end;
        border-radius: 5px;
      }

      .profile {
        display: flex;
        width: 4rem;
        align-items: center;
        border-radius: 50%;
        margin-bottom: 1rem;
        align-self: center;

        & > img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .groups {
        display: flex;
        flex-direction: column;
        width: 100%;

        .group {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 20px;

          h3 {
            font-size: 1rem;
            margin: 10px 0;
          }
        }
      }
    }
  }

  .body_container {
    flex: 1;
  }
`;

function App() {

  const [open, setOpen] = useState(true);

  const lineWhileHover = {
    scale: 1.2,
    rotate: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(3.5px)',
    WebkitBackdropFilter: 'blur(3.5px)',
    // border: '1px solid rgba(255, 255, 255, 0.18)',
    cursor: 'pointer',
    transition: {
      delay: 0.1,
      duration: 0.4,
    },
  };

  const profileWhileHover = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(3.5px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    WebkitBackdropFilter: 'blur(3.5px)',
    // border: '1px solid rgba(255, 255, 255, 0.18)',
    cursor: 'pointer',
  };

  const sideContainerVariants = {
    true: {
      width: '15rem',
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: '3rem',
      transition: {
        delay: 0.4
      }
    }
  };

  const profileVariants = {
    true: {
      alignSelf: 'center',
      width: '6rem',
    },
    false: {
      alignSelf: 'flex-start',
      marginTop: '2rem',
      width: '3rem',
    }
  };

  const titleAnimation = {
    opacity: open ? 1 : 0, height: open ? 'auto' : 0
  };

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <AppContainer>
      <motion.div
        data-open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar */}
        <motion.div className="sidebar" 
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div className="lines_icon" whileHover={lineWhileHover} onClick={handleToggle}>
            <TocRounded />
          </motion.div>

          {/* profile */}
          <motion.div className="profile"
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            transition={{duration: 0.4}}
            whileHover={profileWhileHover}
          >
            <img
              src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg"
              alt="profile-img"
            />
          </motion.div>

          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3 animate={titleAnimation}>ANALYTICS</motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartOutlined />} name="Performance" />
            </div>
            {/* group 2 */}
            <div className="group">
              <motion.h3 animate={titleAnimation}>Content</motion.h3>
              <Item icon={<AttachMoneyRounded />} name="Sales" />
              <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />{' '}
              <Item icon={<AccountCircleRounded />} name="Customers" />
            </div>
            {/* group 2 */}
            <div className="group">
              <motion.h3 animate={titleAnimation}>CUSTOMIAZTION</motion.h3>
              <Item icon={<SettingsRemoteRounded />} name="Segments" />
              <Item icon={<ColorLensRounded />} name="Themems" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="body_container"></div>
    </AppContainer>
  );
}

export default memo(App);
