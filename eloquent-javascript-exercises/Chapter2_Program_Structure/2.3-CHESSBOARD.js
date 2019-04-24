size = 8;
s = "";
j=0;
flag=0;
while(j<size)
{
for(i=0;i<size;i++)
{  if(j%2==0){
  	 if(i%2==0)
    	s+=" ";
  	 else
    	s+="#";}
   else{
   	 if(i%2==0)
    	s+="#";
  	 else
    	s+=" ";
   }
     
}
console.log(s);
s = "";
flag=j
j++;
}
