import './AddKindergartenReviewModal.scss';

import { AddReviewModal } from '../../../../components/AddReviewModal';
import { useDispatch, useSelector } from 'react-redux';

import { useCreateKindergartenReviewMutation } from '../../../../api/kindergartenReviewsApi';
import { closeAllModals } from '../../../../store/modalsSlice';

export const AddKindergartenReviewModal = ({ data, org }) => {
  const isOpen = useSelector(
    (state) => state.modals.isOpenAddKindergartenReviewModal
  );

  const [createKindergartenReview, { isLoading }] =
    useCreateKindergartenReviewMutation();

  const dispatch = useDispatch();

  const onSubmit = async (reviewData) => {
    try {
      const response = createKindergartenReview({
        kindergarten_id: data.id,
        body: reviewData,
      });
      console.log(response);
      dispatch(closeAllModals());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddReviewModal
      isOpen={isOpen}
      isLoading={isLoading}
      data={data}
      org={org}
      onSubmit={onSubmit}
    />
  );
};
