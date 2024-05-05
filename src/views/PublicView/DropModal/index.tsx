import DropModal from "./DropModal";

/**
 * children 的优先级比 content 优先级高
 * buttonText: 打开弹窗的按钮文字
 * title: 弹窗 title 文字
 * okText: 弹窗确认按钮的文字
 * cancelText: 弹窗取消按钮的文字
 * footer: 自定义弹窗底部按钮
 * isShowOkButton: 是否展示弹窗底部确认按钮
 * isShowCancelButton: 是否展示弹窗底部取消按钮
 * children: Modal内容区域文字, children 的优先级比 content 优先级高
 * content: Modal内容区域文字, children 的优先级比 content 优先级高
 */

const DropModalPage = () => {
  const footer = [
    {
      label: "按钮1",
      type: "primary",
      isCloseModal: true,
      onClick: () => console.log("按钮1"),
    },
    {
      label: "按钮2",
      type: "primary",
      onClick: () => console.log("按钮2"),
    },
    // 可以添加更多按钮
  ];
  return <DropModal footer={footer} />;
};

export default DropModalPage;
