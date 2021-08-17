import React from 'react';
import clsx from 'clsx';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { Avatar } from '../../Avatar';

import styles from './ChooseAvatarStep.module.scss';
// import { Axios } from '../../../core/axios';


interface AvatarProps {
  src: string,
  width: string,
  height: string,
  className?: string,
  isVoice?: boolean,
}

export const ChooseAvatarStep: React.FC<AvatarProps> = ({src, width, height, className, isVoice}) => {

  const inputFileRef = React.useRef<HTMLInputElement>(null);



  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title={`Okay!`}
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar src="" width="120px" height="120px" />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image"  type="file" hidden />
        {/* <Button >
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button> */}
      </WhiteBlock>
    </div>
  );
};
