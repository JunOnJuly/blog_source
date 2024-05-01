#include <iostream>
#include <vector>
#include <array>

using namespace std;

// visited array + stack
vector<array<int, 2>> DFS_array_stack(array<array<int, 10>, 10>& map_arr, int& N, int& M) {
	// 이동 가이드, 4 방향
	array<array<int, 2>, 4> move_guide;
	move_guide[0] = { 0, 1 };
	move_guide[1] = { 1, 0 };
	move_guide[2] = { 0, -1 };
	move_guide[3] = { -1, 0 };
	// 모든 이동경로 기록
	vector<array<int, 2>> routes;
	// 스택
	vector<array<int, 2>> stk = { {0, 0} };
	// 방문 목록
	array<array<bool, 10>, 10> visited;
	// 방문 목록 true 로 초기화
	for (int i = 0; i < 10; i++) visited[i].fill(true);
	// 스택이 빌 때 까지 탐색
	while (!stk.empty()) {
		// 현재 인덱스
		int now_x = stk.back()[0];
		int now_y = stk.back()[1];
		// 방문 기록
		visited[now_x][now_y] = false;
		// 이동경로 기록
		routes.push_back({ now_x, now_y });
		// 이동 가이드를 따라 네방향 탐색
		for (int i = 0; i < 4; i++) {
			// 다음 후보 인덱스
			int next_x = now_x + move_guide[i][0];
			int next_y = now_y + move_guide[i][1];
			//// 후보 인덱스가 조건에 부합하면
			// 인덱스 범위안에 존재하는지
			// 방문한적 없는 인덱스인지
			// 벽이 아닌지
			if ((next_x >= 0 and next_x < N) and (next_y >= 0 and next_y < M) and
				(visited[next_x][next_y]) and
				(map_arr[next_x][next_y] == 0)) {
				// 스택에 삽입
				stk.push_back({ next_x, next_y });
				// 바로 다음 인덱스 탐색
				break;
			}
			// 조건에 부합하는 후보 인덱스가 존재하지 않으면
			else if (i == 3) {
				// 스택에서 팝
				stk.pop_back();
			}
		}
	}

	return routes;
}


int main(void) {
	// 격자의 크기, 행 / 열
	int N = 10;
	int M = 10;
	// 맵 생성, 0 : 길 / 1 : 벽
	array<array<int, 10>, 10> map_arr;
	map_arr[9] = { 1, 0, 1, 1, 0, 0, 0, 1, 0, 0 };
	map_arr[8] = { 0, 0, 1, 1, 0, 1, 0, 0, 0, 1 };
	map_arr[7] = { 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 };
	map_arr[6] = { 0, 0, 0, 1, 1, 0, 0, 0, 1, 0 };
	map_arr[5] = { 1, 1, 0, 1, 0, 1, 1, 0, 1, 0 };
	map_arr[4] = { 0, 0, 0, 1, 0, 1, 0, 0, 0, 0 };
	map_arr[3] = { 1, 1, 0, 0, 0, 0, 0, 1, 1, 0 };
	map_arr[2] = { 1, 1, 0, 1, 0, 1, 0, 0, 1, 1 };
	map_arr[1] = { 1, 0, 0, 1, 0, 0, 1, 0, 1, 0 };
	map_arr[0] = { 0, 0, 1, 0, 0, 1, 1, 1, 1, 0 };

	cout << "[ ";
	for (auto arr : DFS_array_stack(map_arr, N, M)) {
		cout << "[ " << arr[0] << " " << arr[1] << " ] ";
	}
	cout << "]\n";
}