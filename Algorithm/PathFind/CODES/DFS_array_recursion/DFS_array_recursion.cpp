#include <iostream>
#include <vector>
#include <array>

using namespace std;

// 이동 경로
vector<array<int, 2>> route;

// visited array + reculsion
void DFS_array_reculsion(array<array<int, 10>, 10>& map_arr, array<array<bool, 10>, 10>& visited, int& N, int& M, int now_x, int now_y) {
	// 이미 방문한 노드면 종료
	if (!visited[now_x][now_y]) return;
	// 이동 가이드, 4 방향
	array<array<int, 2>, 4> move_guide;
	move_guide[0] = { 0, 1 };
	move_guide[1] = { 1, 0 };
	move_guide[2] = { 0, -1 };
	move_guide[3] = { -1, 0 };
	// 방문 표시
	visited[now_x][now_y] = false;
	// 경로 추가
	route.push_back({ now_x, now_y });
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
			DFS_array_reculsion(map_arr, visited, N, M, next_x, next_y);
		}
	}
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
	// 방문 목록
	array<array<bool, 10>, 10> visited;
	// 방문 목록 true 로 초기화
	for (int i = 0; i < N; i++) visited[i].fill(true);
	// 함수 실행
	DFS_array_reculsion(map_arr, visited, N, M, 0, 0);

	cout << "[ ";
	for (auto arr : route) {
		cout << "[ " << arr[0] << " " << arr[1] << " ] ";
	}
	cout << "]\n";
}