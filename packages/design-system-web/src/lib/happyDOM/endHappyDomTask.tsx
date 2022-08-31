/**
 * ends a happyDOM task, if we are on server with happyDOM.
 * happyDOM.whenAsyncComplete() will wait for this task.
 * @returns
 */


export function endHappyDomTask(task: string) {
  // @ts-ignore
  window?.happyDOM?.asyncTaskManager.endTask(task);
}
