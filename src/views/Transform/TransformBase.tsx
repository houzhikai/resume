import React from "react";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import UseIntroduce from "../../components/UseIntroduce";

const TransFormBase = () => {

  const describe = <div>
    111
  </div>
  return (
    <>
      <CustomBreadcrumb arr={['动画', '旋转']} />
      <UseIntroduce describe={describe} />
    </>
  )
}
export default TransFormBase