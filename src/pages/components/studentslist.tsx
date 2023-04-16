const StudentList = ({ names }: { names: any }) => {
	// console.log(names)
	return (<>
		<div className="flex flex-col ">
			{names.map((x: any) => <span> {x.name}</span>)}
		</div>
	</>);
}
export default StudentList;
