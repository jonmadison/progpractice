#include <iostream>


struct Node {
	int data;
	Node* link;
};

void insert(int x);
void printList(Node* list);

struct Node* head;

int main(void) {
	head = NULL;
	int n;
	std::cout << "How many numbers? ";
	std::cin >> n;

	for(int i = 0; i < n; i++) {
		int x;
		std::cout << "Number: ";
		std::cin >> x;
		insert(x);
		printList(head);
	}

	return 0;
}

void printList(Node* list) {
	//now print the list
	Node* temp = list;
	while(temp->link != NULL) {
		std::cout << temp->data << std::endl;
		temp = temp->link;
	}

	std::cout<< temp->data << std::endl;
}

void insert(int data) {
	Node* newNode = new Node();
	newNode->data = data;
	//now stick this at the beginning
	newNode->link = head;
	head = newNode;  
	std::cout<<"added " << newNode->data << std::endl;
}