#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <math.h>

using namespace std;

int numCases = 0;

vector<int> properDivisors(int number) {
	// cout << "properDivisors: " << number << endl;
	vector<int> result;
	int n = static_cast<int>(sqrt(number));
	if(number==0 || number==1) {
		result.push_back(0);
		return result;
	}

	result.push_back(1);
	for(int i = 2; i < n+1; ++i) {
		if( number % i == 0) {
			//add cofactors
			if(i != number) { 
				// cout << "adding cofactor " << i << endl;
				result.push_back(i);
			}

			if( i!= sqrt(number)) {
				if(number/i != number) {
					// cout << "= adding cofactor " << number/i << endl;
					result.push_back(number/i);
				}
			}
		}
	}
	return result;
}

int addDivisors(vector<int> divisors) {
	int result = 0;
	for( vector<int>::const_iterator i = divisors.begin(); i != divisors.end(); ++i)
	    result += *i;
	return result;
}


void printDivisors(vector<int> divisors) {
	for( vector<int>::const_iterator i = divisors.begin(); i != divisors.end(); ++i)
	    cout << *i << ',';
	cout << endl;
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
			int num = stoi(line);
			// cout << num << ":" << endl;
			vector<int> divisors = properDivisors(num);
			// printDivisors(divisors);
			cout << addDivisors(divisors) << endl;
		}
		++i;
	}

	return 0;
}