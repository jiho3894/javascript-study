![1](https://user-images.githubusercontent.com/79081800/115387345-81c33900-a215-11eb-9e56-f84e7d6ab742.png)

conf t 까지 들어간후 
mac-address-table static 1111.1111.1111 vlan 1 interface fa0/1
그 이후
show mac-address-table


![2](https://user-images.githubusercontent.com/79081800/115387381-90115500-a215-11eb-8d41-a1fac4e74dcd.png)

conf t 까지 들어간 후
switchport mode
그 이후
show port-security int fa0/1


![3](https://user-images.githubusercontent.com/79081800/115387402-969fcc80-a215-11eb-95d4-90824ef755ad.png)



![4](https://user-images.githubusercontent.com/79081800/115387417-9b648080-a215-11eb-9c5d-169ff4faa542.png)


![5](https://user-images.githubusercontent.com/79081800/115496865-86373280-a2a5-11eb-8e62-1d494939b502.png)
![6](https://user-images.githubusercontent.com/79081800/115496867-87685f80-a2a5-11eb-8f0e-ec3b4eb390f0.png)

switchport mode trunk

![7](https://user-images.githubusercontent.com/79081800/115496870-8800f600-a2a5-11eb-9177-ac95b23846ac.png)

show interfaces trunk

int fa0/1 들어가서 switchport trunk allowed vlan remove 5

![8](https://user-images.githubusercontent.com/79081800/115497243-3f960800-a2a6-11eb-9546-69003e36e108.png)
![9](https://user-images.githubusercontent.com/79081800/115497244-402e9e80-a2a6-11eb-93b2-9c3ea6b74c4b.png)
![10](https://user-images.githubusercontent.com/79081800/115497246-40c73500-a2a6-11eb-8ebe-e975b2444aae.png)

