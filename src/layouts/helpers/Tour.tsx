import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import type { TourProps } from 'antd';

const TourComp: React.FC<{ title:string }> = ({ title}) => {
  const ref = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        { title }
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};

export default TourComp;
