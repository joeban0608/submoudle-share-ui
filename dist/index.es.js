import { jsx as e } from "react/jsx-runtime";
//#region src/share-ui/Button.tsx
function t({ text: t = "Default" }) {
	return /* @__PURE__ */ e("button", {
		className: "px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 active:scale-95 transition cursor-pointer",
		children: t
	});
}
//#endregion
export { t as default };
