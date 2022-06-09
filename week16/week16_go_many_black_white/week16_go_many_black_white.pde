void setup(){
 size(450,450);  
}
int []bx=new int[100];
int []by=new int[100];
int N=0;
void draw(){
 background(#D69C65);
  for(int y=50;y<450;y+=50){
    line(0,y,450,y);
  }  
  for(int x=50;x<450;x+=50){
    line(x,0,x,450);
  }
  for(int i=0;i<N;i++){
    if(i%2==0) fill(0);//2倍數,黑
    else fill(255);//白
    ellipse(bx[i],by[i],30,30);
  }
  if(N%2==0) fill(0);//2倍數,黑
  else fill(255);//白
  ellipse(mouseX,mouseY,30,30);
}
void mousePressed(){
 bx[N]=mouseX; by[N]=mouseY; 
 N++;
}
