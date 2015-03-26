#include <stdlib.h>
#include <string>
#include <vector>
#include <iostream>
#include <sstream>
#include <algorithm>
#include <iterator>

/*
Sieve of Erastosthenes 
*/

using namespace std;

int numCases = 0;

void printVector(vector<int> v) {
	for( vector<int>::const_iterator i = v.begin(); i != v.end(); ++i)
	    cout << *i << endl;
	cout << endl;
}

void printStringVector(vector<string> v) {
	for( vector<string>::const_iterator i = v.begin(); i != v.end(); ++i)
	    cout << *i << endl;
	cout << endl;
}


void printBoolVector(vector<bool> v) {
	for( vector<bool>::const_iterator i = v.begin(); i != v.end(); ++i)
	    cout << *i << endl;
	cout << endl;
}


void printArray(unsigned short* arr,int size) {
	for(int i = 0; i < size; i++) {
		cout << static_cast<unsigned>(arr[i]) << ", ";
	}
}

vector<int> primesSieve(int lowerRange, int upperRange) {
	const int top = upperRange;
	vector<bool> primes;
	// cout << "sieve between " << lowerRange << ", " << upperRange << endl;
	vector<int>result;
	for(int i = 0; i < upperRange; i++) {
		primes.push_back(true);
	}

	// printBoolVector(primes);

	for(int i = 2; i < upperRange; i++) {
		if(primes[i] == 0) continue;
		// cout << "found prime: " << i << ", removing factors" << endl;
		for(int j = 0; i*j < upperRange; j++) {
			primes[i*j] = false;
		}
		if(i >= lowerRange && i <= upperRange) result.push_back(i);
					// cout << endl;

		// printBoolVector(primes);
	}
	// cout << " result: ";
	primes.clear();
	return result;
}

void primesSievePrint(int lowerRange, int upperRange) {
	const int top = upperRange;
	vector<bool> primes;
	// cout << "sieve between " << lowerRange << ", " << upperRange << endl;
	vector<int>result;
	for(int i = 0; i < upperRange; i++) {
		primes.push_back(true);
	}

	// printBoolVector(primes);

	for(int i = 2; i < upperRange; i++) {
		if(primes[i] == 0) continue;
		// cout << "found prime: " << i << ", removing factors" << endl;
		for(int j = 0; i*j < upperRange; j++) {
			primes[i*j] = false;
		}
		if(i >= lowerRange && i <= upperRange) result.push_back(i);
		// printBoolVector(primes);
	}
	// cout << " result: ";
	printVector(result);
	primes.clear();
}

vector<string> splitLine(string line) {
	vector<string> result;
	istringstream iss(line);
	copy(istream_iterator<string>(iss),
	     istream_iterator<string>(),
	     back_inserter(result));
	return result;
}

int main() {
	int i = 0;
	string *s;


    for (string line; getline(cin, line);) {
		if(i == 0) {
			numCases = stoi(line);
			// cout << numCases << " cases" << endl;
			s = new string[numCases+1];
		} else {
			s[i] = line;
			vector<string> range = splitLine(line);
			// printStringVector(range);
			// cout << range[0] << ":" << range[1] << endl;
			primesSievePrint(atoi(range[0].c_str()),atoi(range[1].c_str()));
			cout << endl;
		}
		++i;
	}

	return 0;
}