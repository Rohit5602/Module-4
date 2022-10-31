var names=new Array();
names[0]="Rohit";
names[1]="Pradeep";
names[2]="Rahul";
names[3]="Shivam";
names[4]="Satyam";
names[5]="Shubham";
names[6]="Priya";
names[7]="Shashi";
names[8]="Khushi";
names[9]="Shushma";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='R'|| names[i].charAt(0)==='r'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}