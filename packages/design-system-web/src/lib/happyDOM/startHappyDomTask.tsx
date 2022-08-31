/**
 * starts a happyDOM task, if we are on server with happyDOM.
 * happyDOM.whenAsyncComplete() will wait for this task.
 * @returns
 */


export function startHappyDomTask(): string {
  // @ts-ignore
  return window?.happyDOM?.asyncTaskManager?.startTask();
}
