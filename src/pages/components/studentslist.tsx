const StudentList = ({ names, cb }: { names: any, cb: Function }) => {
	return (<>
		<div className="flex flex-col  m-3  ">
			<div className="flex flex-col text-left ">
				{names.map((x: any) => <span className="p-3 border-2 border-gray-700 bg-pink-50 mb-1 w-full " onClick={() => cb(x)}> {x}</span>)}
			</div>
		</div>
	</>);
}
export default StudentList;
