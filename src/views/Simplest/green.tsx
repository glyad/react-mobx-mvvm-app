import React from 'react';
import { observer } from 'mobx-react';
import { SimplestViewModel } from 'viewmodels/SimplestViewModel';

type Props = {
  viewModel: SimplestViewModel;
};

const Green: React.FC<Props> = observer(({ viewModel }) => (
  <div style={{ color: 'green' }}>
    {viewModel.message}
  </div>
));

export default Green;
