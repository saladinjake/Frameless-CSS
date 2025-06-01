import { useState } from 'react';
import { withRouter } from '../../utils/withRouter';

const MixInComponent = (props: any) => {
  const [flagComponent, setFlagComponent] = useState(props.when)

  return (
    <div>
      {props.children({
        ...props,
        flagComponent,
        isLoading: (props.isLoading) ,
        childComponent: props.childComponent,
        // more props mixins
      })}
    </div>
  )
}


export default withRouter(MixInComponent);
  