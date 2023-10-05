import { _extends, _objectWithoutPropertiesLoose } from './chunk-QPL63VNK.js';
import { lightenColor, newStyled, scope } from './chunk-SPUAGIB2.js';
import {
  require_checkPropTypes,
  require_object_assign,
  require_react,
} from './chunk-QMHPSTMR.js';
import { require_memoizerific } from './chunk-3J6GS6FI.js';
import {
  __commonJS,
  __commonJS2,
  __toESM,
  __toESM2,
} from './chunk-RKFFWI2D.js';

const require_scheduler_development = __commonJS({
  '../../node_modules/scheduler/cjs/scheduler.development.js': function (
    exports
  ) {
    (function () {
      const enableSchedulerDebugging = !1;
      const enableProfiling = !0;
      let requestHostCallback;
      let requestHostTimeout;
      let cancelHostTimeout;
      let shouldYieldToHost;
      let requestPaint;
      if (typeof window > 'u' || typeof MessageChannel !== 'function') {
        let _callback = null;
        let _timeoutID = null;
        const _flushCallback = function () {
          if (_callback !== null)
            try {
              const currentTime = exports.unstable_now();
              const hasRemainingTime = !0;
              _callback(hasRemainingTime, currentTime), (_callback = null);
            } catch (e) {
              throw (setTimeout(_flushCallback, 0), e);
            }
        };
        const initialTime = Date.now();
        (exports.unstable_now = function () {
          return Date.now() - initialTime;
        }),
          (requestHostCallback = function (cb) {
            _callback !== null
              ? setTimeout(requestHostCallback, 0, cb)
              : ((_callback = cb), setTimeout(_flushCallback, 0));
          }),
          (requestHostTimeout = function (cb, ms) {
            _timeoutID = setTimeout(cb, ms);
          }),
          (cancelHostTimeout = function () {
            clearTimeout(_timeoutID);
          }),
          (shouldYieldToHost = function () {
            return !1;
          }),
          (requestPaint = exports.unstable_forceFrameRate = function () {});
      } else {
        const performance2 = window.performance;
        const _Date = window.Date;
        const _setTimeout = window.setTimeout;
        const _clearTimeout = window.clearTimeout;
        if (typeof console < 'u') {
          const { requestAnimationFrame } = window;
          const { cancelAnimationFrame } = window;
          typeof requestAnimationFrame !== 'function' &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
            typeof cancelAnimationFrame !== 'function' &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              );
        }
        if (
          typeof performance2 === 'object' &&
          typeof performance2.now === 'function'
        )
          exports.unstable_now = function () {
            return performance2.now();
          };
        else {
          const _initialTime = _Date.now();
          exports.unstable_now = function () {
            return _Date.now() - _initialTime;
          };
        }
        let isMessageLoopRunning = !1;
        let scheduledHostCallback = null;
        let taskTimeoutID = -1;
        let yieldInterval = 5;
        let deadline = 0;
        (shouldYieldToHost = function () {
          return exports.unstable_now() >= deadline;
        }),
          (requestPaint = function () {}),
          (exports.unstable_forceFrameRate = function (fps) {
            if (fps < 0 || fps > 125) {
              console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported'
              );
              return;
            }
            fps > 0
              ? (yieldInterval = Math.floor(1e3 / fps))
              : (yieldInterval = 5);
          });
        const performWorkUntilDeadline = function () {
          if (scheduledHostCallback !== null) {
            const currentTime = exports.unstable_now();
            deadline = currentTime + yieldInterval;
            const hasTimeRemaining = !0;
            try {
              const hasMoreWork = scheduledHostCallback(
                hasTimeRemaining,
                currentTime
              );
              hasMoreWork
                ? port.postMessage(null)
                : ((isMessageLoopRunning = !1), (scheduledHostCallback = null));
            } catch (error) {
              throw (port.postMessage(null), error);
            }
          } else isMessageLoopRunning = !1;
        };
        const channel = new MessageChannel();
        var port = channel.port2;
        (channel.port1.onmessage = performWorkUntilDeadline),
          (requestHostCallback = function (callback) {
            (scheduledHostCallback = callback),
              isMessageLoopRunning ||
                ((isMessageLoopRunning = !0), port.postMessage(null));
          }),
          (requestHostTimeout = function (callback, ms) {
            taskTimeoutID = _setTimeout(() => {
              callback(exports.unstable_now());
            }, ms);
          }),
          (cancelHostTimeout = function () {
            _clearTimeout(taskTimeoutID), (taskTimeoutID = -1);
          });
      }
      function push(heap, node) {
        const index = heap.length;
        heap.push(node), siftUp(heap, node, index);
      }
      function peek(heap) {
        const first = heap[0];
        return first === void 0 ? null : first;
      }
      function pop(heap) {
        const first = heap[0];
        if (first !== void 0) {
          const last = heap.pop();
          return (
            last !== first && ((heap[0] = last), siftDown(heap, last, 0)), first
          );
        }
        return null;
      }
      function siftUp(heap, node, i) {
        for (let index = i; ; ) {
          const parentIndex = (index - 1) >>> 1;
          const parent = heap[parentIndex];
          if (parent !== void 0 && compare(parent, node) > 0)
            (heap[parentIndex] = node),
              (heap[index] = parent),
              (index = parentIndex);
          else return;
        }
      }
      function siftDown(heap, node, i) {
        for (let index = i, { length } = heap; index < length; ) {
          const leftIndex = (index + 1) * 2 - 1;
          const left2 = heap[leftIndex];
          const rightIndex = leftIndex + 1;
          const right2 = heap[rightIndex];
          if (left2 !== void 0 && compare(left2, node) < 0)
            right2 !== void 0 && compare(right2, left2) < 0
              ? ((heap[index] = right2),
                (heap[rightIndex] = node),
                (index = rightIndex))
              : ((heap[index] = left2),
                (heap[leftIndex] = node),
                (index = leftIndex));
          else if (right2 !== void 0 && compare(right2, node) < 0)
            (heap[index] = right2),
              (heap[rightIndex] = node),
              (index = rightIndex);
          else return;
        }
      }
      function compare(a, b) {
        const diff = a.sortIndex - b.sortIndex;
        return diff !== 0 ? diff : a.id - b.id;
      }
      const NoPriority = 0;
      const ImmediatePriority = 1;
      const UserBlockingPriority = 2;
      const NormalPriority = 3;
      const LowPriority = 4;
      const IdlePriority = 5;
      let runIdCounter = 0;
      let mainThreadIdCounter = 0;
      const profilingStateSize = 4;
      const sharedProfilingBuffer =
        typeof SharedArrayBuffer === 'function'
          ? new SharedArrayBuffer(
              profilingStateSize * Int32Array.BYTES_PER_ELEMENT
            )
          : typeof ArrayBuffer === 'function'
          ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT)
          : null;
      const profilingState =
        sharedProfilingBuffer !== null
          ? new Int32Array(sharedProfilingBuffer)
          : [];
      const PRIORITY = 0;
      const CURRENT_TASK_ID = 1;
      const CURRENT_RUN_ID = 2;
      const QUEUE_SIZE = 3;
      (profilingState[PRIORITY] = NoPriority),
        (profilingState[QUEUE_SIZE] = 0),
        (profilingState[CURRENT_TASK_ID] = 0);
      const INITIAL_EVENT_LOG_SIZE = 131072;
      const MAX_EVENT_LOG_SIZE = 524288;
      let eventLogSize = 0;
      let eventLogBuffer = null;
      let eventLog = null;
      let eventLogIndex = 0;
      const TaskStartEvent = 1;
      const TaskCompleteEvent = 2;
      const TaskErrorEvent = 3;
      const TaskCancelEvent = 4;
      const TaskRunEvent = 5;
      const TaskYieldEvent = 6;
      const SchedulerSuspendEvent = 7;
      const SchedulerResumeEvent = 8;
      function logEvent(entries) {
        if (eventLog !== null) {
          const offset2 = eventLogIndex;
          if (
            ((eventLogIndex += entries.length),
            eventLogIndex + 1 > eventLogSize)
          ) {
            if (((eventLogSize *= 2), eventLogSize > MAX_EVENT_LOG_SIZE)) {
              console.error(
                "Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."
              ),
                stopLoggingProfilingEvents();
              return;
            }
            const newEventLog = new Int32Array(eventLogSize * 4);
            newEventLog.set(eventLog),
              (eventLogBuffer = newEventLog.buffer),
              (eventLog = newEventLog);
          }
          eventLog.set(entries, offset2);
        }
      }
      function startLoggingProfilingEvents() {
        (eventLogSize = INITIAL_EVENT_LOG_SIZE),
          (eventLogBuffer = new ArrayBuffer(eventLogSize * 4)),
          (eventLog = new Int32Array(eventLogBuffer)),
          (eventLogIndex = 0);
      }
      function stopLoggingProfilingEvents() {
        const buffer = eventLogBuffer;
        return (
          (eventLogSize = 0),
          (eventLogBuffer = null),
          (eventLog = null),
          (eventLogIndex = 0),
          buffer
        );
      }
      function markTaskStart(task, ms) {
        profilingState[QUEUE_SIZE]++,
          eventLog !== null &&
            logEvent([TaskStartEvent, ms * 1e3, task.id, task.priorityLevel]);
      }
      function markTaskCompleted(task, ms) {
        (profilingState[PRIORITY] = NoPriority),
          (profilingState[CURRENT_TASK_ID] = 0),
          profilingState[QUEUE_SIZE]--,
          eventLog !== null && logEvent([TaskCompleteEvent, ms * 1e3, task.id]);
      }
      function markTaskCanceled(task, ms) {
        profilingState[QUEUE_SIZE]--,
          eventLog !== null && logEvent([TaskCancelEvent, ms * 1e3, task.id]);
      }
      function markTaskErrored(task, ms) {
        (profilingState[PRIORITY] = NoPriority),
          (profilingState[CURRENT_TASK_ID] = 0),
          profilingState[QUEUE_SIZE]--,
          eventLog !== null && logEvent([TaskErrorEvent, ms * 1e3, task.id]);
      }
      function markTaskRun(task, ms) {
        runIdCounter++,
          (profilingState[PRIORITY] = task.priorityLevel),
          (profilingState[CURRENT_TASK_ID] = task.id),
          (profilingState[CURRENT_RUN_ID] = runIdCounter),
          eventLog !== null &&
            logEvent([TaskRunEvent, ms * 1e3, task.id, runIdCounter]);
      }
      function markTaskYield(task, ms) {
        (profilingState[PRIORITY] = NoPriority),
          (profilingState[CURRENT_TASK_ID] = 0),
          (profilingState[CURRENT_RUN_ID] = 0),
          eventLog !== null &&
            logEvent([TaskYieldEvent, ms * 1e3, task.id, runIdCounter]);
      }
      function markSchedulerSuspended(ms) {
        mainThreadIdCounter++,
          eventLog !== null &&
            logEvent([SchedulerSuspendEvent, ms * 1e3, mainThreadIdCounter]);
      }
      function markSchedulerUnsuspended(ms) {
        eventLog !== null &&
          logEvent([SchedulerResumeEvent, ms * 1e3, mainThreadIdCounter]);
      }
      const maxSigned31BitInt = 1073741823;
      const IMMEDIATE_PRIORITY_TIMEOUT = -1;
      const USER_BLOCKING_PRIORITY = 250;
      const NORMAL_PRIORITY_TIMEOUT = 5e3;
      const LOW_PRIORITY_TIMEOUT = 1e4;
      const IDLE_PRIORITY = maxSigned31BitInt;
      const taskQueue = [];
      const timerQueue = [];
      let taskIdCounter = 1;
      let currentTask = null;
      let currentPriorityLevel = NormalPriority;
      let isPerformingWork = !1;
      let isHostCallbackScheduled = !1;
      let isHostTimeoutScheduled = !1;
      function advanceTimers(currentTime) {
        for (let timer = peek(timerQueue); timer !== null; ) {
          if (timer.callback === null) pop(timerQueue);
          else if (timer.startTime <= currentTime)
            pop(timerQueue),
              (timer.sortIndex = timer.expirationTime),
              push(taskQueue, timer),
              markTaskStart(timer, currentTime),
              (timer.isQueued = !0);
          else return;
          timer = peek(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        if (
          ((isHostTimeoutScheduled = !1),
          advanceTimers(currentTime),
          !isHostCallbackScheduled)
        )
          if (peek(taskQueue) !== null)
            (isHostCallbackScheduled = !0), requestHostCallback(flushWork);
          else {
            const firstTimer = peek(timerQueue);
            firstTimer !== null &&
              requestHostTimeout(
                handleTimeout,
                firstTimer.startTime - currentTime
              );
          }
      }
      function flushWork(hasTimeRemaining, initialTime2) {
        markSchedulerUnsuspended(initialTime2),
          (isHostCallbackScheduled = !1),
          isHostTimeoutScheduled &&
            ((isHostTimeoutScheduled = !1), cancelHostTimeout()),
          (isPerformingWork = !0);
        const previousPriorityLevel = currentPriorityLevel;
        try {
          if (enableProfiling)
            try {
              return workLoop(hasTimeRemaining, initialTime2);
            } catch (error) {
              if (currentTask !== null) {
                const currentTime = exports.unstable_now();
                markTaskErrored(currentTask, currentTime),
                  (currentTask.isQueued = !1);
              }
              throw error;
            }
          else return workLoop(hasTimeRemaining, initialTime2);
        } finally {
          (currentTask = null),
            (currentPriorityLevel = previousPriorityLevel),
            (isPerformingWork = !1);
          {
            const _currentTime = exports.unstable_now();
            markSchedulerSuspended(_currentTime);
          }
        }
      }
      function workLoop(hasTimeRemaining, initialTime2) {
        let currentTime = initialTime2;
        for (
          advanceTimers(currentTime), currentTask = peek(taskQueue);
          currentTask !== null &&
          !enableSchedulerDebugging &&
          !(
            currentTask.expirationTime > currentTime &&
            (!hasTimeRemaining || shouldYieldToHost())
          );

        ) {
          const { callback } = currentTask;
          if (callback !== null) {
            (currentTask.callback = null),
              (currentPriorityLevel = currentTask.priorityLevel);
            const didUserCallbackTimeout =
              currentTask.expirationTime <= currentTime;
            markTaskRun(currentTask, currentTime);
            const continuationCallback = callback(didUserCallbackTimeout);
            (currentTime = exports.unstable_now()),
              typeof continuationCallback === 'function'
                ? ((currentTask.callback = continuationCallback),
                  markTaskYield(currentTask, currentTime))
                : (markTaskCompleted(currentTask, currentTime),
                  (currentTask.isQueued = !1),
                  currentTask === peek(taskQueue) && pop(taskQueue)),
              advanceTimers(currentTime);
          } else pop(taskQueue);
          currentTask = peek(taskQueue);
        }
        if (currentTask !== null) return !0;
        const firstTimer = peek(timerQueue);
        return (
          firstTimer !== null &&
            requestHostTimeout(
              handleTimeout,
              firstTimer.startTime - currentTime
            ),
          !1
        );
      }
      function unstable_runWithPriority(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
          case LowPriority:
          case IdlePriority:
            break;
          default:
            priorityLevel = NormalPriority;
        }
        const previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }
      function unstable_next(eventHandler) {
        let priorityLevel;
        switch (currentPriorityLevel) {
          case ImmediatePriority:
          case UserBlockingPriority:
          case NormalPriority:
            priorityLevel = NormalPriority;
            break;
          default:
            priorityLevel = currentPriorityLevel;
            break;
        }
        const previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      }
      function unstable_wrapCallback(callback) {
        const parentPriorityLevel = currentPriorityLevel;
        return function () {
          const previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      }
      function timeoutForPriorityLevel(priorityLevel) {
        switch (priorityLevel) {
          case ImmediatePriority:
            return IMMEDIATE_PRIORITY_TIMEOUT;
          case UserBlockingPriority:
            return USER_BLOCKING_PRIORITY;
          case IdlePriority:
            return IDLE_PRIORITY;
          case LowPriority:
            return LOW_PRIORITY_TIMEOUT;
          case NormalPriority:
          default:
            return NORMAL_PRIORITY_TIMEOUT;
        }
      }
      function unstable_scheduleCallback(priorityLevel, callback, options) {
        const currentTime = exports.unstable_now();
        let startTime;
        let timeout;
        if (typeof options === 'object' && options !== null) {
          const { delay } = options;
          typeof delay === 'number' && delay > 0
            ? (startTime = currentTime + delay)
            : (startTime = currentTime),
            (timeout =
              typeof options.timeout === 'number'
                ? options.timeout
                : timeoutForPriorityLevel(priorityLevel));
        } else
          (timeout = timeoutForPriorityLevel(priorityLevel)),
            (startTime = currentTime);
        const expirationTime = startTime + timeout;
        const newTask = {
          id: taskIdCounter++,
          callback,
          priorityLevel,
          startTime,
          expirationTime,
          sortIndex: -1,
        };
        return (
          (newTask.isQueued = !1),
          startTime > currentTime
            ? ((newTask.sortIndex = startTime),
              push(timerQueue, newTask),
              peek(taskQueue) === null &&
                newTask === peek(timerQueue) &&
                (isHostTimeoutScheduled
                  ? cancelHostTimeout()
                  : (isHostTimeoutScheduled = !0),
                requestHostTimeout(handleTimeout, startTime - currentTime)))
            : ((newTask.sortIndex = expirationTime),
              push(taskQueue, newTask),
              markTaskStart(newTask, currentTime),
              (newTask.isQueued = !0),
              !isHostCallbackScheduled &&
                !isPerformingWork &&
                ((isHostCallbackScheduled = !0),
                requestHostCallback(flushWork))),
          newTask
        );
      }
      function unstable_pauseExecution() {}
      function unstable_continueExecution() {
        !isHostCallbackScheduled &&
          !isPerformingWork &&
          ((isHostCallbackScheduled = !0), requestHostCallback(flushWork));
      }
      function unstable_getFirstCallbackNode() {
        return peek(taskQueue);
      }
      function unstable_cancelCallback(task) {
        if (task.isQueued) {
          const currentTime = exports.unstable_now();
          markTaskCanceled(task, currentTime), (task.isQueued = !1);
        }
        task.callback = null;
      }
      function unstable_getCurrentPriorityLevel() {
        return currentPriorityLevel;
      }
      function unstable_shouldYield() {
        const currentTime = exports.unstable_now();
        advanceTimers(currentTime);
        const firstTask = peek(taskQueue);
        return (
          (firstTask !== currentTask &&
            currentTask !== null &&
            firstTask !== null &&
            firstTask.callback !== null &&
            firstTask.startTime <= currentTime &&
            firstTask.expirationTime < currentTask.expirationTime) ||
          shouldYieldToHost()
        );
      }
      const unstable_requestPaint = requestPaint;
      const unstable_Profiling = {
        startLoggingProfilingEvents,
        stopLoggingProfilingEvents,
        sharedProfilingBuffer,
      };
      (exports.unstable_IdlePriority = IdlePriority),
        (exports.unstable_ImmediatePriority = ImmediatePriority),
        (exports.unstable_LowPriority = LowPriority),
        (exports.unstable_NormalPriority = NormalPriority),
        (exports.unstable_Profiling = unstable_Profiling),
        (exports.unstable_UserBlockingPriority = UserBlockingPriority),
        (exports.unstable_cancelCallback = unstable_cancelCallback),
        (exports.unstable_continueExecution = unstable_continueExecution),
        (exports.unstable_getCurrentPriorityLevel =
          unstable_getCurrentPriorityLevel),
        (exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode),
        (exports.unstable_next = unstable_next),
        (exports.unstable_pauseExecution = unstable_pauseExecution),
        (exports.unstable_requestPaint = unstable_requestPaint),
        (exports.unstable_runWithPriority = unstable_runWithPriority),
        (exports.unstable_scheduleCallback = unstable_scheduleCallback),
        (exports.unstable_shouldYield = unstable_shouldYield),
        (exports.unstable_wrapCallback = unstable_wrapCallback);
    })();
  },
});
const require_scheduler = __commonJS({
  '../../node_modules/scheduler/index.js': function (exports, module) {
    module.exports = require_scheduler_development();
  },
});
const require_scheduler_tracing_development = __commonJS({
  '../../node_modules/scheduler/cjs/scheduler-tracing.development.js':
    function (exports) {
      (function () {
        const DEFAULT_THREAD_ID = 0;
        let interactionIDCounter = 0;
        let threadIDCounter = 0;
        (exports.__interactionsRef = null),
          (exports.__subscriberRef = null),
          (exports.__interactionsRef = { current: new Set() }),
          (exports.__subscriberRef = { current: null });
        function unstable_clear(callback) {
          const prevInteractions = exports.__interactionsRef.current;
          exports.__interactionsRef.current = new Set();
          try {
            return callback();
          } finally {
            exports.__interactionsRef.current = prevInteractions;
          }
        }
        function unstable_getCurrent() {
          return exports.__interactionsRef.current;
        }
        function unstable_getThreadID() {
          return ++threadIDCounter;
        }
        function unstable_trace(name, timestamp, callback) {
          const threadID =
            arguments.length > 3 && arguments[3] !== void 0
              ? arguments[3]
              : DEFAULT_THREAD_ID;
          const interaction = {
            __count: 1,
            id: interactionIDCounter++,
            name,
            timestamp,
          };
          const prevInteractions = exports.__interactionsRef.current;
          const interactions = new Set(prevInteractions);
          interactions.add(interaction),
            (exports.__interactionsRef.current = interactions);
          const subscriber = exports.__subscriberRef.current;
          let returnValue;
          try {
            subscriber !== null && subscriber.onInteractionTraced(interaction);
          } finally {
            try {
              subscriber !== null &&
                subscriber.onWorkStarted(interactions, threadID);
            } finally {
              try {
                returnValue = callback();
              } finally {
                exports.__interactionsRef.current = prevInteractions;
                try {
                  subscriber !== null &&
                    subscriber.onWorkStopped(interactions, threadID);
                } finally {
                  interaction.__count--,
                    subscriber !== null &&
                      interaction.__count === 0 &&
                      subscriber.onInteractionScheduledWorkCompleted(
                        interaction
                      );
                }
              }
            }
          }
          return returnValue;
        }
        function unstable_wrap(callback) {
          const threadID =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : DEFAULT_THREAD_ID;
          const wrappedInteractions = exports.__interactionsRef.current;
          let subscriber = exports.__subscriberRef.current;
          subscriber !== null &&
            subscriber.onWorkScheduled(wrappedInteractions, threadID),
            wrappedInteractions.forEach((interaction) => {
              interaction.__count++;
            });
          let hasRun = !1;
          function wrapped() {
            const prevInteractions = exports.__interactionsRef.current;
            (exports.__interactionsRef.current = wrappedInteractions),
              (subscriber = exports.__subscriberRef.current);
            try {
              let returnValue;
              try {
                subscriber !== null &&
                  subscriber.onWorkStarted(wrappedInteractions, threadID);
              } finally {
                try {
                  returnValue = callback.apply(void 0, arguments);
                } finally {
                  (exports.__interactionsRef.current = prevInteractions),
                    subscriber !== null &&
                      subscriber.onWorkStopped(wrappedInteractions, threadID);
                }
              }
              return returnValue;
            } finally {
              hasRun ||
                ((hasRun = !0),
                wrappedInteractions.forEach((interaction) => {
                  interaction.__count--,
                    subscriber !== null &&
                      interaction.__count === 0 &&
                      subscriber.onInteractionScheduledWorkCompleted(
                        interaction
                      );
                }));
            }
          }
          return (
            (wrapped.cancel = function () {
              subscriber = exports.__subscriberRef.current;
              try {
                subscriber !== null &&
                  subscriber.onWorkCanceled(wrappedInteractions, threadID);
              } finally {
                wrappedInteractions.forEach((interaction) => {
                  interaction.__count--,
                    subscriber &&
                      interaction.__count === 0 &&
                      subscriber.onInteractionScheduledWorkCompleted(
                        interaction
                      );
                });
              }
            }),
            wrapped
          );
        }
        let subscribers = null;
        subscribers = new Set();
        function unstable_subscribe(subscriber) {
          subscribers.add(subscriber),
            subscribers.size === 1 &&
              (exports.__subscriberRef.current = {
                onInteractionScheduledWorkCompleted,
                onInteractionTraced,
                onWorkCanceled,
                onWorkScheduled,
                onWorkStarted,
                onWorkStopped,
              });
        }
        function unstable_unsubscribe(subscriber) {
          subscribers.delete(subscriber),
            subscribers.size === 0 && (exports.__subscriberRef.current = null);
        }
        function onInteractionTraced(interaction) {
          let didCatchError = !1;
          let caughtError = null;
          if (
            (subscribers.forEach((subscriber) => {
              try {
                subscriber.onInteractionTraced(interaction);
              } catch (error) {
                didCatchError || ((didCatchError = !0), (caughtError = error));
              }
            }),
            didCatchError)
          )
            throw caughtError;
        }
        function onInteractionScheduledWorkCompleted(interaction) {
          let didCatchError = !1;
          let caughtError = null;
          if (
            (subscribers.forEach((subscriber) => {
              try {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              } catch (error) {
                didCatchError || ((didCatchError = !0), (caughtError = error));
              }
            }),
            didCatchError)
          )
            throw caughtError;
        }
        function onWorkScheduled(interactions, threadID) {
          let didCatchError = !1;
          let caughtError = null;
          if (
            (subscribers.forEach((subscriber) => {
              try {
                subscriber.onWorkScheduled(interactions, threadID);
              } catch (error) {
                didCatchError || ((didCatchError = !0), (caughtError = error));
              }
            }),
            didCatchError)
          )
            throw caughtError;
        }
        function onWorkStarted(interactions, threadID) {
          let didCatchError = !1;
          let caughtError = null;
          if (
            (subscribers.forEach((subscriber) => {
              try {
                subscriber.onWorkStarted(interactions, threadID);
              } catch (error) {
                didCatchError || ((didCatchError = !0), (caughtError = error));
              }
            }),
            didCatchError)
          )
            throw caughtError;
        }
        function onWorkStopped(interactions, threadID) {
          let didCatchError = !1;
          let caughtError = null;
          if (
            (subscribers.forEach((subscriber) => {
              try {
                subscriber.onWorkStopped(interactions, threadID);
              } catch (error) {
                didCatchError || ((didCatchError = !0), (caughtError = error));
              }
            }),
            didCatchError)
          )
            throw caughtError;
        }
        function onWorkCanceled(interactions, threadID) {
          let didCatchError = !1;
          let caughtError = null;
          if (
            (subscribers.forEach((subscriber) => {
              try {
                subscriber.onWorkCanceled(interactions, threadID);
              } catch (error) {
                didCatchError || ((didCatchError = !0), (caughtError = error));
              }
            }),
            didCatchError)
          )
            throw caughtError;
        }
        (exports.unstable_clear = unstable_clear),
          (exports.unstable_getCurrent = unstable_getCurrent),
          (exports.unstable_getThreadID = unstable_getThreadID),
          (exports.unstable_subscribe = unstable_subscribe),
          (exports.unstable_trace = unstable_trace),
          (exports.unstable_unsubscribe = unstable_unsubscribe),
          (exports.unstable_wrap = unstable_wrap);
      })();
    },
});
const require_tracing = __commonJS({
  '../../node_modules/scheduler/tracing.js': function (exports, module) {
    module.exports = require_scheduler_tracing_development();
  },
});
const require_react_dom_development = __commonJS({
  '../../node_modules/react-dom/cjs/react-dom.development.js': function (
    exports
  ) {
    (function () {
      const React = require_react();
      const _assign = require_object_assign();
      const Scheduler = require_scheduler();
      const checkPropTypes = require_checkPropTypes();
      const tracing = require_tracing();
      const ReactSharedInternals =
        React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher') ||
        (ReactSharedInternals.ReactCurrentDispatcher = { current: null }),
        ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig') ||
          (ReactSharedInternals.ReactCurrentBatchConfig = { suspense: null });
      function warn(format) {
        {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key];
          printWarning('warn', format, args);
        }
      }
      function error(format) {
        {
          for (
            var _len2 = arguments.length,
              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          )
            args[_key2 - 1] = arguments[_key2];
          printWarning('error', format, args);
        }
      }
      function printWarning(level, format, args) {
        {
          const hasExistingStack =
            args.length > 0 &&
            typeof args[args.length - 1] === 'string' &&
            args[args.length - 1].indexOf(`
    in`) === 0;
          if (!hasExistingStack) {
            const ReactDebugCurrentFrame2 =
              ReactSharedInternals.ReactDebugCurrentFrame;
            const stack = ReactDebugCurrentFrame2.getStackAddendum();
            stack !== '' && ((format += '%s'), (args = args.concat([stack])));
          }
          const argsWithFormat = args.map((item) => `${item}`);
          argsWithFormat.unshift(`Warning: ${format}`),
            Function.prototype.apply.call(
              console[level],
              console,
              argsWithFormat
            );
          try {
            let argIndex = 0;
            const message = `Warning: ${format.replace(
              /%s/g,
              () => args[argIndex++]
            )}`;
            throw new Error(message);
          } catch {}
        }
      }
      if (!React)
        throw Error(
          'ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.'
        );
      let invokeGuardedCallbackImpl = function (
        name,
        func,
        context,
        a,
        b,
        c,
        d,
        e,
        f
      ) {
        const funcArgs = Array.prototype.slice.call(arguments, 3);
        try {
          func.apply(context, funcArgs);
        } catch (error2) {
          this.onError(error2);
        }
      };
      if (
        typeof window < 'u' &&
        typeof window.dispatchEvent === 'function' &&
        typeof document < 'u' &&
        typeof document.createEvent === 'function'
      ) {
        const fakeNode = document.createElement('react');
        const invokeGuardedCallbackDev = function (
          name,
          func,
          context,
          a,
          b,
          c,
          d,
          e,
          f
        ) {
          if (!(typeof document < 'u'))
            throw Error(
              'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
            );
          const evt = document.createEvent('Event');
          let didError = !0;
          const windowEvent = window.event;
          const windowEventDescriptor = Object.getOwnPropertyDescriptor(
            window,
            'event'
          );
          const funcArgs = Array.prototype.slice.call(arguments, 3);
          function callCallback2() {
            fakeNode.removeEventListener(evtType, callCallback2, !1),
              typeof window.event < 'u' &&
                window.hasOwnProperty('event') &&
                (window.event = windowEvent),
              func.apply(context, funcArgs),
              (didError = !1);
          }
          let error2;
          let didSetError = !1;
          let isCrossOriginError = !1;
          function handleWindowError(event) {
            if (
              ((error2 = event.error),
              (didSetError = !0),
              error2 === null &&
                event.colno === 0 &&
                event.lineno === 0 &&
                (isCrossOriginError = !0),
              event.defaultPrevented &&
                error2 != null &&
                typeof error2 === 'object')
            )
              try {
                error2._suppressLogging = !0;
              } catch {}
          }
          var evtType = `react-${name || 'invokeguardedcallback'}`;
          window.addEventListener('error', handleWindowError),
            fakeNode.addEventListener(evtType, callCallback2, !1),
            evt.initEvent(evtType, !1, !1),
            fakeNode.dispatchEvent(evt),
            windowEventDescriptor &&
              Object.defineProperty(window, 'event', windowEventDescriptor),
            didError &&
              (didSetError
                ? isCrossOriginError &&
                  (error2 = new Error(
                    "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information."
                  ))
                : (error2 = new Error(
                    `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
                  )),
              this.onError(error2)),
            window.removeEventListener('error', handleWindowError);
        };
        invokeGuardedCallbackImpl = invokeGuardedCallbackDev;
      }
      const invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
      let hasError = !1;
      let caughtError = null;
      let hasRethrowError = !1;
      let rethrowError = null;
      const reporter = {
        onError(error2) {
          (hasError = !0), (caughtError = error2);
        },
      };
      function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
        (hasError = !1),
          (caughtError = null),
          invokeGuardedCallbackImpl$1.apply(reporter, arguments);
      }
      function invokeGuardedCallbackAndCatchFirstError(
        name,
        func,
        context,
        a,
        b,
        c,
        d,
        e,
        f
      ) {
        if ((invokeGuardedCallback.apply(this, arguments), hasError)) {
          const error2 = clearCaughtError();
          hasRethrowError || ((hasRethrowError = !0), (rethrowError = error2));
        }
      }
      function rethrowCaughtError() {
        if (hasRethrowError) {
          const error2 = rethrowError;
          throw ((hasRethrowError = !1), (rethrowError = null), error2);
        }
      }
      function hasCaughtError() {
        return hasError;
      }
      function clearCaughtError() {
        if (hasError) {
          const error2 = caughtError;
          return (hasError = !1), (caughtError = null), error2;
        }
        throw Error(
          'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
        );
      }
      let getFiberCurrentPropsFromNode = null;
      let getInstanceFromNode = null;
      let getNodeFromInstance = null;
      function setComponentTree(
        getFiberCurrentPropsFromNodeImpl,
        getInstanceFromNodeImpl,
        getNodeFromInstanceImpl
      ) {
        (getFiberCurrentPropsFromNode = getFiberCurrentPropsFromNodeImpl),
          (getInstanceFromNode = getInstanceFromNodeImpl),
          (getNodeFromInstance = getNodeFromInstanceImpl),
          (!getNodeFromInstance || !getInstanceFromNode) &&
            error(
              'EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.'
            );
      }
      let validateEventDispatches;
      validateEventDispatches = function (event) {
        const dispatchListeners = event._dispatchListeners;
        const dispatchInstances = event._dispatchInstances;
        const listenersIsArr = Array.isArray(dispatchListeners);
        const listenersLen = listenersIsArr
          ? dispatchListeners.length
          : dispatchListeners
          ? 1
          : 0;
        const instancesIsArr = Array.isArray(dispatchInstances);
        const instancesLen = instancesIsArr
          ? dispatchInstances.length
          : dispatchInstances
          ? 1
          : 0;
        (instancesIsArr !== listenersIsArr || instancesLen !== listenersLen) &&
          error('EventPluginUtils: Invalid `event`.');
      };
      function executeDispatch(event, listener, inst) {
        const type = event.type || 'unknown-event';
        (event.currentTarget = getNodeFromInstance(inst)),
          invokeGuardedCallbackAndCatchFirstError(
            type,
            listener,
            void 0,
            event
          ),
          (event.currentTarget = null);
      }
      function executeDispatchesInOrder(event) {
        const dispatchListeners = event._dispatchListeners;
        const dispatchInstances = event._dispatchInstances;
        if ((validateEventDispatches(event), Array.isArray(dispatchListeners)))
          for (
            let i = 0;
            i < dispatchListeners.length && !event.isPropagationStopped();
            i++
          )
            executeDispatch(event, dispatchListeners[i], dispatchInstances[i]);
        else
          dispatchListeners &&
            executeDispatch(event, dispatchListeners, dispatchInstances);
        (event._dispatchListeners = null), (event._dispatchInstances = null);
      }
      const FunctionComponent = 0;
      const ClassComponent = 1;
      const IndeterminateComponent = 2;
      const HostRoot = 3;
      const HostPortal = 4;
      const HostComponent = 5;
      const HostText = 6;
      const Fragment = 7;
      const Mode = 8;
      const ContextConsumer = 9;
      const ContextProvider = 10;
      const ForwardRef = 11;
      const Profiler = 12;
      const SuspenseComponent = 13;
      const MemoComponent = 14;
      const SimpleMemoComponent = 15;
      const LazyComponent = 16;
      const IncompleteClassComponent = 17;
      const DehydratedFragment = 18;
      const SuspenseListComponent = 19;
      const FundamentalComponent = 20;
      const ScopeComponent = 21;
      const Block = 22;
      let eventPluginOrder = null;
      const namesToPlugins = {};
      function recomputePluginOrdering() {
        if (eventPluginOrder)
          for (const pluginName in namesToPlugins) {
            const pluginModule = namesToPlugins[pluginName];
            const pluginIndex = eventPluginOrder.indexOf(pluginName);
            if (!(pluginIndex > -1))
              throw Error(
                `EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, \`${pluginName}\`.`
              );
            if (!plugins[pluginIndex]) {
              if (!pluginModule.extractEvents)
                throw Error(
                  `EventPluginRegistry: Event plugins must implement an \`extractEvents\` method, but \`${pluginName}\` does not.`
                );
              plugins[pluginIndex] = pluginModule;
              const publishedEvents = pluginModule.eventTypes;
              for (const eventName in publishedEvents)
                if (
                  !publishEventForPlugin(
                    publishedEvents[eventName],
                    pluginModule,
                    eventName
                  )
                )
                  throw Error(
                    `EventPluginRegistry: Failed to publish event \`${eventName}\` for plugin \`${pluginName}\`.`
                  );
            }
          }
      }
      function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
        if (eventNameDispatchConfigs.hasOwnProperty(eventName))
          throw Error(
            `EventPluginRegistry: More than one plugin attempted to publish the same event name, \`${eventName}\`.`
          );
        eventNameDispatchConfigs[eventName] = dispatchConfig;
        const { phasedRegistrationNames } = dispatchConfig;
        if (phasedRegistrationNames) {
          for (const phaseName in phasedRegistrationNames)
            if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
              const phasedRegistrationName = phasedRegistrationNames[phaseName];
              publishRegistrationName(
                phasedRegistrationName,
                pluginModule,
                eventName
              );
            }
          return !0;
        } else if (dispatchConfig.registrationName)
          return (
            publishRegistrationName(
              dispatchConfig.registrationName,
              pluginModule,
              eventName
            ),
            !0
          );
        return !1;
      }
      function publishRegistrationName(
        registrationName,
        pluginModule,
        eventName
      ) {
        if (registrationNameModules[registrationName])
          throw Error(
            `EventPluginRegistry: More than one plugin attempted to publish the same registration name, \`${registrationName}\`.`
          );
        (registrationNameModules[registrationName] = pluginModule),
          (registrationNameDependencies[registrationName] =
            pluginModule.eventTypes[eventName].dependencies);
        {
          const lowerCasedName = registrationName.toLowerCase();
          (possibleRegistrationNames[lowerCasedName] = registrationName),
            registrationName === 'onDoubleClick' &&
              (possibleRegistrationNames.ondblclick = registrationName);
        }
      }
      var plugins = [];
      var eventNameDispatchConfigs = {};
      var registrationNameModules = {};
      var registrationNameDependencies = {};
      var possibleRegistrationNames = {};
      function injectEventPluginOrder(injectedEventPluginOrder) {
        if (eventPluginOrder)
          throw Error(
            'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.'
          );
        (eventPluginOrder = Array.prototype.slice.call(
          injectedEventPluginOrder
        )),
          recomputePluginOrdering();
      }
      function injectEventPluginsByName(injectedNamesToPlugins) {
        let isOrderingDirty = !1;
        for (const pluginName in injectedNamesToPlugins)
          if (injectedNamesToPlugins.hasOwnProperty(pluginName)) {
            const pluginModule = injectedNamesToPlugins[pluginName];
            if (
              !namesToPlugins.hasOwnProperty(pluginName) ||
              namesToPlugins[pluginName] !== pluginModule
            ) {
              if (namesToPlugins[pluginName])
                throw Error(
                  `EventPluginRegistry: Cannot inject two different event plugins using the same name, \`${pluginName}\`.`
                );
              (namesToPlugins[pluginName] = pluginModule),
                (isOrderingDirty = !0);
            }
          }
        isOrderingDirty && recomputePluginOrdering();
      }
      const canUseDOM =
        typeof window < 'u' &&
        typeof window.document < 'u' &&
        typeof window.document.createElement < 'u';
      const PLUGIN_EVENT_SYSTEM = 1;
      const IS_REPLAYED = 32;
      const IS_FIRST_ANCESTOR = 64;
      let restoreImpl = null;
      let restoreTarget = null;
      let restoreQueue = null;
      function restoreStateOfTarget(target) {
        const internalInstance = getInstanceFromNode(target);
        if (internalInstance) {
          if (typeof restoreImpl !== 'function')
            throw Error(
              'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
            );
          const { stateNode } = internalInstance;
          if (stateNode) {
            const _props = getFiberCurrentPropsFromNode(stateNode);
            restoreImpl(
              internalInstance.stateNode,
              internalInstance.type,
              _props
            );
          }
        }
      }
      function setRestoreImplementation(impl) {
        restoreImpl = impl;
      }
      function enqueueStateRestore(target) {
        restoreTarget
          ? restoreQueue
            ? restoreQueue.push(target)
            : (restoreQueue = [target])
          : (restoreTarget = target);
      }
      function needsStateRestore() {
        return restoreTarget !== null || restoreQueue !== null;
      }
      function restoreStateIfNeeded() {
        if (restoreTarget) {
          const target = restoreTarget;
          const queuedTargets = restoreQueue;
          if (
            ((restoreTarget = null),
            (restoreQueue = null),
            restoreStateOfTarget(target),
            queuedTargets)
          )
            for (let i = 0; i < queuedTargets.length; i++)
              restoreStateOfTarget(queuedTargets[i]);
        }
      }
      const enableProfilerTimer = !0;
      const enableDeprecatedFlareAPI = !1;
      const enableFundamentalAPI = !1;
      const warnAboutStringRefs = !1;
      let batchedUpdatesImpl = function (fn, bookkeeping) {
        return fn(bookkeeping);
      };
      let discreteUpdatesImpl = function (fn, a, b, c, d) {
        return fn(a, b, c, d);
      };
      let flushDiscreteUpdatesImpl = function () {};
      let batchedEventUpdatesImpl = batchedUpdatesImpl;
      let isInsideEventHandler = !1;
      let isBatchingEventUpdates = !1;
      function finishEventHandler() {
        const controlledComponentsHavePendingUpdates = needsStateRestore();
        controlledComponentsHavePendingUpdates &&
          (flushDiscreteUpdatesImpl(), restoreStateIfNeeded());
      }
      function batchedUpdates(fn, bookkeeping) {
        if (isInsideEventHandler) return fn(bookkeeping);
        isInsideEventHandler = !0;
        try {
          return batchedUpdatesImpl(fn, bookkeeping);
        } finally {
          (isInsideEventHandler = !1), finishEventHandler();
        }
      }
      function batchedEventUpdates(fn, a, b) {
        if (isBatchingEventUpdates) return fn(a, b);
        isBatchingEventUpdates = !0;
        try {
          return batchedEventUpdatesImpl(fn, a, b);
        } finally {
          (isBatchingEventUpdates = !1), finishEventHandler();
        }
      }
      function discreteUpdates(fn, a, b, c, d) {
        const prevIsInsideEventHandler = isInsideEventHandler;
        isInsideEventHandler = !0;
        try {
          return discreteUpdatesImpl(fn, a, b, c, d);
        } finally {
          (isInsideEventHandler = prevIsInsideEventHandler),
            isInsideEventHandler || finishEventHandler();
        }
      }
      function flushDiscreteUpdatesIfNeeded(timeStamp) {
        !isInsideEventHandler &&
          !enableDeprecatedFlareAPI &&
          flushDiscreteUpdatesImpl();
      }
      function setBatchingImplementation(
        _batchedUpdatesImpl,
        _discreteUpdatesImpl,
        _flushDiscreteUpdatesImpl,
        _batchedEventUpdatesImpl
      ) {
        (batchedUpdatesImpl = _batchedUpdatesImpl),
          (discreteUpdatesImpl = _discreteUpdatesImpl),
          (flushDiscreteUpdatesImpl = _flushDiscreteUpdatesImpl),
          (batchedEventUpdatesImpl = _batchedEventUpdatesImpl);
      }
      const DiscreteEvent = 0;
      const UserBlockingEvent = 1;
      const ContinuousEvent = 2;
      const RESERVED = 0;
      const STRING = 1;
      const BOOLEANISH_STRING = 2;
      const BOOLEAN = 3;
      const OVERLOADED_BOOLEAN = 4;
      const NUMERIC = 5;
      const POSITIVE_NUMERIC = 6;
      const ATTRIBUTE_NAME_START_CHAR =
        ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
      const ATTRIBUTE_NAME_CHAR = `${ATTRIBUTE_NAME_START_CHAR}\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040`;
      const ROOT_ATTRIBUTE_NAME = 'data-reactroot';
      const VALID_ATTRIBUTE_NAME_REGEX = new RegExp(
        `^[${ATTRIBUTE_NAME_START_CHAR}][${ATTRIBUTE_NAME_CHAR}]*$`
      );
      const { hasOwnProperty } = Object.prototype;
      const illegalAttributeNameCache = {};
      const validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        return hasOwnProperty.call(validatedAttributeNameCache, attributeName)
          ? !0
          : hasOwnProperty.call(illegalAttributeNameCache, attributeName)
          ? !1
          : VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)
          ? ((validatedAttributeNameCache[attributeName] = !0), !0)
          : ((illegalAttributeNameCache[attributeName] = !0),
            error('Invalid attribute name: `%s`', attributeName),
            !1);
      }
      function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
        return propertyInfo !== null
          ? propertyInfo.type === RESERVED
          : isCustomComponentTag
          ? !1
          : name.length > 2 &&
            (name[0] === 'o' || name[0] === 'O') &&
            (name[1] === 'n' || name[1] === 'N');
      }
      function shouldRemoveAttributeWithWarning(
        name,
        value,
        propertyInfo,
        isCustomComponentTag
      ) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) return !1;
        switch (typeof value) {
          case 'function':
          case 'symbol':
            return !0;
          case 'boolean': {
            if (isCustomComponentTag) return !1;
            if (propertyInfo !== null) return !propertyInfo.acceptsBooleans;
            const prefix = name.toLowerCase().slice(0, 5);
            return prefix !== 'data-' && prefix !== 'aria-';
          }
          default:
            return !1;
        }
      }
      function shouldRemoveAttribute(
        name,
        value,
        propertyInfo,
        isCustomComponentTag
      ) {
        if (
          value === null ||
          typeof value > 'u' ||
          shouldRemoveAttributeWithWarning(
            name,
            value,
            propertyInfo,
            isCustomComponentTag
          )
        )
          return !0;
        if (isCustomComponentTag) return !1;
        if (propertyInfo !== null)
          switch (propertyInfo.type) {
            case BOOLEAN:
              return !value;
            case OVERLOADED_BOOLEAN:
              return value === !1;
            case NUMERIC:
              return isNaN(value);
            case POSITIVE_NUMERIC:
              return isNaN(value) || value < 1;
          }
        return !1;
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(
        name,
        type,
        mustUseProperty,
        attributeName,
        attributeNamespace,
        sanitizeURL2
      ) {
        (this.acceptsBooleans =
          type === BOOLEANISH_STRING ||
          type === BOOLEAN ||
          type === OVERLOADED_BOOLEAN),
          (this.attributeName = attributeName),
          (this.attributeNamespace = attributeNamespace),
          (this.mustUseProperty = mustUseProperty),
          (this.propertyName = name),
          (this.type = type),
          (this.sanitizeURL = sanitizeURL2);
      }
      var properties = {};
      const reservedProps = [
        'children',
        'dangerouslySetInnerHTML',
        'defaultValue',
        'defaultChecked',
        'innerHTML',
        'suppressContentEditableWarning',
        'suppressHydrationWarning',
        'style',
      ];
      reservedProps.forEach((name) => {
        properties[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          !1,
          name,
          null,
          !1
        );
      }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach((_ref) => {
          const name = _ref[0];
          const attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            !1,
            attributeName,
            null,
            !1
          );
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
          (name) => {
            properties[name] = new PropertyInfoRecord(
              name,
              BOOLEANISH_STRING,
              !1,
              name.toLowerCase(),
              null,
              !1
            );
          }
        ),
        [
          'autoReverse',
          'externalResourcesRequired',
          'focusable',
          'preserveAlpha',
        ].forEach((name) => {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEANISH_STRING,
            !1,
            name,
            null,
            !1
          );
        }),
        [
          'allowFullScreen',
          'async',
          'autoFocus',
          'autoPlay',
          'controls',
          'default',
          'defer',
          'disabled',
          'disablePictureInPicture',
          'formNoValidate',
          'hidden',
          'loop',
          'noModule',
          'noValidate',
          'open',
          'playsInline',
          'readOnly',
          'required',
          'reversed',
          'scoped',
          'seamless',
          'itemScope',
        ].forEach((name) => {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            !1,
            name.toLowerCase(),
            null,
            !1
          );
        }),
        ['checked', 'multiple', 'muted', 'selected'].forEach((name) => {
          properties[name] = new PropertyInfoRecord(
            name,
            BOOLEAN,
            !0,
            name,
            null,
            !1
          );
        }),
        ['capture', 'download'].forEach((name) => {
          properties[name] = new PropertyInfoRecord(
            name,
            OVERLOADED_BOOLEAN,
            !1,
            name,
            null,
            !1
          );
        }),
        ['cols', 'rows', 'size', 'span'].forEach((name) => {
          properties[name] = new PropertyInfoRecord(
            name,
            POSITIVE_NUMERIC,
            !1,
            name,
            null,
            !1
          );
        }),
        ['rowSpan', 'start'].forEach((name) => {
          properties[name] = new PropertyInfoRecord(
            name,
            NUMERIC,
            !1,
            name.toLowerCase(),
            null,
            !1
          );
        });
      const CAMELIZE = /[\-\:]([a-z])/g;
      const capitalize = function (token) {
        return token[1].toUpperCase();
      };
      [
        'accent-height',
        'alignment-baseline',
        'arabic-form',
        'baseline-shift',
        'cap-height',
        'clip-path',
        'clip-rule',
        'color-interpolation',
        'color-interpolation-filters',
        'color-profile',
        'color-rendering',
        'dominant-baseline',
        'enable-background',
        'fill-opacity',
        'fill-rule',
        'flood-color',
        'flood-opacity',
        'font-family',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-variant',
        'font-weight',
        'glyph-name',
        'glyph-orientation-horizontal',
        'glyph-orientation-vertical',
        'horiz-adv-x',
        'horiz-origin-x',
        'image-rendering',
        'letter-spacing',
        'lighting-color',
        'marker-end',
        'marker-mid',
        'marker-start',
        'overline-position',
        'overline-thickness',
        'paint-order',
        'panose-1',
        'pointer-events',
        'rendering-intent',
        'shape-rendering',
        'stop-color',
        'stop-opacity',
        'strikethrough-position',
        'strikethrough-thickness',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',
        'text-anchor',
        'text-decoration',
        'text-rendering',
        'underline-position',
        'underline-thickness',
        'unicode-bidi',
        'unicode-range',
        'units-per-em',
        'v-alphabetic',
        'v-hanging',
        'v-ideographic',
        'v-mathematical',
        'vector-effect',
        'vert-adv-y',
        'vert-origin-x',
        'vert-origin-y',
        'word-spacing',
        'writing-mode',
        'xmlns:xlink',
        'x-height',
      ].forEach((attributeName) => {
        const name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          null,
          !1
        );
      }),
        [
          'xlink:actuate',
          'xlink:arcrole',
          'xlink:role',
          'xlink:show',
          'xlink:title',
          'xlink:type',
        ].forEach((attributeName) => {
          const name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            !1,
            attributeName,
            'http://www.w3.org/1999/xlink',
            !1
          );
        }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach((attributeName) => {
          const name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(
            name,
            STRING,
            !1,
            attributeName,
            'http://www.w3.org/XML/1998/namespace',
            !1
          );
        }),
        ['tabIndex', 'crossOrigin'].forEach((attributeName) => {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            !1,
            attributeName.toLowerCase(),
            null,
            !1
          );
        });
      const xlinkHref = 'xlinkHref';
      (properties[xlinkHref] = new PropertyInfoRecord(
        'xlinkHref',
        STRING,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0
      )),
        ['src', 'href', 'action', 'formAction'].forEach((attributeName) => {
          properties[attributeName] = new PropertyInfoRecord(
            attributeName,
            STRING,
            !1,
            attributeName.toLowerCase(),
            null,
            !0
          );
        });
      let ReactDebugCurrentFrame = null;
      ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      const isJavaScriptProtocol =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      let didWarn = !1;
      function sanitizeURL(url) {
        !didWarn &&
          isJavaScriptProtocol.test(url) &&
          ((didWarn = !0),
          error(
            'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
            JSON.stringify(url)
          ));
      }
      function getValueForProperty(node, name, expected, propertyInfo) {
        if (propertyInfo.mustUseProperty) {
          const { propertyName } = propertyInfo;
          return node[propertyName];
        }
        propertyInfo.sanitizeURL && sanitizeURL(`${expected}`);
        const { attributeName } = propertyInfo;
        let stringValue = null;
        if (propertyInfo.type === OVERLOADED_BOOLEAN) {
          if (node.hasAttribute(attributeName)) {
            const value = node.getAttribute(attributeName);
            return value === ''
              ? !0
              : shouldRemoveAttribute(name, expected, propertyInfo, !1)
              ? value
              : value === `${expected}`
              ? expected
              : value;
          }
        } else if (node.hasAttribute(attributeName)) {
          if (shouldRemoveAttribute(name, expected, propertyInfo, !1))
            return node.getAttribute(attributeName);
          if (propertyInfo.type === BOOLEAN) return expected;
          stringValue = node.getAttribute(attributeName);
        }
        return shouldRemoveAttribute(name, expected, propertyInfo, !1)
          ? stringValue === null
            ? expected
            : stringValue
          : stringValue === `${expected}`
          ? expected
          : stringValue;
      }
      function getValueForAttribute(node, name, expected) {
        {
          if (!isAttributeNameSafe(name)) return;
          if (!node.hasAttribute(name))
            return expected === void 0 ? void 0 : null;
          const value = node.getAttribute(name);
          return value === `${expected}` ? expected : value;
        }
      }
      function setValueForProperty(node, name, value, isCustomComponentTag) {
        const propertyInfo = getPropertyInfo(name);
        if (!shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
          if (
            (shouldRemoveAttribute(
              name,
              value,
              propertyInfo,
              isCustomComponentTag
            ) && (value = null),
            isCustomComponentTag || propertyInfo === null)
          ) {
            if (isAttributeNameSafe(name)) {
              const _attributeName = name;
              value === null
                ? node.removeAttribute(_attributeName)
                : node.setAttribute(_attributeName, `${value}`);
            }
            return;
          }
          const { mustUseProperty } = propertyInfo;
          if (mustUseProperty) {
            const { propertyName } = propertyInfo;
            if (value === null) {
              const { type } = propertyInfo;
              node[propertyName] = type === BOOLEAN ? !1 : '';
            } else node[propertyName] = value;
            return;
          }
          const { attributeName } = propertyInfo;
          const { attributeNamespace } = propertyInfo;
          if (value === null) node.removeAttribute(attributeName);
          else {
            const _type = propertyInfo.type;
            let attributeValue;
            _type === BOOLEAN || (_type === OVERLOADED_BOOLEAN && value === !0)
              ? (attributeValue = '')
              : ((attributeValue = `${value}`),
                propertyInfo.sanitizeURL &&
                  sanitizeURL(attributeValue.toString())),
              attributeNamespace
                ? node.setAttributeNS(
                    attributeNamespace,
                    attributeName,
                    attributeValue
                  )
                : node.setAttribute(attributeName, attributeValue);
          }
        }
      }
      const BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      function describeComponentFrame(name, source, ownerName) {
        let sourceInfo = '';
        if (source) {
          const path = source.fileName;
          let fileName = path.replace(BEFORE_SLASH_RE, '');
          if (/^index\./.test(fileName)) {
            const match2 = path.match(BEFORE_SLASH_RE);
            if (match2) {
              const pathBeforeSlash = match2[1];
              if (pathBeforeSlash) {
                const folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = `${folderName}/${fileName}`;
              }
            }
          }
          sourceInfo = ` (at ${fileName}:${source.lineNumber})`;
        } else ownerName && (sourceInfo = ` (created by ${ownerName})`);
        return `
    in ${name || 'Unknown'}${sourceInfo}`;
      }
      const hasSymbol = typeof Symbol === 'function' && Symbol.for;
      const REACT_ELEMENT_TYPE = hasSymbol
        ? Symbol.for('react.element')
        : 60103;
      const REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 60106;
      const REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for('react.fragment')
        : 60107;
      const REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for('react.strict_mode')
        : 60108;
      const REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for('react.profiler')
        : 60114;
      const REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for('react.provider')
        : 60109;
      const REACT_CONTEXT_TYPE = hasSymbol
        ? Symbol.for('react.context')
        : 60110;
      const REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for('react.concurrent_mode')
        : 60111;
      const REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for('react.forward_ref')
        : 60112;
      const REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for('react.suspense')
        : 60113;
      const REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for('react.suspense_list')
        : 60120;
      const REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 60115;
      const REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 60116;
      const REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 60121;
      const MAYBE_ITERATOR_SYMBOL =
        typeof Symbol === 'function' && Symbol.iterator;
      const FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object')
          return null;
        const maybeIterator =
          (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator === 'function' ? maybeIterator : null;
      }
      const Uninitialized = -1;
      const Pending = 0;
      const Resolved = 1;
      const Rejected = 2;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved
          ? lazyComponent._result
          : null;
      }
      function initializeLazyComponentType(lazyComponent) {
        if (lazyComponent._status === Uninitialized) {
          lazyComponent._status = Pending;
          const ctor = lazyComponent._ctor;
          const thenable = ctor();
          (lazyComponent._result = thenable),
            thenable.then(
              (moduleObject) => {
                if (lazyComponent._status === Pending) {
                  const defaultExport = moduleObject.default;
                  defaultExport === void 0 &&
                    error(
                      `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                      moduleObject
                    ),
                    (lazyComponent._status = Resolved),
                    (lazyComponent._result = defaultExport);
                }
              },
              (error2) => {
                lazyComponent._status === Pending &&
                  ((lazyComponent._status = Rejected),
                  (lazyComponent._result = error2));
              }
            );
        }
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        const functionName = innerType.displayName || innerType.name || '';
        return (
          outerType.displayName ||
          (functionName !== ''
            ? `${wrapperName}(${functionName})`
            : wrapperName)
        );
      }
      function getComponentName(type) {
        if (type == null) return null;
        if (
          (typeof type.tag === 'number' &&
            error(
              'Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.'
            ),
          typeof type === 'function')
        )
          return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';
          case REACT_PORTAL_TYPE:
            return 'Portal';
          case REACT_PROFILER_TYPE:
            return 'Profiler';
          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';
          case REACT_SUSPENSE_TYPE:
            return 'Suspense';
          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }
        if (typeof type === 'object')
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';
            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);
            case REACT_LAZY_TYPE: {
              const thenable = type;
              const resolvedThenable = refineResolvedLazyComponent(thenable);
              if (resolvedThenable) return getComponentName(resolvedThenable);
              break;
            }
          }
        return null;
      }
      const ReactDebugCurrentFrame$1 =
        ReactSharedInternals.ReactDebugCurrentFrame;
      function describeFiber(fiber) {
        switch (fiber.tag) {
          case HostRoot:
          case HostPortal:
          case HostText:
          case Fragment:
          case ContextProvider:
          case ContextConsumer:
            return '';
          default:
            var owner = fiber._debugOwner;
            var source = fiber._debugSource;
            var name = getComponentName(fiber.type);
            var ownerName = null;
            return (
              owner && (ownerName = getComponentName(owner.type)),
              describeComponentFrame(name, source, ownerName)
            );
        }
      }
      function getStackByFiberInDevAndProd(workInProgress2) {
        let info = '';
        let node = workInProgress2;
        do (info += describeFiber(node)), (node = node.return);
        while (node);
        return info;
      }
      let current = null;
      let isRendering = !1;
      function getCurrentFiberOwnerNameInDevOrNull() {
        {
          if (current === null) return null;
          const owner = current._debugOwner;
          if (owner !== null && typeof owner < 'u')
            return getComponentName(owner.type);
        }
        return null;
      }
      function getCurrentFiberStackInDev() {
        return current === null ? '' : getStackByFiberInDevAndProd(current);
      }
      function resetCurrentFiber() {
        (ReactDebugCurrentFrame$1.getCurrentStack = null),
          (current = null),
          (isRendering = !1);
      }
      function setCurrentFiber(fiber) {
        (ReactDebugCurrentFrame$1.getCurrentStack = getCurrentFiberStackInDev),
          (current = fiber),
          (isRendering = !1);
      }
      function setIsRendering(rendering) {
        isRendering = rendering;
      }
      function toString(value) {
        return `${value}`;
      }
      function getToStringValue(value) {
        switch (typeof value) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return value;
          default:
            return '';
        }
      }
      let ReactDebugCurrentFrame$2 = null;
      const ReactControlledValuePropTypes = { checkPropTypes: null };
      {
        ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
        const hasReadOnlyValue = {
          button: !0,
          checkbox: !0,
          image: !0,
          hidden: !0,
          radio: !0,
          reset: !0,
          submit: !0,
        };
        const propTypes = {
          value(props, propName, componentName) {
            return hasReadOnlyValue[props.type] ||
              props.onChange ||
              props.readOnly ||
              props.disabled ||
              props[propName] == null ||
              enableDeprecatedFlareAPI
              ? null
              : new Error(
                  'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
                );
          },
          checked(props, propName, componentName) {
            return props.onChange ||
              props.readOnly ||
              props.disabled ||
              props[propName] == null ||
              enableDeprecatedFlareAPI
              ? null
              : new Error(
                  'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
                );
          },
        };
        ReactControlledValuePropTypes.checkPropTypes = function (
          tagName,
          props
        ) {
          checkPropTypes(
            propTypes,
            props,
            'prop',
            tagName,
            ReactDebugCurrentFrame$2.getStackAddendum
          );
        };
      }
      function isCheckable(elem) {
        const { type } = elem;
        const { nodeName } = elem;
        return (
          nodeName &&
          nodeName.toLowerCase() === 'input' &&
          (type === 'checkbox' || type === 'radio')
        );
      }
      function getTracker(node) {
        return node._valueTracker;
      }
      function detachTracker(node) {
        node._valueTracker = null;
      }
      function getValueFromNode(node) {
        let value = '';
        return (
          node &&
            (isCheckable(node)
              ? (value = node.checked ? 'true' : 'false')
              : (value = node.value)),
          value
        );
      }
      function trackValueOnNode(node) {
        const valueField = isCheckable(node) ? 'checked' : 'value';
        const descriptor = Object.getOwnPropertyDescriptor(
          node.constructor.prototype,
          valueField
        );
        let currentValue = `${node[valueField]}`;
        if (
          !(
            node.hasOwnProperty(valueField) ||
            typeof descriptor > 'u' ||
            typeof descriptor.get !== 'function' ||
            typeof descriptor.set !== 'function'
          )
        ) {
          const get2 = descriptor.get;
          const set2 = descriptor.set;
          Object.defineProperty(node, valueField, {
            configurable: !0,
            get() {
              return get2.call(this);
            },
            set(value) {
              (currentValue = `${value}`), set2.call(this, value);
            },
          }),
            Object.defineProperty(node, valueField, {
              enumerable: descriptor.enumerable,
            });
          const tracker = {
            getValue() {
              return currentValue;
            },
            setValue(value) {
              currentValue = `${value}`;
            },
            stopTracking() {
              detachTracker(node), delete node[valueField];
            },
          };
          return tracker;
        }
      }
      function track(node) {
        getTracker(node) || (node._valueTracker = trackValueOnNode(node));
      }
      function updateValueIfChanged(node) {
        if (!node) return !1;
        const tracker = getTracker(node);
        if (!tracker) return !0;
        const lastValue = tracker.getValue();
        const nextValue = getValueFromNode(node);
        return nextValue !== lastValue ? (tracker.setValue(nextValue), !0) : !1;
      }
      let didWarnValueDefaultValue = !1;
      let didWarnCheckedDefaultChecked = !1;
      let didWarnControlledToUncontrolled = !1;
      let didWarnUncontrolledToControlled = !1;
      function isControlled(props) {
        const usesChecked = props.type === 'checkbox' || props.type === 'radio';
        return usesChecked ? props.checked != null : props.value != null;
      }
      function getHostProps(element, props) {
        const node = element;
        const { checked } = props;
        const hostProps = _assign({}, props, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: checked ?? node._wrapperState.initialChecked,
        });
        return hostProps;
      }
      function initWrapperState(element, props) {
        ReactControlledValuePropTypes.checkPropTypes('input', props),
          props.checked !== void 0 &&
            props.defaultChecked !== void 0 &&
            !didWarnCheckedDefaultChecked &&
            (error(
              '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components',
              getCurrentFiberOwnerNameInDevOrNull() || 'A component',
              props.type
            ),
            (didWarnCheckedDefaultChecked = !0)),
          props.value !== void 0 &&
            props.defaultValue !== void 0 &&
            !didWarnValueDefaultValue &&
            (error(
              '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components',
              getCurrentFiberOwnerNameInDevOrNull() || 'A component',
              props.type
            ),
            (didWarnValueDefaultValue = !0));
        const node = element;
        const defaultValue =
          props.defaultValue == null ? '' : props.defaultValue;
        node._wrapperState = {
          initialChecked:
            props.checked != null ? props.checked : props.defaultChecked,
          initialValue: getToStringValue(
            props.value != null ? props.value : defaultValue
          ),
          controlled: isControlled(props),
        };
      }
      function updateChecked(element, props) {
        const node = element;
        const { checked } = props;
        checked != null && setValueForProperty(node, 'checked', checked, !1);
      }
      function updateWrapper(element, props) {
        const node = element;
        {
          const controlled = isControlled(props);
          !node._wrapperState.controlled &&
            controlled &&
            !didWarnUncontrolledToControlled &&
            (error(
              'A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components',
              props.type
            ),
            (didWarnUncontrolledToControlled = !0)),
            node._wrapperState.controlled &&
              !controlled &&
              !didWarnControlledToUncontrolled &&
              (error(
                'A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components',
                props.type
              ),
              (didWarnControlledToUncontrolled = !0));
        }
        updateChecked(element, props);
        const value = getToStringValue(props.value);
        const { type } = props;
        if (value != null)
          type === 'number'
            ? ((value === 0 && node.value === '') || node.value != value) &&
              (node.value = toString(value))
            : node.value !== toString(value) && (node.value = toString(value));
        else if (type === 'submit' || type === 'reset') {
          node.removeAttribute('value');
          return;
        }
        props.hasOwnProperty('value')
          ? setDefaultValue(node, props.type, value)
          : props.hasOwnProperty('defaultValue') &&
            setDefaultValue(
              node,
              props.type,
              getToStringValue(props.defaultValue)
            ),
          props.checked == null &&
            props.defaultChecked != null &&
            (node.defaultChecked = !!props.defaultChecked);
      }
      function postMountWrapper(element, props, isHydrating2) {
        const node = element;
        if (
          props.hasOwnProperty('value') ||
          props.hasOwnProperty('defaultValue')
        ) {
          const { type } = props;
          const isButton = type === 'submit' || type === 'reset';
          if (isButton && (props.value === void 0 || props.value === null))
            return;
          const initialValue = toString(node._wrapperState.initialValue);
          isHydrating2 ||
            (initialValue !== node.value && (node.value = initialValue)),
            (node.defaultValue = initialValue);
        }
        const { name } = node;
        name !== '' && (node.name = ''),
          (node.defaultChecked = !node.defaultChecked),
          (node.defaultChecked = !!node._wrapperState.initialChecked),
          name !== '' && (node.name = name);
      }
      function restoreControlledState(element, props) {
        const node = element;
        updateWrapper(node, props), updateNamedCousins(node, props);
      }
      function updateNamedCousins(rootNode, props) {
        const { name } = props;
        if (props.type === 'radio' && name != null) {
          for (var queryRoot = rootNode; queryRoot.parentNode; )
            queryRoot = queryRoot.parentNode;
          for (
            let group = queryRoot.querySelectorAll(
                `input[name=${JSON.stringify(`${name}`)}][type="radio"]`
              ),
              i = 0;
            i < group.length;
            i++
          ) {
            const otherNode = group[i];
            if (!(otherNode === rootNode || otherNode.form !== rootNode.form)) {
              const otherProps = getFiberCurrentPropsFromNode$1(otherNode);
              if (!otherProps)
                throw Error(
                  'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
                );
              updateValueIfChanged(otherNode),
                updateWrapper(otherNode, otherProps);
            }
          }
        }
      }
      function setDefaultValue(node, type, value) {
        (type !== 'number' || node.ownerDocument.activeElement !== node) &&
          (value == null
            ? (node.defaultValue = toString(node._wrapperState.initialValue))
            : node.defaultValue !== toString(value) &&
              (node.defaultValue = toString(value)));
      }
      let didWarnSelectedSetOnOption = !1;
      let didWarnInvalidChild = !1;
      function flattenChildren(children) {
        let content = '';
        return (
          React.Children.forEach(children, (child) => {
            child != null && (content += child);
          }),
          content
        );
      }
      function validateProps(element, props) {
        typeof props.children === 'object' &&
          props.children !== null &&
          React.Children.forEach(props.children, (child) => {
            child != null &&
              (typeof child === 'string' ||
                typeof child === 'number' ||
                (typeof child.type === 'string' &&
                  (didWarnInvalidChild ||
                    ((didWarnInvalidChild = !0),
                    error(
                      'Only strings and numbers are supported as <option> children.'
                    )))));
          }),
          props.selected != null &&
            !didWarnSelectedSetOnOption &&
            (error(
              'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
            ),
            (didWarnSelectedSetOnOption = !0));
      }
      function postMountWrapper$1(element, props) {
        props.value != null &&
          element.setAttribute(
            'value',
            toString(getToStringValue(props.value))
          );
      }
      function getHostProps$1(element, props) {
        const hostProps = _assign({ children: void 0 }, props);
        const content = flattenChildren(props.children);
        return content && (hostProps.children = content), hostProps;
      }
      let didWarnValueDefaultValue$1;
      didWarnValueDefaultValue$1 = !1;
      function getDeclarationErrorAddendum() {
        const ownerName = getCurrentFiberOwnerNameInDevOrNull();
        return ownerName
          ? `

Check the render method of \`${ownerName}\`.`
          : '';
      }
      const valuePropNames = ['value', 'defaultValue'];
      function checkSelectPropTypes(props) {
        {
          ReactControlledValuePropTypes.checkPropTypes('select', props);
          for (let i = 0; i < valuePropNames.length; i++) {
            const propName = valuePropNames[i];
            if (props[propName] != null) {
              const isArray2 = Array.isArray(props[propName]);
              props.multiple && !isArray2
                ? error(
                    'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                    propName,
                    getDeclarationErrorAddendum()
                  )
                : !props.multiple &&
                  isArray2 &&
                  error(
                    'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                    propName,
                    getDeclarationErrorAddendum()
                  );
            }
          }
        }
      }
      function updateOptions(node, multiple, propValue, setDefaultSelected) {
        const { options } = node;
        if (multiple) {
          for (
            var selectedValues = propValue, selectedValue = {}, i = 0;
            i < selectedValues.length;
            i++
          )
            selectedValue[`$${selectedValues[i]}`] = !0;
          for (let _i = 0; _i < options.length; _i++) {
            const selected = selectedValue.hasOwnProperty(
              `$${options[_i].value}`
            );
            options[_i].selected !== selected &&
              (options[_i].selected = selected),
              selected &&
                setDefaultSelected &&
                (options[_i].defaultSelected = !0);
          }
        } else {
          for (
            var _selectedValue = toString(getToStringValue(propValue)),
              defaultSelected = null,
              _i2 = 0;
            _i2 < options.length;
            _i2++
          ) {
            if (options[_i2].value === _selectedValue) {
              (options[_i2].selected = !0),
                setDefaultSelected && (options[_i2].defaultSelected = !0);
              return;
            }
            defaultSelected === null &&
              !options[_i2].disabled &&
              (defaultSelected = options[_i2]);
          }
          defaultSelected !== null && (defaultSelected.selected = !0);
        }
      }
      function getHostProps$2(element, props) {
        return _assign({}, props, { value: void 0 });
      }
      function initWrapperState$1(element, props) {
        const node = element;
        checkSelectPropTypes(props),
          (node._wrapperState = { wasMultiple: !!props.multiple }),
          props.value !== void 0 &&
            props.defaultValue !== void 0 &&
            !didWarnValueDefaultValue$1 &&
            (error(
              'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components'
            ),
            (didWarnValueDefaultValue$1 = !0));
      }
      function postMountWrapper$2(element, props) {
        const node = element;
        node.multiple = !!props.multiple;
        const { value } = props;
        value != null
          ? updateOptions(node, !!props.multiple, value, !1)
          : props.defaultValue != null &&
            updateOptions(node, !!props.multiple, props.defaultValue, !0);
      }
      function postUpdateWrapper(element, props) {
        const node = element;
        const { wasMultiple } = node._wrapperState;
        node._wrapperState.wasMultiple = !!props.multiple;
        const { value } = props;
        value != null
          ? updateOptions(node, !!props.multiple, value, !1)
          : wasMultiple !== !!props.multiple &&
            (props.defaultValue != null
              ? updateOptions(node, !!props.multiple, props.defaultValue, !0)
              : updateOptions(
                  node,
                  !!props.multiple,
                  props.multiple ? [] : '',
                  !1
                ));
      }
      function restoreControlledState$1(element, props) {
        const node = element;
        const { value } = props;
        value != null && updateOptions(node, !!props.multiple, value, !1);
      }
      let didWarnValDefaultVal = !1;
      function getHostProps$3(element, props) {
        const node = element;
        if (props.dangerouslySetInnerHTML != null)
          throw Error(
            '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
          );
        const hostProps = _assign({}, props, {
          value: void 0,
          defaultValue: void 0,
          children: toString(node._wrapperState.initialValue),
        });
        return hostProps;
      }
      function initWrapperState$2(element, props) {
        const node = element;
        ReactControlledValuePropTypes.checkPropTypes('textarea', props),
          props.value !== void 0 &&
            props.defaultValue !== void 0 &&
            !didWarnValDefaultVal &&
            (error(
              '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components',
              getCurrentFiberOwnerNameInDevOrNull() || 'A component'
            ),
            (didWarnValDefaultVal = !0));
        let initialValue = props.value;
        if (initialValue == null) {
          let { children } = props;
          let { defaultValue } = props;
          if (children != null) {
            error(
              'Use the `defaultValue` or `value` props instead of setting children on <textarea>.'
            );
            {
              if (defaultValue != null)
                throw Error(
                  'If you supply `defaultValue` on a <textarea>, do not pass children.'
                );
              if (Array.isArray(children)) {
                if (!(children.length <= 1))
                  throw Error('<textarea> can only have at most one child.');
                children = children[0];
              }
              defaultValue = children;
            }
          }
          defaultValue == null && (defaultValue = ''),
            (initialValue = defaultValue);
        }
        node._wrapperState = { initialValue: getToStringValue(initialValue) };
      }
      function updateWrapper$1(element, props) {
        const node = element;
        const value = getToStringValue(props.value);
        const defaultValue = getToStringValue(props.defaultValue);
        if (value != null) {
          const newValue = toString(value);
          newValue !== node.value && (node.value = newValue),
            props.defaultValue == null &&
              node.defaultValue !== newValue &&
              (node.defaultValue = newValue);
        }
        defaultValue != null && (node.defaultValue = toString(defaultValue));
      }
      function postMountWrapper$3(element, props) {
        const node = element;
        const { textContent } = node;
        textContent === node._wrapperState.initialValue &&
          textContent !== '' &&
          textContent !== null &&
          (node.value = textContent);
      }
      function restoreControlledState$2(element, props) {
        updateWrapper$1(element, props);
      }
      const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
      const MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
      const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
      const Namespaces = {
        html: HTML_NAMESPACE,
        mathml: MATH_NAMESPACE,
        svg: SVG_NAMESPACE,
      };
      function getIntrinsicNamespace(type) {
        switch (type) {
          case 'svg':
            return SVG_NAMESPACE;
          case 'math':
            return MATH_NAMESPACE;
          default:
            return HTML_NAMESPACE;
        }
      }
      function getChildNamespace(parentNamespace, type) {
        return parentNamespace == null || parentNamespace === HTML_NAMESPACE
          ? getIntrinsicNamespace(type)
          : parentNamespace === SVG_NAMESPACE && type === 'foreignObject'
          ? HTML_NAMESPACE
          : parentNamespace;
      }
      const createMicrosoftUnsafeLocalFunction = function (func) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
          ? function (arg0, arg1, arg2, arg3) {
              MSApp.execUnsafeLocalFunction(() => func(arg0, arg1, arg2, arg3));
            }
          : func;
      };
      let reusableSVGContainer;
      const setInnerHTML = createMicrosoftUnsafeLocalFunction((node, html) => {
        if (node.namespaceURI === Namespaces.svg && !('innerHTML' in node)) {
          (reusableSVGContainer =
            reusableSVGContainer || document.createElement('div')),
            (reusableSVGContainer.innerHTML = `<svg>${html
              .valueOf()
              .toString()}</svg>`);
          for (var svgNode = reusableSVGContainer.firstChild; node.firstChild; )
            node.removeChild(node.firstChild);
          for (; svgNode.firstChild; ) node.appendChild(svgNode.firstChild);
          return;
        }
        node.innerHTML = html;
      });
      const ELEMENT_NODE = 1;
      const TEXT_NODE = 3;
      const COMMENT_NODE = 8;
      const DOCUMENT_NODE = 9;
      const DOCUMENT_FRAGMENT_NODE = 11;
      const setTextContent = function (node, text) {
        if (text) {
          const { firstChild } = node;
          if (
            firstChild &&
            firstChild === node.lastChild &&
            firstChild.nodeType === TEXT_NODE
          ) {
            firstChild.nodeValue = text;
            return;
          }
        }
        node.textContent = text;
      };
      function unsafeCastStringToDOMTopLevelType(topLevelType) {
        return topLevelType;
      }
      function unsafeCastDOMTopLevelTypeToString(topLevelType) {
        return topLevelType;
      }
      function makePrefixMap(styleProp, eventName) {
        const prefixes2 = {};
        return (
          (prefixes2[styleProp.toLowerCase()] = eventName.toLowerCase()),
          (prefixes2[`Webkit${styleProp}`] = `webkit${eventName}`),
          (prefixes2[`Moz${styleProp}`] = `moz${eventName}`),
          prefixes2
        );
      }
      const vendorPrefixes = {
        animationend: makePrefixMap('Animation', 'AnimationEnd'),
        animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
        animationstart: makePrefixMap('Animation', 'AnimationStart'),
        transitionend: makePrefixMap('Transition', 'TransitionEnd'),
      };
      const prefixedEventNames = {};
      let style = {};
      canUseDOM &&
        ((style = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete vendorPrefixes.animationend.animation,
          delete vendorPrefixes.animationiteration.animation,
          delete vendorPrefixes.animationstart.animation),
        'TransitionEvent' in window ||
          delete vendorPrefixes.transitionend.transition);
      function getVendorPrefixedEventName(eventName) {
        if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
        if (!vendorPrefixes[eventName]) return eventName;
        const prefixMap = vendorPrefixes[eventName];
        for (const styleProp in prefixMap)
          if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
            return (prefixedEventNames[eventName] = prefixMap[styleProp]);
        return eventName;
      }
      const TOP_ABORT = 'abort';
      const TOP_ANIMATION_END = getVendorPrefixedEventName('animationend');
      const TOP_ANIMATION_ITERATION =
        getVendorPrefixedEventName('animationiteration');
      const TOP_ANIMATION_START = getVendorPrefixedEventName('animationstart');
      const TOP_BLUR = 'blur';
      const TOP_CAN_PLAY = 'canplay';
      const TOP_CAN_PLAY_THROUGH = 'canplaythrough';
      const TOP_CANCEL = 'cancel';
      const TOP_CHANGE = 'change';
      const TOP_CLICK = 'click';
      const TOP_CLOSE = 'close';
      const TOP_COMPOSITION_END = 'compositionend';
      const TOP_COMPOSITION_START = 'compositionstart';
      const TOP_COMPOSITION_UPDATE = 'compositionupdate';
      const TOP_CONTEXT_MENU = 'contextmenu';
      const TOP_COPY = 'copy';
      const TOP_CUT = 'cut';
      const TOP_DOUBLE_CLICK = 'dblclick';
      const TOP_AUX_CLICK = 'auxclick';
      const TOP_DRAG = 'drag';
      const TOP_DRAG_END = 'dragend';
      const TOP_DRAG_ENTER = 'dragenter';
      const TOP_DRAG_EXIT = 'dragexit';
      const TOP_DRAG_LEAVE = 'dragleave';
      const TOP_DRAG_OVER = 'dragover';
      const TOP_DRAG_START = 'dragstart';
      const TOP_DROP = 'drop';
      const TOP_DURATION_CHANGE = 'durationchange';
      const TOP_EMPTIED = 'emptied';
      const TOP_ENCRYPTED = 'encrypted';
      const TOP_ENDED = 'ended';
      const TOP_ERROR = 'error';
      const TOP_FOCUS = 'focus';
      const TOP_GOT_POINTER_CAPTURE = 'gotpointercapture';
      const TOP_INPUT = 'input';
      const TOP_INVALID = 'invalid';
      const TOP_KEY_DOWN = 'keydown';
      const TOP_KEY_PRESS = 'keypress';
      const TOP_KEY_UP = 'keyup';
      const TOP_LOAD = 'load';
      const TOP_LOAD_START = 'loadstart';
      const TOP_LOADED_DATA = 'loadeddata';
      const TOP_LOADED_METADATA = 'loadedmetadata';
      const TOP_LOST_POINTER_CAPTURE = 'lostpointercapture';
      const TOP_MOUSE_DOWN = 'mousedown';
      const TOP_MOUSE_MOVE = 'mousemove';
      const TOP_MOUSE_OUT = 'mouseout';
      const TOP_MOUSE_OVER = 'mouseover';
      const TOP_MOUSE_UP = 'mouseup';
      const TOP_PASTE = 'paste';
      const TOP_PAUSE = 'pause';
      const TOP_PLAY = 'play';
      const TOP_PLAYING = 'playing';
      const TOP_POINTER_CANCEL = 'pointercancel';
      const TOP_POINTER_DOWN = 'pointerdown';
      const TOP_POINTER_MOVE = 'pointermove';
      const TOP_POINTER_OUT = 'pointerout';
      const TOP_POINTER_OVER = 'pointerover';
      const TOP_POINTER_UP = 'pointerup';
      const TOP_PROGRESS = 'progress';
      const TOP_RATE_CHANGE = 'ratechange';
      const TOP_RESET = 'reset';
      const TOP_SCROLL = 'scroll';
      const TOP_SEEKED = 'seeked';
      const TOP_SEEKING = 'seeking';
      const TOP_SELECTION_CHANGE = 'selectionchange';
      const TOP_STALLED = 'stalled';
      const TOP_SUBMIT = 'submit';
      const TOP_SUSPEND = 'suspend';
      const TOP_TEXT_INPUT = 'textInput';
      const TOP_TIME_UPDATE = 'timeupdate';
      const TOP_TOGGLE = 'toggle';
      const TOP_TOUCH_CANCEL = 'touchcancel';
      const TOP_TOUCH_END = 'touchend';
      const TOP_TOUCH_MOVE = 'touchmove';
      const TOP_TOUCH_START = 'touchstart';
      const TOP_TRANSITION_END = getVendorPrefixedEventName('transitionend');
      const TOP_VOLUME_CHANGE = 'volumechange';
      const TOP_WAITING = 'waiting';
      const TOP_WHEEL = 'wheel';
      const mediaEventTypes = [
        TOP_ABORT,
        TOP_CAN_PLAY,
        TOP_CAN_PLAY_THROUGH,
        TOP_DURATION_CHANGE,
        TOP_EMPTIED,
        TOP_ENCRYPTED,
        TOP_ENDED,
        TOP_ERROR,
        TOP_LOADED_DATA,
        TOP_LOADED_METADATA,
        TOP_LOAD_START,
        TOP_PAUSE,
        TOP_PLAY,
        TOP_PLAYING,
        TOP_PROGRESS,
        TOP_RATE_CHANGE,
        TOP_SEEKED,
        TOP_SEEKING,
        TOP_STALLED,
        TOP_SUSPEND,
        TOP_TIME_UPDATE,
        TOP_VOLUME_CHANGE,
        TOP_WAITING,
      ];
      function getRawEventName(topLevelType) {
        return topLevelType;
      }
      const PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      const elementListenerMap = new PossiblyWeakMap();
      function getListenerMapForElement(element) {
        let listenerMap = elementListenerMap.get(element);
        return (
          listenerMap === void 0 &&
            ((listenerMap = new Map()),
            elementListenerMap.set(element, listenerMap)),
          listenerMap
        );
      }
      function get(key) {
        return key._reactInternalFiber;
      }
      function has(key) {
        return key._reactInternalFiber !== void 0;
      }
      function set(key, value) {
        key._reactInternalFiber = value;
      }
      const NoEffect = 0;
      const PerformedWork = 1;
      const Placement = 2;
      const Update = 4;
      const PlacementAndUpdate = 6;
      const Deletion = 8;
      const ContentReset = 16;
      const Callback = 32;
      const DidCapture = 64;
      const Ref = 128;
      const Snapshot = 256;
      const Passive = 512;
      const Hydrating = 1024;
      const HydratingAndUpdate = 1028;
      const LifecycleEffectMask = 932;
      const HostEffectMask = 2047;
      const Incomplete = 2048;
      const ShouldCapture = 4096;
      const { ReactCurrentOwner } = ReactSharedInternals;
      function getNearestMountedFiber(fiber) {
        let node = fiber;
        let nearestMounted = fiber;
        if (fiber.alternate) for (; node.return; ) node = node.return;
        else {
          let nextNode = node;
          do
            (node = nextNode),
              (node.effectTag & (Placement | Hydrating)) !== NoEffect &&
                (nearestMounted = node.return),
              (nextNode = node.return);
          while (nextNode);
        }
        return node.tag === HostRoot ? nearestMounted : null;
      }
      function getSuspenseInstanceFromFiber(fiber) {
        if (fiber.tag === SuspenseComponent) {
          let suspenseState = fiber.memoizedState;
          if (suspenseState === null) {
            const current2 = fiber.alternate;
            current2 !== null && (suspenseState = current2.memoizedState);
          }
          if (suspenseState !== null) return suspenseState.dehydrated;
        }
        return null;
      }
      function getContainerFromFiber(fiber) {
        return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
      }
      function isFiberMounted(fiber) {
        return getNearestMountedFiber(fiber) === fiber;
      }
      function isMounted(component) {
        {
          const owner = ReactCurrentOwner.current;
          if (owner !== null && owner.tag === ClassComponent) {
            const ownerFiber = owner;
            const instance = ownerFiber.stateNode;
            instance._warnedAboutRefsInRender ||
              error(
                '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
                getComponentName(ownerFiber.type) || 'A component'
              ),
              (instance._warnedAboutRefsInRender = !0);
          }
        }
        const fiber = get(component);
        return fiber ? getNearestMountedFiber(fiber) === fiber : !1;
      }
      function assertIsMounted(fiber) {
        if (getNearestMountedFiber(fiber) !== fiber)
          throw Error('Unable to find node on an unmounted component.');
      }
      function findCurrentFiberUsingSlowPath(fiber) {
        const { alternate } = fiber;
        if (!alternate) {
          const nearestMounted = getNearestMountedFiber(fiber);
          if (nearestMounted === null)
            throw Error('Unable to find node on an unmounted component.');
          return nearestMounted !== fiber ? null : fiber;
        }
        for (var a = fiber, b = alternate; ; ) {
          const parentA = a.return;
          if (parentA === null) break;
          const parentB = parentA.alternate;
          if (parentB === null) {
            const nextParent = parentA.return;
            if (nextParent !== null) {
              a = b = nextParent;
              continue;
            }
            break;
          }
          if (parentA.child === parentB.child) {
            for (let { child } = parentA; child; ) {
              if (child === a) return assertIsMounted(parentA), fiber;
              if (child === b) return assertIsMounted(parentA), alternate;
              child = child.sibling;
            }
            throw Error('Unable to find node on an unmounted component.');
          }
          if (a.return !== b.return) (a = parentA), (b = parentB);
          else {
            for (var didFindChild = !1, _child = parentA.child; _child; ) {
              if (_child === a) {
                (didFindChild = !0), (a = parentA), (b = parentB);
                break;
              }
              if (_child === b) {
                (didFindChild = !0), (b = parentA), (a = parentB);
                break;
              }
              _child = _child.sibling;
            }
            if (!didFindChild) {
              for (_child = parentB.child; _child; ) {
                if (_child === a) {
                  (didFindChild = !0), (a = parentB), (b = parentA);
                  break;
                }
                if (_child === b) {
                  (didFindChild = !0), (b = parentB), (a = parentA);
                  break;
                }
                _child = _child.sibling;
              }
              if (!didFindChild)
                throw Error(
                  'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
                );
            }
          }
          if (a.alternate !== b)
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (a.tag !== HostRoot)
          throw Error('Unable to find node on an unmounted component.');
        return a.stateNode.current === a ? fiber : alternate;
      }
      function findCurrentHostFiber(parent) {
        const currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) return null;
        for (let node = currentParent; ; ) {
          if (node.tag === HostComponent || node.tag === HostText) return node;
          if (node.child) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === currentParent) return null;
          for (; !node.sibling; ) {
            if (!node.return || node.return === currentParent) return null;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return null;
      }
      function findCurrentHostFiberWithNoPortals(parent) {
        const currentParent = findCurrentFiberUsingSlowPath(parent);
        if (!currentParent) return null;
        for (let node = currentParent; ; ) {
          if (
            node.tag === HostComponent ||
            node.tag === HostText ||
            enableFundamentalAPI
          )
            return node;
          if (node.child && node.tag !== HostPortal) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === currentParent) return null;
          for (; !node.sibling; ) {
            if (!node.return || node.return === currentParent) return null;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return null;
      }
      function accumulateInto(current2, next) {
        if (next == null)
          throw Error(
            'accumulateInto(...): Accumulated items must not be null or undefined.'
          );
        return current2 == null
          ? next
          : Array.isArray(current2)
          ? Array.isArray(next)
            ? (current2.push.apply(current2, next), current2)
            : (current2.push(next), current2)
          : Array.isArray(next)
          ? [current2].concat(next)
          : [current2, next];
      }
      function forEachAccumulated(arr, cb, scope2) {
        Array.isArray(arr)
          ? arr.forEach(cb, scope2)
          : arr && cb.call(scope2, arr);
      }
      let eventQueue = null;
      const executeDispatchesAndRelease = function (event) {
        event &&
          (executeDispatchesInOrder(event),
          event.isPersistent() || event.constructor.release(event));
      };
      const executeDispatchesAndReleaseTopLevel = function (e) {
        return executeDispatchesAndRelease(e);
      };
      function runEventsInBatch(events) {
        events !== null && (eventQueue = accumulateInto(eventQueue, events));
        const processingEventQueue = eventQueue;
        if (((eventQueue = null), !!processingEventQueue)) {
          if (
            (forEachAccumulated(
              processingEventQueue,
              executeDispatchesAndReleaseTopLevel
            ),
            eventQueue)
          )
            throw Error(
              'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.'
            );
          rethrowCaughtError();
        }
      }
      function getEventTarget(nativeEvent) {
        let target = nativeEvent.target || nativeEvent.srcElement || window;
        return (
          target.correspondingUseElement &&
            (target = target.correspondingUseElement),
          target.nodeType === TEXT_NODE ? target.parentNode : target
        );
      }
      function isEventSupported(eventNameSuffix) {
        if (!canUseDOM) return !1;
        const eventName = `on${eventNameSuffix}`;
        let isSupported = eventName in document;
        if (!isSupported) {
          const element = document.createElement('div');
          element.setAttribute(eventName, 'return;'),
            (isSupported = typeof element[eventName] === 'function');
        }
        return isSupported;
      }
      const CALLBACK_BOOKKEEPING_POOL_SIZE = 10;
      const callbackBookkeepingPool = [];
      function releaseTopLevelCallbackBookKeeping(instance) {
        (instance.topLevelType = null),
          (instance.nativeEvent = null),
          (instance.targetInst = null),
          (instance.ancestors.length = 0),
          callbackBookkeepingPool.length < CALLBACK_BOOKKEEPING_POOL_SIZE &&
            callbackBookkeepingPool.push(instance);
      }
      function getTopLevelCallbackBookKeeping(
        topLevelType,
        nativeEvent,
        targetInst,
        eventSystemFlags
      ) {
        if (callbackBookkeepingPool.length) {
          const instance = callbackBookkeepingPool.pop();
          return (
            (instance.topLevelType = topLevelType),
            (instance.eventSystemFlags = eventSystemFlags),
            (instance.nativeEvent = nativeEvent),
            (instance.targetInst = targetInst),
            instance
          );
        }
        return {
          topLevelType,
          eventSystemFlags,
          nativeEvent,
          targetInst,
          ancestors: [],
        };
      }
      function findRootContainerNode(inst) {
        if (inst.tag === HostRoot) return inst.stateNode.containerInfo;
        for (; inst.return; ) inst = inst.return;
        return inst.tag !== HostRoot ? null : inst.stateNode.containerInfo;
      }
      function extractPluginEvents(
        topLevelType,
        targetInst,
        nativeEvent,
        nativeEventTarget,
        eventSystemFlags
      ) {
        for (var events = null, i = 0; i < plugins.length; i++) {
          const possiblePlugin = plugins[i];
          if (possiblePlugin) {
            const extractedEvents = possiblePlugin.extractEvents(
              topLevelType,
              targetInst,
              nativeEvent,
              nativeEventTarget,
              eventSystemFlags
            );
            extractedEvents &&
              (events = accumulateInto(events, extractedEvents));
          }
        }
        return events;
      }
      function runExtractedPluginEventsInBatch(
        topLevelType,
        targetInst,
        nativeEvent,
        nativeEventTarget,
        eventSystemFlags
      ) {
        const events = extractPluginEvents(
          topLevelType,
          targetInst,
          nativeEvent,
          nativeEventTarget,
          eventSystemFlags
        );
        runEventsInBatch(events);
      }
      function handleTopLevel(bookKeeping) {
        let { targetInst } = bookKeeping;
        let ancestor = targetInst;
        do {
          if (!ancestor) {
            const { ancestors } = bookKeeping;
            ancestors.push(ancestor);
            break;
          }
          const root2 = findRootContainerNode(ancestor);
          if (!root2) break;
          const { tag } = ancestor;
          (tag === HostComponent || tag === HostText) &&
            bookKeeping.ancestors.push(ancestor),
            (ancestor = getClosestInstanceFromNode(root2));
        } while (ancestor);
        for (let i = 0; i < bookKeeping.ancestors.length; i++) {
          targetInst = bookKeeping.ancestors[i];
          const eventTarget = getEventTarget(bookKeeping.nativeEvent);
          const { topLevelType } = bookKeeping;
          const { nativeEvent } = bookKeeping;
          let { eventSystemFlags } = bookKeeping;
          i === 0 && (eventSystemFlags |= IS_FIRST_ANCESTOR),
            runExtractedPluginEventsInBatch(
              topLevelType,
              targetInst,
              nativeEvent,
              eventTarget,
              eventSystemFlags
            );
        }
      }
      function dispatchEventForLegacyPluginEventSystem(
        topLevelType,
        eventSystemFlags,
        nativeEvent,
        targetInst
      ) {
        const bookKeeping = getTopLevelCallbackBookKeeping(
          topLevelType,
          nativeEvent,
          targetInst,
          eventSystemFlags
        );
        try {
          batchedEventUpdates(handleTopLevel, bookKeeping);
        } finally {
          releaseTopLevelCallbackBookKeeping(bookKeeping);
        }
      }
      function legacyListenToEvent(registrationName, mountAt) {
        for (
          let listenerMap = getListenerMapForElement(mountAt),
            dependencies = registrationNameDependencies[registrationName],
            i = 0;
          i < dependencies.length;
          i++
        ) {
          const dependency = dependencies[i];
          legacyListenToTopLevelEvent(dependency, mountAt, listenerMap);
        }
      }
      function legacyListenToTopLevelEvent(topLevelType, mountAt, listenerMap) {
        if (!listenerMap.has(topLevelType)) {
          switch (topLevelType) {
            case TOP_SCROLL:
              trapCapturedEvent(TOP_SCROLL, mountAt);
              break;
            case TOP_FOCUS:
            case TOP_BLUR:
              trapCapturedEvent(TOP_FOCUS, mountAt),
                trapCapturedEvent(TOP_BLUR, mountAt),
                listenerMap.set(TOP_BLUR, null),
                listenerMap.set(TOP_FOCUS, null);
              break;
            case TOP_CANCEL:
            case TOP_CLOSE:
              isEventSupported(getRawEventName(topLevelType)) &&
                trapCapturedEvent(topLevelType, mountAt);
              break;
            case TOP_INVALID:
            case TOP_SUBMIT:
            case TOP_RESET:
              break;
            default:
              var isMediaEvent = mediaEventTypes.indexOf(topLevelType) !== -1;
              isMediaEvent || trapBubbledEvent(topLevelType, mountAt);
              break;
          }
          listenerMap.set(topLevelType, null);
        }
      }
      function isListeningToAllDependencies(registrationName, mountAt) {
        for (
          let listenerMap = getListenerMapForElement(mountAt),
            dependencies = registrationNameDependencies[registrationName],
            i = 0;
          i < dependencies.length;
          i++
        ) {
          const dependency = dependencies[i];
          if (!listenerMap.has(dependency)) return !1;
        }
        return !0;
      }
      let attemptUserBlockingHydration;
      function setAttemptUserBlockingHydration(fn) {
        attemptUserBlockingHydration = fn;
      }
      let attemptContinuousHydration;
      function setAttemptContinuousHydration(fn) {
        attemptContinuousHydration = fn;
      }
      let attemptHydrationAtCurrentPriority;
      function setAttemptHydrationAtCurrentPriority(fn) {
        attemptHydrationAtCurrentPriority = fn;
      }
      let hasScheduledReplayAttempt = !1;
      const queuedDiscreteEvents = [];
      let queuedFocus = null;
      let queuedDrag = null;
      let queuedMouse = null;
      const queuedPointers = new Map();
      const queuedPointerCaptures = new Map();
      const queuedExplicitHydrationTargets = [];
      function hasQueuedDiscreteEvents() {
        return queuedDiscreteEvents.length > 0;
      }
      const discreteReplayableEvents = [
        TOP_MOUSE_DOWN,
        TOP_MOUSE_UP,
        TOP_TOUCH_CANCEL,
        TOP_TOUCH_END,
        TOP_TOUCH_START,
        TOP_AUX_CLICK,
        TOP_DOUBLE_CLICK,
        TOP_POINTER_CANCEL,
        TOP_POINTER_DOWN,
        TOP_POINTER_UP,
        TOP_DRAG_END,
        TOP_DRAG_START,
        TOP_DROP,
        TOP_COMPOSITION_END,
        TOP_COMPOSITION_START,
        TOP_KEY_DOWN,
        TOP_KEY_PRESS,
        TOP_KEY_UP,
        TOP_INPUT,
        TOP_TEXT_INPUT,
        TOP_CLOSE,
        TOP_CANCEL,
        TOP_COPY,
        TOP_CUT,
        TOP_PASTE,
        TOP_CLICK,
        TOP_CHANGE,
        TOP_CONTEXT_MENU,
        TOP_RESET,
        TOP_SUBMIT,
      ];
      const continuousReplayableEvents = [
        TOP_FOCUS,
        TOP_BLUR,
        TOP_DRAG_ENTER,
        TOP_DRAG_LEAVE,
        TOP_MOUSE_OVER,
        TOP_MOUSE_OUT,
        TOP_POINTER_OVER,
        TOP_POINTER_OUT,
        TOP_GOT_POINTER_CAPTURE,
        TOP_LOST_POINTER_CAPTURE,
      ];
      function isReplayableDiscreteEvent(eventType) {
        return discreteReplayableEvents.indexOf(eventType) > -1;
      }
      function trapReplayableEventForDocument(
        topLevelType,
        document3,
        listenerMap
      ) {
        legacyListenToTopLevelEvent(topLevelType, document3, listenerMap);
      }
      function eagerlyTrapReplayableEvents(container, document3) {
        const listenerMapForDoc = getListenerMapForElement(document3);
        discreteReplayableEvents.forEach((topLevelType) => {
          trapReplayableEventForDocument(
            topLevelType,
            document3,
            listenerMapForDoc
          );
        }),
          continuousReplayableEvents.forEach((topLevelType) => {
            trapReplayableEventForDocument(
              topLevelType,
              document3,
              listenerMapForDoc
            );
          });
      }
      function createQueuedReplayableEvent(
        blockedOn,
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        return {
          blockedOn,
          topLevelType,
          eventSystemFlags: eventSystemFlags | IS_REPLAYED,
          nativeEvent,
          container,
        };
      }
      function queueDiscreteEvent(
        blockedOn,
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        const queuedEvent = createQueuedReplayableEvent(
          blockedOn,
          topLevelType,
          eventSystemFlags,
          container,
          nativeEvent
        );
        queuedDiscreteEvents.push(queuedEvent);
      }
      function clearIfContinuousEvent(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_FOCUS:
          case TOP_BLUR:
            queuedFocus = null;
            break;
          case TOP_DRAG_ENTER:
          case TOP_DRAG_LEAVE:
            queuedDrag = null;
            break;
          case TOP_MOUSE_OVER:
          case TOP_MOUSE_OUT:
            queuedMouse = null;
            break;
          case TOP_POINTER_OVER:
          case TOP_POINTER_OUT: {
            const { pointerId } = nativeEvent;
            queuedPointers.delete(pointerId);
            break;
          }
          case TOP_GOT_POINTER_CAPTURE:
          case TOP_LOST_POINTER_CAPTURE: {
            const _pointerId = nativeEvent.pointerId;
            queuedPointerCaptures.delete(_pointerId);
            break;
          }
        }
      }
      function accumulateOrCreateContinuousQueuedReplayableEvent(
        existingQueuedEvent,
        blockedOn,
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        if (
          existingQueuedEvent === null ||
          existingQueuedEvent.nativeEvent !== nativeEvent
        ) {
          const queuedEvent = createQueuedReplayableEvent(
            blockedOn,
            topLevelType,
            eventSystemFlags,
            container,
            nativeEvent
          );
          if (blockedOn !== null) {
            const _fiber2 = getInstanceFromNode$1(blockedOn);
            _fiber2 !== null && attemptContinuousHydration(_fiber2);
          }
          return queuedEvent;
        }
        return (
          (existingQueuedEvent.eventSystemFlags |= eventSystemFlags),
          existingQueuedEvent
        );
      }
      function queueIfContinuousEvent(
        blockedOn,
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        switch (topLevelType) {
          case TOP_FOCUS: {
            const focusEvent = nativeEvent;
            return (
              (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedFocus,
                blockedOn,
                topLevelType,
                eventSystemFlags,
                container,
                focusEvent
              )),
              !0
            );
          }
          case TOP_DRAG_ENTER: {
            const dragEvent = nativeEvent;
            return (
              (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedDrag,
                blockedOn,
                topLevelType,
                eventSystemFlags,
                container,
                dragEvent
              )),
              !0
            );
          }
          case TOP_MOUSE_OVER: {
            const mouseEvent = nativeEvent;
            return (
              (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
                queuedMouse,
                blockedOn,
                topLevelType,
                eventSystemFlags,
                container,
                mouseEvent
              )),
              !0
            );
          }
          case TOP_POINTER_OVER: {
            const pointerEvent = nativeEvent;
            const { pointerId } = pointerEvent;
            return (
              queuedPointers.set(
                pointerId,
                accumulateOrCreateContinuousQueuedReplayableEvent(
                  queuedPointers.get(pointerId) || null,
                  blockedOn,
                  topLevelType,
                  eventSystemFlags,
                  container,
                  pointerEvent
                )
              ),
              !0
            );
          }
          case TOP_GOT_POINTER_CAPTURE: {
            const _pointerEvent = nativeEvent;
            const _pointerId2 = _pointerEvent.pointerId;
            return (
              queuedPointerCaptures.set(
                _pointerId2,
                accumulateOrCreateContinuousQueuedReplayableEvent(
                  queuedPointerCaptures.get(_pointerId2) || null,
                  blockedOn,
                  topLevelType,
                  eventSystemFlags,
                  container,
                  _pointerEvent
                )
              ),
              !0
            );
          }
        }
        return !1;
      }
      function attemptExplicitHydrationTarget(queuedTarget) {
        const targetInst = getClosestInstanceFromNode(queuedTarget.target);
        if (targetInst !== null) {
          const nearestMounted = getNearestMountedFiber(targetInst);
          if (nearestMounted !== null) {
            const { tag } = nearestMounted;
            if (tag === SuspenseComponent) {
              const instance = getSuspenseInstanceFromFiber(nearestMounted);
              if (instance !== null) {
                (queuedTarget.blockedOn = instance),
                  Scheduler.unstable_runWithPriority(
                    queuedTarget.priority,
                    () => {
                      attemptHydrationAtCurrentPriority(nearestMounted);
                    }
                  );
                return;
              }
            } else if (tag === HostRoot) {
              const root2 = nearestMounted.stateNode;
              if (root2.hydrate) {
                queuedTarget.blockedOn = getContainerFromFiber(nearestMounted);
                return;
              }
            }
          }
        }
        queuedTarget.blockedOn = null;
      }
      function attemptReplayContinuousQueuedEvent(queuedEvent) {
        if (queuedEvent.blockedOn !== null) return !1;
        const nextBlockedOn = attemptToDispatchEvent(
          queuedEvent.topLevelType,
          queuedEvent.eventSystemFlags,
          queuedEvent.container,
          queuedEvent.nativeEvent
        );
        if (nextBlockedOn !== null) {
          const _fiber3 = getInstanceFromNode$1(nextBlockedOn);
          return (
            _fiber3 !== null && attemptContinuousHydration(_fiber3),
            (queuedEvent.blockedOn = nextBlockedOn),
            !1
          );
        }
        return !0;
      }
      function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
        attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
      }
      function replayUnblockedEvents() {
        for (
          hasScheduledReplayAttempt = !1;
          queuedDiscreteEvents.length > 0;

        ) {
          const nextDiscreteEvent = queuedDiscreteEvents[0];
          if (nextDiscreteEvent.blockedOn !== null) {
            const _fiber4 = getInstanceFromNode$1(nextDiscreteEvent.blockedOn);
            _fiber4 !== null && attemptUserBlockingHydration(_fiber4);
            break;
          }
          const nextBlockedOn = attemptToDispatchEvent(
            nextDiscreteEvent.topLevelType,
            nextDiscreteEvent.eventSystemFlags,
            nextDiscreteEvent.container,
            nextDiscreteEvent.nativeEvent
          );
          nextBlockedOn !== null
            ? (nextDiscreteEvent.blockedOn = nextBlockedOn)
            : queuedDiscreteEvents.shift();
        }
        queuedFocus !== null &&
          attemptReplayContinuousQueuedEvent(queuedFocus) &&
          (queuedFocus = null),
          queuedDrag !== null &&
            attemptReplayContinuousQueuedEvent(queuedDrag) &&
            (queuedDrag = null),
          queuedMouse !== null &&
            attemptReplayContinuousQueuedEvent(queuedMouse) &&
            (queuedMouse = null),
          queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap),
          queuedPointerCaptures.forEach(
            attemptReplayContinuousQueuedEventInMap
          );
      }
      function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
        queuedEvent.blockedOn === unblocked &&
          ((queuedEvent.blockedOn = null),
          hasScheduledReplayAttempt ||
            ((hasScheduledReplayAttempt = !0),
            Scheduler.unstable_scheduleCallback(
              Scheduler.unstable_NormalPriority,
              replayUnblockedEvents
            )));
      }
      function retryIfBlockedOn(unblocked) {
        if (queuedDiscreteEvents.length > 0) {
          scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
          for (let i = 1; i < queuedDiscreteEvents.length; i++) {
            const queuedEvent = queuedDiscreteEvents[i];
            queuedEvent.blockedOn === unblocked &&
              (queuedEvent.blockedOn = null);
          }
        }
        queuedFocus !== null &&
          scheduleCallbackIfUnblocked(queuedFocus, unblocked),
          queuedDrag !== null &&
            scheduleCallbackIfUnblocked(queuedDrag, unblocked),
          queuedMouse !== null &&
            scheduleCallbackIfUnblocked(queuedMouse, unblocked);
        const unblock = function (queuedEvent2) {
          return scheduleCallbackIfUnblocked(queuedEvent2, unblocked);
        };
        queuedPointers.forEach(unblock), queuedPointerCaptures.forEach(unblock);
        for (let _i = 0; _i < queuedExplicitHydrationTargets.length; _i++) {
          const queuedTarget = queuedExplicitHydrationTargets[_i];
          queuedTarget.blockedOn === unblocked &&
            (queuedTarget.blockedOn = null);
        }
        for (; queuedExplicitHydrationTargets.length > 0; ) {
          const nextExplicitTarget = queuedExplicitHydrationTargets[0];
          if (nextExplicitTarget.blockedOn !== null) break;
          attemptExplicitHydrationTarget(nextExplicitTarget),
            nextExplicitTarget.blockedOn === null &&
              queuedExplicitHydrationTargets.shift();
        }
      }
      function addEventBubbleListener(element, eventType, listener) {
        element.addEventListener(eventType, listener, !1);
      }
      function addEventCaptureListener(element, eventType, listener) {
        element.addEventListener(eventType, listener, !0);
      }
      const simpleEventPluginEventTypes = {};
      const topLevelEventsToDispatchConfig = new Map();
      const eventPriorities = new Map();
      const discreteEventPairsForSimpleEventPlugin = [
        TOP_BLUR,
        'blur',
        TOP_CANCEL,
        'cancel',
        TOP_CLICK,
        'click',
        TOP_CLOSE,
        'close',
        TOP_CONTEXT_MENU,
        'contextMenu',
        TOP_COPY,
        'copy',
        TOP_CUT,
        'cut',
        TOP_AUX_CLICK,
        'auxClick',
        TOP_DOUBLE_CLICK,
        'doubleClick',
        TOP_DRAG_END,
        'dragEnd',
        TOP_DRAG_START,
        'dragStart',
        TOP_DROP,
        'drop',
        TOP_FOCUS,
        'focus',
        TOP_INPUT,
        'input',
        TOP_INVALID,
        'invalid',
        TOP_KEY_DOWN,
        'keyDown',
        TOP_KEY_PRESS,
        'keyPress',
        TOP_KEY_UP,
        'keyUp',
        TOP_MOUSE_DOWN,
        'mouseDown',
        TOP_MOUSE_UP,
        'mouseUp',
        TOP_PASTE,
        'paste',
        TOP_PAUSE,
        'pause',
        TOP_PLAY,
        'play',
        TOP_POINTER_CANCEL,
        'pointerCancel',
        TOP_POINTER_DOWN,
        'pointerDown',
        TOP_POINTER_UP,
        'pointerUp',
        TOP_RATE_CHANGE,
        'rateChange',
        TOP_RESET,
        'reset',
        TOP_SEEKED,
        'seeked',
        TOP_SUBMIT,
        'submit',
        TOP_TOUCH_CANCEL,
        'touchCancel',
        TOP_TOUCH_END,
        'touchEnd',
        TOP_TOUCH_START,
        'touchStart',
        TOP_VOLUME_CHANGE,
        'volumeChange',
      ];
      const otherDiscreteEvents = [
        TOP_CHANGE,
        TOP_SELECTION_CHANGE,
        TOP_TEXT_INPUT,
        TOP_COMPOSITION_START,
        TOP_COMPOSITION_END,
        TOP_COMPOSITION_UPDATE,
      ];
      const userBlockingPairsForSimpleEventPlugin = [
        TOP_DRAG,
        'drag',
        TOP_DRAG_ENTER,
        'dragEnter',
        TOP_DRAG_EXIT,
        'dragExit',
        TOP_DRAG_LEAVE,
        'dragLeave',
        TOP_DRAG_OVER,
        'dragOver',
        TOP_MOUSE_MOVE,
        'mouseMove',
        TOP_MOUSE_OUT,
        'mouseOut',
        TOP_MOUSE_OVER,
        'mouseOver',
        TOP_POINTER_MOVE,
        'pointerMove',
        TOP_POINTER_OUT,
        'pointerOut',
        TOP_POINTER_OVER,
        'pointerOver',
        TOP_SCROLL,
        'scroll',
        TOP_TOGGLE,
        'toggle',
        TOP_TOUCH_MOVE,
        'touchMove',
        TOP_WHEEL,
        'wheel',
      ];
      const continuousPairsForSimpleEventPlugin = [
        TOP_ABORT,
        'abort',
        TOP_ANIMATION_END,
        'animationEnd',
        TOP_ANIMATION_ITERATION,
        'animationIteration',
        TOP_ANIMATION_START,
        'animationStart',
        TOP_CAN_PLAY,
        'canPlay',
        TOP_CAN_PLAY_THROUGH,
        'canPlayThrough',
        TOP_DURATION_CHANGE,
        'durationChange',
        TOP_EMPTIED,
        'emptied',
        TOP_ENCRYPTED,
        'encrypted',
        TOP_ENDED,
        'ended',
        TOP_ERROR,
        'error',
        TOP_GOT_POINTER_CAPTURE,
        'gotPointerCapture',
        TOP_LOAD,
        'load',
        TOP_LOADED_DATA,
        'loadedData',
        TOP_LOADED_METADATA,
        'loadedMetadata',
        TOP_LOAD_START,
        'loadStart',
        TOP_LOST_POINTER_CAPTURE,
        'lostPointerCapture',
        TOP_PLAYING,
        'playing',
        TOP_PROGRESS,
        'progress',
        TOP_SEEKING,
        'seeking',
        TOP_STALLED,
        'stalled',
        TOP_SUSPEND,
        'suspend',
        TOP_TIME_UPDATE,
        'timeUpdate',
        TOP_TRANSITION_END,
        'transitionEnd',
        TOP_WAITING,
        'waiting',
      ];
      function processSimpleEventPluginPairsByPriority(eventTypes2, priority) {
        for (let i = 0; i < eventTypes2.length; i += 2) {
          const topEvent = eventTypes2[i];
          const event = eventTypes2[i + 1];
          const capitalizedEvent = event[0].toUpperCase() + event.slice(1);
          const onEvent = `on${capitalizedEvent}`;
          const config = {
            phasedRegistrationNames: {
              bubbled: onEvent,
              captured: `${onEvent}Capture`,
            },
            dependencies: [topEvent],
            eventPriority: priority,
          };
          eventPriorities.set(topEvent, priority),
            topLevelEventsToDispatchConfig.set(topEvent, config),
            (simpleEventPluginEventTypes[event] = config);
        }
      }
      function processTopEventPairsByPriority(eventTypes2, priority) {
        for (let i = 0; i < eventTypes2.length; i++)
          eventPriorities.set(eventTypes2[i], priority);
      }
      processSimpleEventPluginPairsByPriority(
        discreteEventPairsForSimpleEventPlugin,
        DiscreteEvent
      ),
        processSimpleEventPluginPairsByPriority(
          userBlockingPairsForSimpleEventPlugin,
          UserBlockingEvent
        ),
        processSimpleEventPluginPairsByPriority(
          continuousPairsForSimpleEventPlugin,
          ContinuousEvent
        ),
        processTopEventPairsByPriority(otherDiscreteEvents, DiscreteEvent);
      function getEventPriorityForPluginSystem(topLevelType) {
        const priority = eventPriorities.get(topLevelType);
        return priority === void 0 ? ContinuousEvent : priority;
      }
      const UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
      const runWithPriority = Scheduler.unstable_runWithPriority;
      let _enabled = !0;
      function setEnabled(enabled) {
        _enabled = !!enabled;
      }
      function isEnabled() {
        return _enabled;
      }
      function trapBubbledEvent(topLevelType, element) {
        trapEventForPluginEventSystem(element, topLevelType, !1);
      }
      function trapCapturedEvent(topLevelType, element) {
        trapEventForPluginEventSystem(element, topLevelType, !0);
      }
      function trapEventForPluginEventSystem(container, topLevelType, capture) {
        let listener;
        switch (getEventPriorityForPluginSystem(topLevelType)) {
          case DiscreteEvent:
            listener = dispatchDiscreteEvent.bind(
              null,
              topLevelType,
              PLUGIN_EVENT_SYSTEM,
              container
            );
            break;
          case UserBlockingEvent:
            listener = dispatchUserBlockingUpdate.bind(
              null,
              topLevelType,
              PLUGIN_EVENT_SYSTEM,
              container
            );
            break;
          case ContinuousEvent:
          default:
            listener = dispatchEvent.bind(
              null,
              topLevelType,
              PLUGIN_EVENT_SYSTEM,
              container
            );
            break;
        }
        const rawEventName = getRawEventName(topLevelType);
        capture
          ? addEventCaptureListener(container, rawEventName, listener)
          : addEventBubbleListener(container, rawEventName, listener);
      }
      function dispatchDiscreteEvent(
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp),
          discreteUpdates(
            dispatchEvent,
            topLevelType,
            eventSystemFlags,
            container,
            nativeEvent
          );
      }
      function dispatchUserBlockingUpdate(
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        runWithPriority(
          UserBlockingPriority,
          dispatchEvent.bind(
            null,
            topLevelType,
            eventSystemFlags,
            container,
            nativeEvent
          )
        );
      }
      function dispatchEvent(
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        if (_enabled) {
          if (
            hasQueuedDiscreteEvents() &&
            isReplayableDiscreteEvent(topLevelType)
          ) {
            queueDiscreteEvent(
              null,
              topLevelType,
              eventSystemFlags,
              container,
              nativeEvent
            );
            return;
          }
          const blockedOn = attemptToDispatchEvent(
            topLevelType,
            eventSystemFlags,
            container,
            nativeEvent
          );
          if (blockedOn === null) {
            clearIfContinuousEvent(topLevelType, nativeEvent);
            return;
          }
          if (isReplayableDiscreteEvent(topLevelType)) {
            queueDiscreteEvent(
              blockedOn,
              topLevelType,
              eventSystemFlags,
              container,
              nativeEvent
            );
            return;
          }
          queueIfContinuousEvent(
            blockedOn,
            topLevelType,
            eventSystemFlags,
            container,
            nativeEvent
          ) ||
            (clearIfContinuousEvent(topLevelType, nativeEvent),
            dispatchEventForLegacyPluginEventSystem(
              topLevelType,
              eventSystemFlags,
              nativeEvent,
              null
            ));
        }
      }
      function attemptToDispatchEvent(
        topLevelType,
        eventSystemFlags,
        container,
        nativeEvent
      ) {
        const nativeEventTarget = getEventTarget(nativeEvent);
        let targetInst = getClosestInstanceFromNode(nativeEventTarget);
        if (targetInst !== null) {
          const nearestMounted = getNearestMountedFiber(targetInst);
          if (nearestMounted === null) targetInst = null;
          else {
            const { tag } = nearestMounted;
            if (tag === SuspenseComponent) {
              const instance = getSuspenseInstanceFromFiber(nearestMounted);
              if (instance !== null) return instance;
              targetInst = null;
            } else if (tag === HostRoot) {
              const root2 = nearestMounted.stateNode;
              if (root2.hydrate) return getContainerFromFiber(nearestMounted);
              targetInst = null;
            } else nearestMounted !== targetInst && (targetInst = null);
          }
        }
        return (
          dispatchEventForLegacyPluginEventSystem(
            topLevelType,
            eventSystemFlags,
            nativeEvent,
            targetInst
          ),
          null
        );
      }
      const shorthandToLonghand = {
        animation: [
          'animationDelay',
          'animationDirection',
          'animationDuration',
          'animationFillMode',
          'animationIterationCount',
          'animationName',
          'animationPlayState',
          'animationTimingFunction',
        ],
        background: [
          'backgroundAttachment',
          'backgroundClip',
          'backgroundColor',
          'backgroundImage',
          'backgroundOrigin',
          'backgroundPositionX',
          'backgroundPositionY',
          'backgroundRepeat',
          'backgroundSize',
        ],
        backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
        border: [
          'borderBottomColor',
          'borderBottomStyle',
          'borderBottomWidth',
          'borderImageOutset',
          'borderImageRepeat',
          'borderImageSlice',
          'borderImageSource',
          'borderImageWidth',
          'borderLeftColor',
          'borderLeftStyle',
          'borderLeftWidth',
          'borderRightColor',
          'borderRightStyle',
          'borderRightWidth',
          'borderTopColor',
          'borderTopStyle',
          'borderTopWidth',
        ],
        borderBlockEnd: [
          'borderBlockEndColor',
          'borderBlockEndStyle',
          'borderBlockEndWidth',
        ],
        borderBlockStart: [
          'borderBlockStartColor',
          'borderBlockStartStyle',
          'borderBlockStartWidth',
        ],
        borderBottom: [
          'borderBottomColor',
          'borderBottomStyle',
          'borderBottomWidth',
        ],
        borderColor: [
          'borderBottomColor',
          'borderLeftColor',
          'borderRightColor',
          'borderTopColor',
        ],
        borderImage: [
          'borderImageOutset',
          'borderImageRepeat',
          'borderImageSlice',
          'borderImageSource',
          'borderImageWidth',
        ],
        borderInlineEnd: [
          'borderInlineEndColor',
          'borderInlineEndStyle',
          'borderInlineEndWidth',
        ],
        borderInlineStart: [
          'borderInlineStartColor',
          'borderInlineStartStyle',
          'borderInlineStartWidth',
        ],
        borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
        borderRadius: [
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
          'borderTopLeftRadius',
          'borderTopRightRadius',
        ],
        borderRight: [
          'borderRightColor',
          'borderRightStyle',
          'borderRightWidth',
        ],
        borderStyle: [
          'borderBottomStyle',
          'borderLeftStyle',
          'borderRightStyle',
          'borderTopStyle',
        ],
        borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
        borderWidth: [
          'borderBottomWidth',
          'borderLeftWidth',
          'borderRightWidth',
          'borderTopWidth',
        ],
        columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
        columns: ['columnCount', 'columnWidth'],
        flex: ['flexBasis', 'flexGrow', 'flexShrink'],
        flexFlow: ['flexDirection', 'flexWrap'],
        font: [
          'fontFamily',
          'fontFeatureSettings',
          'fontKerning',
          'fontLanguageOverride',
          'fontSize',
          'fontSizeAdjust',
          'fontStretch',
          'fontStyle',
          'fontVariant',
          'fontVariantAlternates',
          'fontVariantCaps',
          'fontVariantEastAsian',
          'fontVariantLigatures',
          'fontVariantNumeric',
          'fontVariantPosition',
          'fontWeight',
          'lineHeight',
        ],
        fontVariant: [
          'fontVariantAlternates',
          'fontVariantCaps',
          'fontVariantEastAsian',
          'fontVariantLigatures',
          'fontVariantNumeric',
          'fontVariantPosition',
        ],
        gap: ['columnGap', 'rowGap'],
        grid: [
          'gridAutoColumns',
          'gridAutoFlow',
          'gridAutoRows',
          'gridTemplateAreas',
          'gridTemplateColumns',
          'gridTemplateRows',
        ],
        gridArea: [
          'gridColumnEnd',
          'gridColumnStart',
          'gridRowEnd',
          'gridRowStart',
        ],
        gridColumn: ['gridColumnEnd', 'gridColumnStart'],
        gridColumnGap: ['columnGap'],
        gridGap: ['columnGap', 'rowGap'],
        gridRow: ['gridRowEnd', 'gridRowStart'],
        gridRowGap: ['rowGap'],
        gridTemplate: [
          'gridTemplateAreas',
          'gridTemplateColumns',
          'gridTemplateRows',
        ],
        listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
        margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
        marker: ['markerEnd', 'markerMid', 'markerStart'],
        mask: [
          'maskClip',
          'maskComposite',
          'maskImage',
          'maskMode',
          'maskOrigin',
          'maskPositionX',
          'maskPositionY',
          'maskRepeat',
          'maskSize',
        ],
        maskPosition: ['maskPositionX', 'maskPositionY'],
        outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
        overflow: ['overflowX', 'overflowY'],
        padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
        placeContent: ['alignContent', 'justifyContent'],
        placeItems: ['alignItems', 'justifyItems'],
        placeSelf: ['alignSelf', 'justifySelf'],
        textDecoration: [
          'textDecorationColor',
          'textDecorationLine',
          'textDecorationStyle',
        ],
        textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
        transition: [
          'transitionDelay',
          'transitionDuration',
          'transitionProperty',
          'transitionTimingFunction',
        ],
        wordWrap: ['overflowWrap'],
      };
      const isUnitlessNumber = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
      function prefixKey(prefix, key) {
        return prefix + key.charAt(0).toUpperCase() + key.substring(1);
      }
      const prefixes = ['Webkit', 'ms', 'Moz', 'O'];
      Object.keys(isUnitlessNumber).forEach((prop) => {
        prefixes.forEach((prefix) => {
          isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
        });
      });
      function dangerousStyleValue(name, value, isCustomProperty) {
        const isEmpty =
          value == null || typeof value === 'boolean' || value === '';
        return isEmpty
          ? ''
          : !isCustomProperty &&
            typeof value === 'number' &&
            value !== 0 &&
            !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
          ? `${value}px`
          : `${value}`.trim();
      }
      const uppercasePattern = /([A-Z])/g;
      const msPattern = /^ms-/;
      function hyphenateStyleName(name) {
        return name
          .replace(uppercasePattern, '-$1')
          .toLowerCase()
          .replace(msPattern, '-ms-');
      }
      let warnValidStyle = function () {};
      {
        const badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        const msPattern$1 = /^-ms-/;
        const hyphenPattern = /-(.)/g;
        const badStyleValueWithSemicolonPattern = /;\s*$/;
        const warnedStyleNames = {};
        const warnedStyleValues = {};
        let warnedForNaNValue = !1;
        let warnedForInfinityValue = !1;
        const camelize = function (string) {
          return string.replace(hyphenPattern, (_, character) =>
            character.toUpperCase()
          );
        };
        const warnHyphenatedStyleName = function (name) {
          (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) ||
            ((warnedStyleNames[name] = !0),
            error(
              'Unsupported style property %s. Did you mean %s?',
              name,
              camelize(name.replace(msPattern$1, 'ms-'))
            ));
        };
        const warnBadVendoredStyleName = function (name) {
          (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) ||
            ((warnedStyleNames[name] = !0),
            error(
              'Unsupported vendor-prefixed style property %s. Did you mean %s?',
              name,
              name.charAt(0).toUpperCase() + name.slice(1)
            ));
        };
        const warnStyleValueWithSemicolon = function (name, value) {
          (warnedStyleValues.hasOwnProperty(value) &&
            warnedStyleValues[value]) ||
            ((warnedStyleValues[value] = !0),
            error(
              `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
              name,
              value.replace(badStyleValueWithSemicolonPattern, '')
            ));
        };
        const warnStyleValueIsNaN = function (name, value) {
          warnedForNaNValue ||
            ((warnedForNaNValue = !0),
            error(
              '`NaN` is an invalid value for the `%s` css style property.',
              name
            ));
        };
        const warnStyleValueIsInfinity = function (name, value) {
          warnedForInfinityValue ||
            ((warnedForInfinityValue = !0),
            error(
              '`Infinity` is an invalid value for the `%s` css style property.',
              name
            ));
        };
        warnValidStyle = function (name, value) {
          name.indexOf('-') > -1
            ? warnHyphenatedStyleName(name)
            : badVendoredStyleNamePattern.test(name)
            ? warnBadVendoredStyleName(name)
            : badStyleValueWithSemicolonPattern.test(value) &&
              warnStyleValueWithSemicolon(name, value),
            typeof value === 'number' &&
              (isNaN(value)
                ? warnStyleValueIsNaN(name, value)
                : isFinite(value) || warnStyleValueIsInfinity(name, value));
        };
      }
      const warnValidStyle$1 = warnValidStyle;
      function createDangerousStringForStyles(styles) {
        {
          let serialized = '';
          let delimiter = '';
          for (const styleName in styles)
            if (styles.hasOwnProperty(styleName)) {
              const styleValue = styles[styleName];
              if (styleValue != null) {
                const isCustomProperty = styleName.indexOf('--') === 0;
                (serialized += `${
                  delimiter +
                  (isCustomProperty ? styleName : hyphenateStyleName(styleName))
                }:`),
                  (serialized += dangerousStyleValue(
                    styleName,
                    styleValue,
                    isCustomProperty
                  )),
                  (delimiter = ';');
              }
            }
          return serialized || null;
        }
      }
      function setValueForStyles(node, styles) {
        const style2 = node.style;
        for (let styleName in styles)
          if (styles.hasOwnProperty(styleName)) {
            const isCustomProperty = styleName.indexOf('--') === 0;
            isCustomProperty || warnValidStyle$1(styleName, styles[styleName]);
            const styleValue = dangerousStyleValue(
              styleName,
              styles[styleName],
              isCustomProperty
            );
            styleName === 'float' && (styleName = 'cssFloat'),
              isCustomProperty
                ? style2.setProperty(styleName, styleValue)
                : (style2[styleName] = styleValue);
          }
      }
      function isValueEmpty(value) {
        return value == null || typeof value === 'boolean' || value === '';
      }
      function expandShorthandMap(styles) {
        const expanded = {};
        for (const key in styles)
          for (
            let longhands = shorthandToLonghand[key] || [key], i = 0;
            i < longhands.length;
            i++
          )
            expanded[longhands[i]] = key;
        return expanded;
      }
      function validateShorthandPropertyCollisionInDev(
        styleUpdates,
        nextStyles
      ) {
        {
          if (!nextStyles) return;
          const expandedUpdates = expandShorthandMap(styleUpdates);
          const expandedStyles = expandShorthandMap(nextStyles);
          const warnedAbout = {};
          for (const key in expandedUpdates) {
            const originalKey = expandedUpdates[key];
            const correctOriginalKey = expandedStyles[key];
            if (correctOriginalKey && originalKey !== correctOriginalKey) {
              const warningKey = `${originalKey},${correctOriginalKey}`;
              if (warnedAbout[warningKey]) continue;
              (warnedAbout[warningKey] = !0),
                error(
                  "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                  isValueEmpty(styleUpdates[originalKey])
                    ? 'Removing'
                    : 'Updating',
                  originalKey,
                  correctOriginalKey
                );
            }
          }
        }
      }
      const omittedCloseTags = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
      const voidElementTags = _assign({ menuitem: !0 }, omittedCloseTags);
      const HTML = '__html';
      let ReactDebugCurrentFrame$3 = null;
      ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
      function assertValidProps(tag, props) {
        if (props) {
          if (
            voidElementTags[tag] &&
            !(props.children == null && props.dangerouslySetInnerHTML == null)
          )
            throw Error(
              `${tag} is a void element tag and must neither have \`children\` nor use \`dangerouslySetInnerHTML\`.${ReactDebugCurrentFrame$3.getStackAddendum()}`
            );
          if (props.dangerouslySetInnerHTML != null) {
            if (props.children != null)
              throw Error(
                'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
              );
            if (
              !(
                typeof props.dangerouslySetInnerHTML === 'object' &&
                HTML in props.dangerouslySetInnerHTML
              )
            )
              throw Error(
                '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.'
              );
          }
          if (
            (!props.suppressContentEditableWarning &&
              props.contentEditable &&
              props.children != null &&
              error(
                'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
              ),
            !(props.style == null || typeof props.style === 'object'))
          )
            throw Error(
              `The \`style\` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.${ReactDebugCurrentFrame$3.getStackAddendum()}`
            );
        }
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf('-') === -1) return typeof props.is === 'string';
        switch (tagName) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      const possibleStandardNames = {
        accept: 'accept',
        acceptcharset: 'acceptCharset',
        'accept-charset': 'acceptCharset',
        accesskey: 'accessKey',
        action: 'action',
        allowfullscreen: 'allowFullScreen',
        alt: 'alt',
        as: 'as',
        async: 'async',
        autocapitalize: 'autoCapitalize',
        autocomplete: 'autoComplete',
        autocorrect: 'autoCorrect',
        autofocus: 'autoFocus',
        autoplay: 'autoPlay',
        autosave: 'autoSave',
        capture: 'capture',
        cellpadding: 'cellPadding',
        cellspacing: 'cellSpacing',
        challenge: 'challenge',
        charset: 'charSet',
        checked: 'checked',
        children: 'children',
        cite: 'cite',
        class: 'className',
        classid: 'classID',
        classname: 'className',
        cols: 'cols',
        colspan: 'colSpan',
        content: 'content',
        contenteditable: 'contentEditable',
        contextmenu: 'contextMenu',
        controls: 'controls',
        controlslist: 'controlsList',
        coords: 'coords',
        crossorigin: 'crossOrigin',
        dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
        data: 'data',
        datetime: 'dateTime',
        default: 'default',
        defaultchecked: 'defaultChecked',
        defaultvalue: 'defaultValue',
        defer: 'defer',
        dir: 'dir',
        disabled: 'disabled',
        disablepictureinpicture: 'disablePictureInPicture',
        download: 'download',
        draggable: 'draggable',
        enctype: 'encType',
        for: 'htmlFor',
        form: 'form',
        formmethod: 'formMethod',
        formaction: 'formAction',
        formenctype: 'formEncType',
        formnovalidate: 'formNoValidate',
        formtarget: 'formTarget',
        frameborder: 'frameBorder',
        headers: 'headers',
        height: 'height',
        hidden: 'hidden',
        high: 'high',
        href: 'href',
        hreflang: 'hrefLang',
        htmlfor: 'htmlFor',
        httpequiv: 'httpEquiv',
        'http-equiv': 'httpEquiv',
        icon: 'icon',
        id: 'id',
        innerhtml: 'innerHTML',
        inputmode: 'inputMode',
        integrity: 'integrity',
        is: 'is',
        itemid: 'itemID',
        itemprop: 'itemProp',
        itemref: 'itemRef',
        itemscope: 'itemScope',
        itemtype: 'itemType',
        keyparams: 'keyParams',
        keytype: 'keyType',
        kind: 'kind',
        label: 'label',
        lang: 'lang',
        list: 'list',
        loop: 'loop',
        low: 'low',
        manifest: 'manifest',
        marginwidth: 'marginWidth',
        marginheight: 'marginHeight',
        max: 'max',
        maxlength: 'maxLength',
        media: 'media',
        mediagroup: 'mediaGroup',
        method: 'method',
        min: 'min',
        minlength: 'minLength',
        multiple: 'multiple',
        muted: 'muted',
        name: 'name',
        nomodule: 'noModule',
        nonce: 'nonce',
        novalidate: 'noValidate',
        open: 'open',
        optimum: 'optimum',
        pattern: 'pattern',
        placeholder: 'placeholder',
        playsinline: 'playsInline',
        poster: 'poster',
        preload: 'preload',
        profile: 'profile',
        radiogroup: 'radioGroup',
        readonly: 'readOnly',
        referrerpolicy: 'referrerPolicy',
        rel: 'rel',
        required: 'required',
        reversed: 'reversed',
        role: 'role',
        rows: 'rows',
        rowspan: 'rowSpan',
        sandbox: 'sandbox',
        scope: 'scope',
        scoped: 'scoped',
        scrolling: 'scrolling',
        seamless: 'seamless',
        selected: 'selected',
        shape: 'shape',
        size: 'size',
        sizes: 'sizes',
        span: 'span',
        spellcheck: 'spellCheck',
        src: 'src',
        srcdoc: 'srcDoc',
        srclang: 'srcLang',
        srcset: 'srcSet',
        start: 'start',
        step: 'step',
        style: 'style',
        summary: 'summary',
        tabindex: 'tabIndex',
        target: 'target',
        title: 'title',
        type: 'type',
        usemap: 'useMap',
        value: 'value',
        width: 'width',
        wmode: 'wmode',
        wrap: 'wrap',
        about: 'about',
        accentheight: 'accentHeight',
        'accent-height': 'accentHeight',
        accumulate: 'accumulate',
        additive: 'additive',
        alignmentbaseline: 'alignmentBaseline',
        'alignment-baseline': 'alignmentBaseline',
        allowreorder: 'allowReorder',
        alphabetic: 'alphabetic',
        amplitude: 'amplitude',
        arabicform: 'arabicForm',
        'arabic-form': 'arabicForm',
        ascent: 'ascent',
        attributename: 'attributeName',
        attributetype: 'attributeType',
        autoreverse: 'autoReverse',
        azimuth: 'azimuth',
        basefrequency: 'baseFrequency',
        baselineshift: 'baselineShift',
        'baseline-shift': 'baselineShift',
        baseprofile: 'baseProfile',
        bbox: 'bbox',
        begin: 'begin',
        bias: 'bias',
        by: 'by',
        calcmode: 'calcMode',
        capheight: 'capHeight',
        'cap-height': 'capHeight',
        clip: 'clip',
        clippath: 'clipPath',
        'clip-path': 'clipPath',
        clippathunits: 'clipPathUnits',
        cliprule: 'clipRule',
        'clip-rule': 'clipRule',
        color: 'color',
        colorinterpolation: 'colorInterpolation',
        'color-interpolation': 'colorInterpolation',
        colorinterpolationfilters: 'colorInterpolationFilters',
        'color-interpolation-filters': 'colorInterpolationFilters',
        colorprofile: 'colorProfile',
        'color-profile': 'colorProfile',
        colorrendering: 'colorRendering',
        'color-rendering': 'colorRendering',
        contentscripttype: 'contentScriptType',
        contentstyletype: 'contentStyleType',
        cursor: 'cursor',
        cx: 'cx',
        cy: 'cy',
        d: 'd',
        datatype: 'datatype',
        decelerate: 'decelerate',
        descent: 'descent',
        diffuseconstant: 'diffuseConstant',
        direction: 'direction',
        display: 'display',
        divisor: 'divisor',
        dominantbaseline: 'dominantBaseline',
        'dominant-baseline': 'dominantBaseline',
        dur: 'dur',
        dx: 'dx',
        dy: 'dy',
        edgemode: 'edgeMode',
        elevation: 'elevation',
        enablebackground: 'enableBackground',
        'enable-background': 'enableBackground',
        end: 'end',
        exponent: 'exponent',
        externalresourcesrequired: 'externalResourcesRequired',
        fill: 'fill',
        fillopacity: 'fillOpacity',
        'fill-opacity': 'fillOpacity',
        fillrule: 'fillRule',
        'fill-rule': 'fillRule',
        filter: 'filter',
        filterres: 'filterRes',
        filterunits: 'filterUnits',
        floodopacity: 'floodOpacity',
        'flood-opacity': 'floodOpacity',
        floodcolor: 'floodColor',
        'flood-color': 'floodColor',
        focusable: 'focusable',
        fontfamily: 'fontFamily',
        'font-family': 'fontFamily',
        fontsize: 'fontSize',
        'font-size': 'fontSize',
        fontsizeadjust: 'fontSizeAdjust',
        'font-size-adjust': 'fontSizeAdjust',
        fontstretch: 'fontStretch',
        'font-stretch': 'fontStretch',
        fontstyle: 'fontStyle',
        'font-style': 'fontStyle',
        fontvariant: 'fontVariant',
        'font-variant': 'fontVariant',
        fontweight: 'fontWeight',
        'font-weight': 'fontWeight',
        format: 'format',
        from: 'from',
        fx: 'fx',
        fy: 'fy',
        g1: 'g1',
        g2: 'g2',
        glyphname: 'glyphName',
        'glyph-name': 'glyphName',
        glyphorientationhorizontal: 'glyphOrientationHorizontal',
        'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
        glyphorientationvertical: 'glyphOrientationVertical',
        'glyph-orientation-vertical': 'glyphOrientationVertical',
        glyphref: 'glyphRef',
        gradienttransform: 'gradientTransform',
        gradientunits: 'gradientUnits',
        hanging: 'hanging',
        horizadvx: 'horizAdvX',
        'horiz-adv-x': 'horizAdvX',
        horizoriginx: 'horizOriginX',
        'horiz-origin-x': 'horizOriginX',
        ideographic: 'ideographic',
        imagerendering: 'imageRendering',
        'image-rendering': 'imageRendering',
        in2: 'in2',
        in: 'in',
        inlist: 'inlist',
        intercept: 'intercept',
        k1: 'k1',
        k2: 'k2',
        k3: 'k3',
        k4: 'k4',
        k: 'k',
        kernelmatrix: 'kernelMatrix',
        kernelunitlength: 'kernelUnitLength',
        kerning: 'kerning',
        keypoints: 'keyPoints',
        keysplines: 'keySplines',
        keytimes: 'keyTimes',
        lengthadjust: 'lengthAdjust',
        letterspacing: 'letterSpacing',
        'letter-spacing': 'letterSpacing',
        lightingcolor: 'lightingColor',
        'lighting-color': 'lightingColor',
        limitingconeangle: 'limitingConeAngle',
        local: 'local',
        markerend: 'markerEnd',
        'marker-end': 'markerEnd',
        markerheight: 'markerHeight',
        markermid: 'markerMid',
        'marker-mid': 'markerMid',
        markerstart: 'markerStart',
        'marker-start': 'markerStart',
        markerunits: 'markerUnits',
        markerwidth: 'markerWidth',
        mask: 'mask',
        maskcontentunits: 'maskContentUnits',
        maskunits: 'maskUnits',
        mathematical: 'mathematical',
        mode: 'mode',
        numoctaves: 'numOctaves',
        offset: 'offset',
        opacity: 'opacity',
        operator: 'operator',
        order: 'order',
        orient: 'orient',
        orientation: 'orientation',
        origin: 'origin',
        overflow: 'overflow',
        overlineposition: 'overlinePosition',
        'overline-position': 'overlinePosition',
        overlinethickness: 'overlineThickness',
        'overline-thickness': 'overlineThickness',
        paintorder: 'paintOrder',
        'paint-order': 'paintOrder',
        panose1: 'panose1',
        'panose-1': 'panose1',
        pathlength: 'pathLength',
        patterncontentunits: 'patternContentUnits',
        patterntransform: 'patternTransform',
        patternunits: 'patternUnits',
        pointerevents: 'pointerEvents',
        'pointer-events': 'pointerEvents',
        points: 'points',
        pointsatx: 'pointsAtX',
        pointsaty: 'pointsAtY',
        pointsatz: 'pointsAtZ',
        prefix: 'prefix',
        preservealpha: 'preserveAlpha',
        preserveaspectratio: 'preserveAspectRatio',
        primitiveunits: 'primitiveUnits',
        property: 'property',
        r: 'r',
        radius: 'radius',
        refx: 'refX',
        refy: 'refY',
        renderingintent: 'renderingIntent',
        'rendering-intent': 'renderingIntent',
        repeatcount: 'repeatCount',
        repeatdur: 'repeatDur',
        requiredextensions: 'requiredExtensions',
        requiredfeatures: 'requiredFeatures',
        resource: 'resource',
        restart: 'restart',
        result: 'result',
        results: 'results',
        rotate: 'rotate',
        rx: 'rx',
        ry: 'ry',
        scale: 'scale',
        security: 'security',
        seed: 'seed',
        shaperendering: 'shapeRendering',
        'shape-rendering': 'shapeRendering',
        slope: 'slope',
        spacing: 'spacing',
        specularconstant: 'specularConstant',
        specularexponent: 'specularExponent',
        speed: 'speed',
        spreadmethod: 'spreadMethod',
        startoffset: 'startOffset',
        stddeviation: 'stdDeviation',
        stemh: 'stemh',
        stemv: 'stemv',
        stitchtiles: 'stitchTiles',
        stopcolor: 'stopColor',
        'stop-color': 'stopColor',
        stopopacity: 'stopOpacity',
        'stop-opacity': 'stopOpacity',
        strikethroughposition: 'strikethroughPosition',
        'strikethrough-position': 'strikethroughPosition',
        strikethroughthickness: 'strikethroughThickness',
        'strikethrough-thickness': 'strikethroughThickness',
        string: 'string',
        stroke: 'stroke',
        strokedasharray: 'strokeDasharray',
        'stroke-dasharray': 'strokeDasharray',
        strokedashoffset: 'strokeDashoffset',
        'stroke-dashoffset': 'strokeDashoffset',
        strokelinecap: 'strokeLinecap',
        'stroke-linecap': 'strokeLinecap',
        strokelinejoin: 'strokeLinejoin',
        'stroke-linejoin': 'strokeLinejoin',
        strokemiterlimit: 'strokeMiterlimit',
        'stroke-miterlimit': 'strokeMiterlimit',
        strokewidth: 'strokeWidth',
        'stroke-width': 'strokeWidth',
        strokeopacity: 'strokeOpacity',
        'stroke-opacity': 'strokeOpacity',
        suppresscontenteditablewarning: 'suppressContentEditableWarning',
        suppresshydrationwarning: 'suppressHydrationWarning',
        surfacescale: 'surfaceScale',
        systemlanguage: 'systemLanguage',
        tablevalues: 'tableValues',
        targetx: 'targetX',
        targety: 'targetY',
        textanchor: 'textAnchor',
        'text-anchor': 'textAnchor',
        textdecoration: 'textDecoration',
        'text-decoration': 'textDecoration',
        textlength: 'textLength',
        textrendering: 'textRendering',
        'text-rendering': 'textRendering',
        to: 'to',
        transform: 'transform',
        typeof: 'typeof',
        u1: 'u1',
        u2: 'u2',
        underlineposition: 'underlinePosition',
        'underline-position': 'underlinePosition',
        underlinethickness: 'underlineThickness',
        'underline-thickness': 'underlineThickness',
        unicode: 'unicode',
        unicodebidi: 'unicodeBidi',
        'unicode-bidi': 'unicodeBidi',
        unicoderange: 'unicodeRange',
        'unicode-range': 'unicodeRange',
        unitsperem: 'unitsPerEm',
        'units-per-em': 'unitsPerEm',
        unselectable: 'unselectable',
        valphabetic: 'vAlphabetic',
        'v-alphabetic': 'vAlphabetic',
        values: 'values',
        vectoreffect: 'vectorEffect',
        'vector-effect': 'vectorEffect',
        version: 'version',
        vertadvy: 'vertAdvY',
        'vert-adv-y': 'vertAdvY',
        vertoriginx: 'vertOriginX',
        'vert-origin-x': 'vertOriginX',
        vertoriginy: 'vertOriginY',
        'vert-origin-y': 'vertOriginY',
        vhanging: 'vHanging',
        'v-hanging': 'vHanging',
        videographic: 'vIdeographic',
        'v-ideographic': 'vIdeographic',
        viewbox: 'viewBox',
        viewtarget: 'viewTarget',
        visibility: 'visibility',
        vmathematical: 'vMathematical',
        'v-mathematical': 'vMathematical',
        vocab: 'vocab',
        widths: 'widths',
        wordspacing: 'wordSpacing',
        'word-spacing': 'wordSpacing',
        writingmode: 'writingMode',
        'writing-mode': 'writingMode',
        x1: 'x1',
        x2: 'x2',
        x: 'x',
        xchannelselector: 'xChannelSelector',
        xheight: 'xHeight',
        'x-height': 'xHeight',
        xlinkactuate: 'xlinkActuate',
        'xlink:actuate': 'xlinkActuate',
        xlinkarcrole: 'xlinkArcrole',
        'xlink:arcrole': 'xlinkArcrole',
        xlinkhref: 'xlinkHref',
        'xlink:href': 'xlinkHref',
        xlinkrole: 'xlinkRole',
        'xlink:role': 'xlinkRole',
        xlinkshow: 'xlinkShow',
        'xlink:show': 'xlinkShow',
        xlinktitle: 'xlinkTitle',
        'xlink:title': 'xlinkTitle',
        xlinktype: 'xlinkType',
        'xlink:type': 'xlinkType',
        xmlbase: 'xmlBase',
        'xml:base': 'xmlBase',
        xmllang: 'xmlLang',
        'xml:lang': 'xmlLang',
        xmlns: 'xmlns',
        'xml:space': 'xmlSpace',
        xmlnsxlink: 'xmlnsXlink',
        'xmlns:xlink': 'xmlnsXlink',
        xmlspace: 'xmlSpace',
        y1: 'y1',
        y2: 'y2',
        y: 'y',
        ychannelselector: 'yChannelSelector',
        z: 'z',
        zoomandpan: 'zoomAndPan',
      };
      const ariaProperties = {
        'aria-current': 0,
        'aria-details': 0,
        'aria-disabled': 0,
        'aria-hidden': 0,
        'aria-invalid': 0,
        'aria-keyshortcuts': 0,
        'aria-label': 0,
        'aria-roledescription': 0,
        'aria-autocomplete': 0,
        'aria-checked': 0,
        'aria-expanded': 0,
        'aria-haspopup': 0,
        'aria-level': 0,
        'aria-modal': 0,
        'aria-multiline': 0,
        'aria-multiselectable': 0,
        'aria-orientation': 0,
        'aria-placeholder': 0,
        'aria-pressed': 0,
        'aria-readonly': 0,
        'aria-required': 0,
        'aria-selected': 0,
        'aria-sort': 0,
        'aria-valuemax': 0,
        'aria-valuemin': 0,
        'aria-valuenow': 0,
        'aria-valuetext': 0,
        'aria-atomic': 0,
        'aria-busy': 0,
        'aria-live': 0,
        'aria-relevant': 0,
        'aria-dropeffect': 0,
        'aria-grabbed': 0,
        'aria-activedescendant': 0,
        'aria-colcount': 0,
        'aria-colindex': 0,
        'aria-colspan': 0,
        'aria-controls': 0,
        'aria-describedby': 0,
        'aria-errormessage': 0,
        'aria-flowto': 0,
        'aria-labelledby': 0,
        'aria-owns': 0,
        'aria-posinset': 0,
        'aria-rowcount': 0,
        'aria-rowindex': 0,
        'aria-rowspan': 0,
        'aria-setsize': 0,
      };
      const warnedProperties = {};
      const rARIA = new RegExp(`^(aria)-[${ATTRIBUTE_NAME_CHAR}]*$`);
      const rARIACamel = new RegExp(`^(aria)[A-Z][${ATTRIBUTE_NAME_CHAR}]*$`);
      const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
      function validateProperty(tagName, name) {
        {
          if (
            hasOwnProperty$1.call(warnedProperties, name) &&
            warnedProperties[name]
          )
            return !0;
          if (rARIACamel.test(name)) {
            const ariaName = `aria-${name.slice(4).toLowerCase()}`;
            const correctName = ariaProperties.hasOwnProperty(ariaName)
              ? ariaName
              : null;
            if (correctName == null)
              return (
                error(
                  'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
                  name
                ),
                (warnedProperties[name] = !0),
                !0
              );
            if (name !== correctName)
              return (
                error(
                  'Invalid ARIA attribute `%s`. Did you mean `%s`?',
                  name,
                  correctName
                ),
                (warnedProperties[name] = !0),
                !0
              );
          }
          if (rARIA.test(name)) {
            const lowerCasedName = name.toLowerCase();
            const standardName = ariaProperties.hasOwnProperty(lowerCasedName)
              ? lowerCasedName
              : null;
            if (standardName == null) return (warnedProperties[name] = !0), !1;
            if (name !== standardName)
              return (
                error(
                  'Unknown ARIA attribute `%s`. Did you mean `%s`?',
                  name,
                  standardName
                ),
                (warnedProperties[name] = !0),
                !0
              );
          }
        }
        return !0;
      }
      function warnInvalidARIAProps(type, props) {
        {
          const invalidProps = [];
          for (const key in props) {
            const isValid = validateProperty(type, key);
            isValid || invalidProps.push(key);
          }
          const unknownPropString = invalidProps
            .map((prop) => `\`${prop}\``)
            .join(', ');
          invalidProps.length === 1
            ? error(
                'Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop',
                unknownPropString,
                type
              )
            : invalidProps.length > 1 &&
              error(
                'Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop',
                unknownPropString,
                type
              );
        }
      }
      function validateProperties(type, props) {
        isCustomComponent(type, props) || warnInvalidARIAProps(type, props);
      }
      let didWarnValueNull = !1;
      function validateProperties$1(type, props) {
        {
          if (type !== 'input' && type !== 'textarea' && type !== 'select')
            return;
          props != null &&
            props.value === null &&
            !didWarnValueNull &&
            ((didWarnValueNull = !0),
            type === 'select' && props.multiple
              ? error(
                  '`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
                  type
                )
              : error(
                  '`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
                  type
                ));
        }
      }
      let validateProperty$1 = function () {};
      {
        const warnedProperties$1 = {};
        const _hasOwnProperty = Object.prototype.hasOwnProperty;
        const EVENT_NAME_REGEX = /^on./;
        const INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
        const rARIA$1 = new RegExp(`^(aria)-[${ATTRIBUTE_NAME_CHAR}]*$`);
        const rARIACamel$1 = new RegExp(
          `^(aria)[A-Z][${ATTRIBUTE_NAME_CHAR}]*$`
        );
        validateProperty$1 = function (
          tagName,
          name,
          value,
          canUseEventSystem
        ) {
          if (
            _hasOwnProperty.call(warnedProperties$1, name) &&
            warnedProperties$1[name]
          )
            return !0;
          const lowerCasedName = name.toLowerCase();
          if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout')
            return (
              error(
                'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (canUseEventSystem) {
            if (registrationNameModules.hasOwnProperty(name)) return !0;
            const registrationName = possibleRegistrationNames.hasOwnProperty(
              lowerCasedName
            )
              ? possibleRegistrationNames[lowerCasedName]
              : null;
            if (registrationName != null)
              return (
                error(
                  'Invalid event handler property `%s`. Did you mean `%s`?',
                  name,
                  registrationName
                ),
                (warnedProperties$1[name] = !0),
                !0
              );
            if (EVENT_NAME_REGEX.test(name))
              return (
                error(
                  'Unknown event handler property `%s`. It will be ignored.',
                  name
                ),
                (warnedProperties$1[name] = !0),
                !0
              );
          } else if (EVENT_NAME_REGEX.test(name))
            return (
              INVALID_EVENT_NAME_REGEX.test(name) &&
                error(
                  'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
                  name
                ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (rARIA$1.test(name) || rARIACamel$1.test(name)) return !0;
          if (lowerCasedName === 'innerhtml')
            return (
              error(
                'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (lowerCasedName === 'aria')
            return (
              error(
                'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (
            lowerCasedName === 'is' &&
            value !== null &&
            value !== void 0 &&
            typeof value !== 'string'
          )
            return (
              error(
                'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
                typeof value
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          if (typeof value === 'number' && isNaN(value))
            return (
              error(
                'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
                name
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          const propertyInfo = getPropertyInfo(name);
          const isReserved =
            propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            const standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name)
              return (
                error(
                  'Invalid DOM property `%s`. Did you mean `%s`?',
                  name,
                  standardName
                ),
                (warnedProperties$1[name] = !0),
                !0
              );
          } else if (!isReserved && name !== lowerCasedName)
            return (
              error(
                'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
                name,
                lowerCasedName
              ),
              (warnedProperties$1[name] = !0),
              !0
            );
          return typeof value === 'boolean' &&
            shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1)
            ? (value
                ? error(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                    value,
                    name,
                    name,
                    value,
                    name
                  )
                : error(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    value,
                    name,
                    name,
                    value,
                    name,
                    name,
                    name
                  ),
              (warnedProperties$1[name] = !0),
              !0)
            : isReserved
            ? !0
            : shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1)
            ? ((warnedProperties$1[name] = !0), !1)
            : ((value === 'false' || value === 'true') &&
                propertyInfo !== null &&
                propertyInfo.type === BOOLEAN &&
                (error(
                  'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
                  value,
                  name,
                  value === 'false'
                    ? 'The browser will interpret it as a truthy value.'
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  name,
                  value
                ),
                (warnedProperties$1[name] = !0)),
              !0);
        };
      }
      const warnUnknownProperties = function (type, props, canUseEventSystem) {
        {
          const unknownProps = [];
          for (const key in props) {
            const isValid = validateProperty$1(
              type,
              key,
              props[key],
              canUseEventSystem
            );
            isValid || unknownProps.push(key);
          }
          const unknownPropString = unknownProps
            .map((prop) => `\`${prop}\``)
            .join(', ');
          unknownProps.length === 1
            ? error(
                'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior',
                unknownPropString,
                type
              )
            : unknownProps.length > 1 &&
              error(
                'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior',
                unknownPropString,
                type
              );
        }
      };
      function validateProperties$2(type, props, canUseEventSystem) {
        isCustomComponent(type, props) ||
          warnUnknownProperties(type, props, canUseEventSystem);
      }
      let didWarnInvalidHydration = !1;
      const DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
      const SUPPRESS_CONTENT_EDITABLE_WARNING =
        'suppressContentEditableWarning';
      const SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
      const AUTOFOCUS = 'autoFocus';
      const CHILDREN = 'children';
      const STYLE = 'style';
      const HTML$1 = '__html';
      const HTML_NAMESPACE$1 = Namespaces.html;
      let warnedUnknownTags;
      let suppressHydrationWarning;
      let validatePropertiesInDevelopment;
      let warnForTextDifference;
      let warnForPropDifference;
      let warnForExtraAttributes;
      let warnForInvalidEventListener;
      let canDiffStyleForHydrationWarning;
      let normalizeMarkupForTextOrAttribute;
      let normalizeHTML;
      {
        (warnedUnknownTags = { time: !0, dialog: !0, webview: !0 }),
          (validatePropertiesInDevelopment = function (type, props) {
            validateProperties(type, props),
              validateProperties$1(type, props),
              validateProperties$2(type, props, !0);
          }),
          (canDiffStyleForHydrationWarning =
            canUseDOM && !document.documentMode);
        const NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
        const NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
        (normalizeMarkupForTextOrAttribute = function (markup) {
          const markupString =
            typeof markup === 'string' ? markup : `${markup}`;
          return markupString
            .replace(
              NORMALIZE_NEWLINES_REGEX,
              `
`
            )
            .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, '');
        }),
          (warnForTextDifference = function (serverText, clientText) {
            if (!didWarnInvalidHydration) {
              const normalizedClientText =
                normalizeMarkupForTextOrAttribute(clientText);
              const normalizedServerText =
                normalizeMarkupForTextOrAttribute(serverText);
              normalizedServerText !== normalizedClientText &&
                ((didWarnInvalidHydration = !0),
                error(
                  'Text content did not match. Server: "%s" Client: "%s"',
                  normalizedServerText,
                  normalizedClientText
                ));
            }
          }),
          (warnForPropDifference = function (
            propName,
            serverValue,
            clientValue
          ) {
            if (!didWarnInvalidHydration) {
              const normalizedClientValue =
                normalizeMarkupForTextOrAttribute(clientValue);
              const normalizedServerValue =
                normalizeMarkupForTextOrAttribute(serverValue);
              normalizedServerValue !== normalizedClientValue &&
                ((didWarnInvalidHydration = !0),
                error(
                  'Prop `%s` did not match. Server: %s Client: %s',
                  propName,
                  JSON.stringify(normalizedServerValue),
                  JSON.stringify(normalizedClientValue)
                ));
            }
          }),
          (warnForExtraAttributes = function (attributeNames) {
            if (!didWarnInvalidHydration) {
              didWarnInvalidHydration = !0;
              const names = [];
              attributeNames.forEach((name) => {
                names.push(name);
              }),
                error('Extra attributes from the server: %s', names);
            }
          }),
          (warnForInvalidEventListener = function (registrationName, listener) {
            listener === !1
              ? error(
                  'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                  registrationName,
                  registrationName,
                  registrationName
                )
              : error(
                  'Expected `%s` listener to be a function, instead got a value of `%s` type.',
                  registrationName,
                  typeof listener
                );
          }),
          (normalizeHTML = function (parent, html) {
            const testElement =
              parent.namespaceURI === HTML_NAMESPACE$1
                ? parent.ownerDocument.createElement(parent.tagName)
                : parent.ownerDocument.createElementNS(
                    parent.namespaceURI,
                    parent.tagName
                  );
            return (testElement.innerHTML = html), testElement.innerHTML;
          });
      }
      function ensureListeningTo(rootContainerElement, registrationName) {
        const isDocumentOrFragment =
          rootContainerElement.nodeType === DOCUMENT_NODE ||
          rootContainerElement.nodeType === DOCUMENT_FRAGMENT_NODE;
        const doc = isDocumentOrFragment
          ? rootContainerElement
          : rootContainerElement.ownerDocument;
        legacyListenToEvent(registrationName, doc);
      }
      function getOwnerDocumentFromRootContainer(rootContainerElement) {
        return rootContainerElement.nodeType === DOCUMENT_NODE
          ? rootContainerElement
          : rootContainerElement.ownerDocument;
      }
      function noop2() {}
      function trapClickOnNonInteractiveElement(node) {
        node.onclick = noop2;
      }
      function setInitialDOMProperties(
        tag,
        domElement,
        rootContainerElement,
        nextProps,
        isCustomComponentTag
      ) {
        for (const propKey in nextProps)
          if (nextProps.hasOwnProperty(propKey)) {
            const nextProp = nextProps[propKey];
            if (propKey === STYLE)
              nextProp && Object.freeze(nextProp),
                setValueForStyles(domElement, nextProp);
            else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              const nextHtml = nextProp ? nextProp[HTML$1] : void 0;
              nextHtml != null && setInnerHTML(domElement, nextHtml);
            } else if (propKey === CHILDREN)
              if (typeof nextProp === 'string') {
                const canSetTextContent = tag !== 'textarea' || nextProp !== '';
                canSetTextContent && setTextContent(domElement, nextProp);
              } else
                typeof nextProp === 'number' &&
                  setTextContent(domElement, `${nextProp}`);
            else
              propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                propKey === SUPPRESS_HYDRATION_WARNING ||
                propKey === AUTOFOCUS ||
                (registrationNameModules.hasOwnProperty(propKey)
                  ? nextProp != null &&
                    (typeof nextProp !== 'function' &&
                      warnForInvalidEventListener(propKey, nextProp),
                    ensureListeningTo(rootContainerElement, propKey))
                  : nextProp != null &&
                    setValueForProperty(
                      domElement,
                      propKey,
                      nextProp,
                      isCustomComponentTag
                    ));
          }
      }
      function updateDOMProperties(
        domElement,
        updatePayload,
        wasCustomComponentTag,
        isCustomComponentTag
      ) {
        for (let i = 0; i < updatePayload.length; i += 2) {
          const propKey = updatePayload[i];
          const propValue = updatePayload[i + 1];
          propKey === STYLE
            ? setValueForStyles(domElement, propValue)
            : propKey === DANGEROUSLY_SET_INNER_HTML
            ? setInnerHTML(domElement, propValue)
            : propKey === CHILDREN
            ? setTextContent(domElement, propValue)
            : setValueForProperty(
                domElement,
                propKey,
                propValue,
                isCustomComponentTag
              );
        }
      }
      function createElement(
        type,
        props,
        rootContainerElement,
        parentNamespace
      ) {
        let isCustomComponentTag;
        const ownerDocument =
          getOwnerDocumentFromRootContainer(rootContainerElement);
        let domElement;
        let namespaceURI = parentNamespace;
        if (
          (namespaceURI === HTML_NAMESPACE$1 &&
            (namespaceURI = getIntrinsicNamespace(type)),
          namespaceURI === HTML_NAMESPACE$1)
        ) {
          if (
            ((isCustomComponentTag = isCustomComponent(type, props)),
            !isCustomComponentTag &&
              type !== type.toLowerCase() &&
              error(
                '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
                type
              ),
            type === 'script')
          ) {
            const div = ownerDocument.createElement('div');
            div.innerHTML = '<script></script>';
            const { firstChild } = div;
            domElement = div.removeChild(firstChild);
          } else if (typeof props.is === 'string')
            domElement = ownerDocument.createElement(type, { is: props.is });
          else if (
            ((domElement = ownerDocument.createElement(type)),
            type === 'select')
          ) {
            const node = domElement;
            props.multiple
              ? (node.multiple = !0)
              : props.size && (node.size = props.size);
          }
        } else domElement = ownerDocument.createElementNS(namespaceURI, type);
        return (
          namespaceURI === HTML_NAMESPACE$1 &&
            !isCustomComponentTag &&
            Object.prototype.toString.call(domElement) ===
              '[object HTMLUnknownElement]' &&
            !Object.prototype.hasOwnProperty.call(warnedUnknownTags, type) &&
            ((warnedUnknownTags[type] = !0),
            error(
              'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
              type
            )),
          domElement
        );
      }
      function createTextNode(text, rootContainerElement) {
        return getOwnerDocumentFromRootContainer(
          rootContainerElement
        ).createTextNode(text);
      }
      function setInitialProperties(
        domElement,
        tag,
        rawProps,
        rootContainerElement
      ) {
        const isCustomComponentTag = isCustomComponent(tag, rawProps);
        validatePropertiesInDevelopment(tag, rawProps);
        let props;
        switch (tag) {
          case 'iframe':
          case 'object':
          case 'embed':
            trapBubbledEvent(TOP_LOAD, domElement), (props = rawProps);
            break;
          case 'video':
          case 'audio':
            for (let i = 0; i < mediaEventTypes.length; i++)
              trapBubbledEvent(mediaEventTypes[i], domElement);
            props = rawProps;
            break;
          case 'source':
            trapBubbledEvent(TOP_ERROR, domElement), (props = rawProps);
            break;
          case 'img':
          case 'image':
          case 'link':
            trapBubbledEvent(TOP_ERROR, domElement),
              trapBubbledEvent(TOP_LOAD, domElement),
              (props = rawProps);
            break;
          case 'form':
            trapBubbledEvent(TOP_RESET, domElement),
              trapBubbledEvent(TOP_SUBMIT, domElement),
              (props = rawProps);
            break;
          case 'details':
            trapBubbledEvent(TOP_TOGGLE, domElement), (props = rawProps);
            break;
          case 'input':
            initWrapperState(domElement, rawProps),
              (props = getHostProps(domElement, rawProps)),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, 'onChange');
            break;
          case 'option':
            validateProps(domElement, rawProps),
              (props = getHostProps$1(domElement, rawProps));
            break;
          case 'select':
            initWrapperState$1(domElement, rawProps),
              (props = getHostProps$2(domElement, rawProps)),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, 'onChange');
            break;
          case 'textarea':
            initWrapperState$2(domElement, rawProps),
              (props = getHostProps$3(domElement, rawProps)),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, 'onChange');
            break;
          default:
            props = rawProps;
        }
        switch (
          (assertValidProps(tag, props),
          setInitialDOMProperties(
            tag,
            domElement,
            rootContainerElement,
            props,
            isCustomComponentTag
          ),
          tag)
        ) {
          case 'input':
            track(domElement), postMountWrapper(domElement, rawProps, !1);
            break;
          case 'textarea':
            track(domElement), postMountWrapper$3(domElement);
            break;
          case 'option':
            postMountWrapper$1(domElement, rawProps);
            break;
          case 'select':
            postMountWrapper$2(domElement, rawProps);
            break;
          default:
            typeof props.onClick === 'function' &&
              trapClickOnNonInteractiveElement(domElement);
            break;
        }
      }
      function diffProperties(
        domElement,
        tag,
        lastRawProps,
        nextRawProps,
        rootContainerElement
      ) {
        validatePropertiesInDevelopment(tag, nextRawProps);
        let updatePayload = null;
        let lastProps;
        let nextProps;
        switch (tag) {
          case 'input':
            (lastProps = getHostProps(domElement, lastRawProps)),
              (nextProps = getHostProps(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          case 'option':
            (lastProps = getHostProps$1(domElement, lastRawProps)),
              (nextProps = getHostProps$1(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          case 'select':
            (lastProps = getHostProps$2(domElement, lastRawProps)),
              (nextProps = getHostProps$2(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          case 'textarea':
            (lastProps = getHostProps$3(domElement, lastRawProps)),
              (nextProps = getHostProps$3(domElement, nextRawProps)),
              (updatePayload = []);
            break;
          default:
            (lastProps = lastRawProps),
              (nextProps = nextRawProps),
              typeof lastProps.onClick !== 'function' &&
                typeof nextProps.onClick === 'function' &&
                trapClickOnNonInteractiveElement(domElement);
            break;
        }
        assertValidProps(tag, nextProps);
        let propKey;
        let styleName;
        let styleUpdates = null;
        for (propKey in lastProps)
          if (
            !(
              nextProps.hasOwnProperty(propKey) ||
              !lastProps.hasOwnProperty(propKey) ||
              lastProps[propKey] == null
            )
          )
            if (propKey === STYLE) {
              const lastStyle = lastProps[propKey];
              for (styleName in lastStyle)
                lastStyle.hasOwnProperty(styleName) &&
                  (styleUpdates || (styleUpdates = {}),
                  (styleUpdates[styleName] = ''));
            } else
              propKey === DANGEROUSLY_SET_INNER_HTML ||
                propKey === CHILDREN ||
                propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                propKey === SUPPRESS_HYDRATION_WARNING ||
                propKey === AUTOFOCUS ||
                (registrationNameModules.hasOwnProperty(propKey)
                  ? updatePayload || (updatePayload = [])
                  : (updatePayload = updatePayload || []).push(propKey, null));
        for (propKey in nextProps) {
          const nextProp = nextProps[propKey];
          const lastProp = lastProps?.[propKey];
          if (
            !(
              !nextProps.hasOwnProperty(propKey) ||
              nextProp === lastProp ||
              (nextProp == null && lastProp == null)
            )
          )
            if (propKey === STYLE)
              if ((nextProp && Object.freeze(nextProp), lastProp)) {
                for (styleName in lastProp)
                  lastProp.hasOwnProperty(styleName) &&
                    (!nextProp || !nextProp.hasOwnProperty(styleName)) &&
                    (styleUpdates || (styleUpdates = {}),
                    (styleUpdates[styleName] = ''));
                for (styleName in nextProp)
                  nextProp.hasOwnProperty(styleName) &&
                    lastProp[styleName] !== nextProp[styleName] &&
                    (styleUpdates || (styleUpdates = {}),
                    (styleUpdates[styleName] = nextProp[styleName]));
              } else
                styleUpdates ||
                  (updatePayload || (updatePayload = []),
                  updatePayload.push(propKey, styleUpdates)),
                  (styleUpdates = nextProp);
            else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
              const nextHtml = nextProp ? nextProp[HTML$1] : void 0;
              const lastHtml = lastProp ? lastProp[HTML$1] : void 0;
              nextHtml != null &&
                lastHtml !== nextHtml &&
                (updatePayload = updatePayload || []).push(propKey, nextHtml);
            } else
              propKey === CHILDREN
                ? lastProp !== nextProp &&
                  (typeof nextProp === 'string' ||
                    typeof nextProp === 'number') &&
                  (updatePayload = updatePayload || []).push(
                    propKey,
                    `${nextProp}`
                  )
                : propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                  propKey === SUPPRESS_HYDRATION_WARNING ||
                  (registrationNameModules.hasOwnProperty(propKey)
                    ? (nextProp != null &&
                        (typeof nextProp !== 'function' &&
                          warnForInvalidEventListener(propKey, nextProp),
                        ensureListeningTo(rootContainerElement, propKey)),
                      !updatePayload &&
                        lastProp !== nextProp &&
                        (updatePayload = []))
                    : (updatePayload = updatePayload || []).push(
                        propKey,
                        nextProp
                      ));
        }
        return (
          styleUpdates &&
            (validateShorthandPropertyCollisionInDev(
              styleUpdates,
              nextProps[STYLE]
            ),
            (updatePayload = updatePayload || []).push(STYLE, styleUpdates)),
          updatePayload
        );
      }
      function updateProperties(
        domElement,
        updatePayload,
        tag,
        lastRawProps,
        nextRawProps
      ) {
        tag === 'input' &&
          nextRawProps.type === 'radio' &&
          nextRawProps.name != null &&
          updateChecked(domElement, nextRawProps);
        const wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
        const isCustomComponentTag = isCustomComponent(tag, nextRawProps);
        switch (
          (updateDOMProperties(
            domElement,
            updatePayload,
            wasCustomComponentTag,
            isCustomComponentTag
          ),
          tag)
        ) {
          case 'input':
            updateWrapper(domElement, nextRawProps);
            break;
          case 'textarea':
            updateWrapper$1(domElement, nextRawProps);
            break;
          case 'select':
            postUpdateWrapper(domElement, nextRawProps);
            break;
        }
      }
      function getPossibleStandardName(propName) {
        {
          const lowerCasedName = propName.toLowerCase();
          return (
            (possibleStandardNames.hasOwnProperty(lowerCasedName) &&
              possibleStandardNames[lowerCasedName]) ||
            null
          );
        }
      }
      function diffHydratedProperties(
        domElement,
        tag,
        rawProps,
        parentNamespace,
        rootContainerElement
      ) {
        let isCustomComponentTag;
        let extraAttributeNames;
        switch (
          ((suppressHydrationWarning =
            rawProps[SUPPRESS_HYDRATION_WARNING] === !0),
          (isCustomComponentTag = isCustomComponent(tag, rawProps)),
          validatePropertiesInDevelopment(tag, rawProps),
          tag)
        ) {
          case 'iframe':
          case 'object':
          case 'embed':
            trapBubbledEvent(TOP_LOAD, domElement);
            break;
          case 'video':
          case 'audio':
            for (let i = 0; i < mediaEventTypes.length; i++)
              trapBubbledEvent(mediaEventTypes[i], domElement);
            break;
          case 'source':
            trapBubbledEvent(TOP_ERROR, domElement);
            break;
          case 'img':
          case 'image':
          case 'link':
            trapBubbledEvent(TOP_ERROR, domElement),
              trapBubbledEvent(TOP_LOAD, domElement);
            break;
          case 'form':
            trapBubbledEvent(TOP_RESET, domElement),
              trapBubbledEvent(TOP_SUBMIT, domElement);
            break;
          case 'details':
            trapBubbledEvent(TOP_TOGGLE, domElement);
            break;
          case 'input':
            initWrapperState(domElement, rawProps),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, 'onChange');
            break;
          case 'option':
            validateProps(domElement, rawProps);
            break;
          case 'select':
            initWrapperState$1(domElement, rawProps),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, 'onChange');
            break;
          case 'textarea':
            initWrapperState$2(domElement, rawProps),
              trapBubbledEvent(TOP_INVALID, domElement),
              ensureListeningTo(rootContainerElement, 'onChange');
            break;
        }
        assertValidProps(tag, rawProps);
        {
          extraAttributeNames = new Set();
          for (
            let { attributes } = domElement, _i = 0;
            _i < attributes.length;
            _i++
          ) {
            const name = attributes[_i].name.toLowerCase();
            switch (name) {
              case 'data-reactroot':
                break;
              case 'value':
                break;
              case 'checked':
                break;
              case 'selected':
                break;
              default:
                extraAttributeNames.add(attributes[_i].name);
            }
          }
        }
        let updatePayload = null;
        for (const propKey in rawProps)
          if (rawProps.hasOwnProperty(propKey)) {
            const nextProp = rawProps[propKey];
            if (propKey === CHILDREN)
              typeof nextProp === 'string'
                ? domElement.textContent !== nextProp &&
                  (suppressHydrationWarning ||
                    warnForTextDifference(domElement.textContent, nextProp),
                  (updatePayload = [CHILDREN, nextProp]))
                : typeof nextProp === 'number' &&
                  domElement.textContent !== `${nextProp}` &&
                  (suppressHydrationWarning ||
                    warnForTextDifference(domElement.textContent, nextProp),
                  (updatePayload = [CHILDREN, `${nextProp}`]));
            else if (registrationNameModules.hasOwnProperty(propKey))
              nextProp != null &&
                (typeof nextProp !== 'function' &&
                  warnForInvalidEventListener(propKey, nextProp),
                ensureListeningTo(rootContainerElement, propKey));
            else if (typeof isCustomComponentTag === 'boolean') {
              let serverValue = void 0;
              const propertyInfo = getPropertyInfo(propKey);
              if (!suppressHydrationWarning) {
                if (
                  !(
                    propKey === SUPPRESS_CONTENT_EDITABLE_WARNING ||
                    propKey === SUPPRESS_HYDRATION_WARNING ||
                    propKey === 'value' ||
                    propKey === 'checked' ||
                    propKey === 'selected'
                  )
                ) {
                  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
                    const serverHTML = domElement.innerHTML;
                    const nextHtml = nextProp ? nextProp[HTML$1] : void 0;
                    const expectedHTML = normalizeHTML(
                      domElement,
                      nextHtml ?? ''
                    );
                    expectedHTML !== serverHTML &&
                      warnForPropDifference(propKey, serverHTML, expectedHTML);
                  } else if (propKey === STYLE) {
                    if (
                      (extraAttributeNames.delete(propKey),
                      canDiffStyleForHydrationWarning)
                    ) {
                      const expectedStyle =
                        createDangerousStringForStyles(nextProp);
                      (serverValue = domElement.getAttribute('style')),
                        expectedStyle !== serverValue &&
                          warnForPropDifference(
                            propKey,
                            serverValue,
                            expectedStyle
                          );
                    }
                  } else if (isCustomComponentTag)
                    extraAttributeNames.delete(propKey.toLowerCase()),
                      (serverValue = getValueForAttribute(
                        domElement,
                        propKey,
                        nextProp
                      )),
                      nextProp !== serverValue &&
                        warnForPropDifference(propKey, serverValue, nextProp);
                  else if (
                    !shouldIgnoreAttribute(
                      propKey,
                      propertyInfo,
                      isCustomComponentTag
                    ) &&
                    !shouldRemoveAttribute(
                      propKey,
                      nextProp,
                      propertyInfo,
                      isCustomComponentTag
                    )
                  ) {
                    let isMismatchDueToBadCasing = !1;
                    if (propertyInfo !== null)
                      extraAttributeNames.delete(propertyInfo.attributeName),
                        (serverValue = getValueForProperty(
                          domElement,
                          propKey,
                          nextProp,
                          propertyInfo
                        ));
                    else {
                      let ownNamespace = parentNamespace;
                      if (
                        (ownNamespace === HTML_NAMESPACE$1 &&
                          (ownNamespace = getIntrinsicNamespace(tag)),
                        ownNamespace === HTML_NAMESPACE$1)
                      )
                        extraAttributeNames.delete(propKey.toLowerCase());
                      else {
                        const standardName = getPossibleStandardName(propKey);
                        standardName !== null &&
                          standardName !== propKey &&
                          ((isMismatchDueToBadCasing = !0),
                          extraAttributeNames.delete(standardName)),
                          extraAttributeNames.delete(propKey);
                      }
                      serverValue = getValueForAttribute(
                        domElement,
                        propKey,
                        nextProp
                      );
                    }
                    nextProp !== serverValue &&
                      !isMismatchDueToBadCasing &&
                      warnForPropDifference(propKey, serverValue, nextProp);
                  }
                }
              }
            }
          }
        switch (
          (extraAttributeNames.size > 0 &&
            !suppressHydrationWarning &&
            warnForExtraAttributes(extraAttributeNames),
          tag)
        ) {
          case 'input':
            track(domElement), postMountWrapper(domElement, rawProps, !0);
            break;
          case 'textarea':
            track(domElement), postMountWrapper$3(domElement);
            break;
          case 'select':
          case 'option':
            break;
          default:
            typeof rawProps.onClick === 'function' &&
              trapClickOnNonInteractiveElement(domElement);
            break;
        }
        return updatePayload;
      }
      function diffHydratedText(textNode, text) {
        const isDifferent = textNode.nodeValue !== text;
        return isDifferent;
      }
      function warnForUnmatchedText(textNode, text) {
        warnForTextDifference(textNode.nodeValue, text);
      }
      function warnForDeletedHydratableElement(parentNode, child) {
        {
          if (didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error(
              'Did not expect server HTML to contain a <%s> in <%s>.',
              child.nodeName.toLowerCase(),
              parentNode.nodeName.toLowerCase()
            );
        }
      }
      function warnForDeletedHydratableText(parentNode, child) {
        {
          if (didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error(
              'Did not expect server HTML to contain the text node "%s" in <%s>.',
              child.nodeValue,
              parentNode.nodeName.toLowerCase()
            );
        }
      }
      function warnForInsertedHydratedElement(parentNode, tag, props) {
        {
          if (didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error(
              'Expected server HTML to contain a matching <%s> in <%s>.',
              tag,
              parentNode.nodeName.toLowerCase()
            );
        }
      }
      function warnForInsertedHydratedText(parentNode, text) {
        {
          if (text === '' || didWarnInvalidHydration) return;
          (didWarnInvalidHydration = !0),
            error(
              'Expected server HTML to contain a matching text node for "%s" in <%s>.',
              text,
              parentNode.nodeName.toLowerCase()
            );
        }
      }
      function restoreControlledState$3(domElement, tag, props) {
        switch (tag) {
          case 'input':
            restoreControlledState(domElement, props);
            return;
          case 'textarea':
            restoreControlledState$2(domElement, props);
            return;
          case 'select':
            restoreControlledState$1(domElement, props);
        }
      }
      function getActiveElement(doc) {
        if (
          ((doc = doc || (typeof document < 'u' ? document : void 0)),
          typeof doc > 'u')
        )
          return null;
        try {
          return doc.activeElement || doc.body;
        } catch {
          return doc.body;
        }
      }
      function getLeafNode(node) {
        for (; node && node.firstChild; ) node = node.firstChild;
        return node;
      }
      function getSiblingNode(node) {
        for (; node; ) {
          if (node.nextSibling) return node.nextSibling;
          node = node.parentNode;
        }
      }
      function getNodeForCharacterOffset(root2, offset2) {
        for (
          let node = getLeafNode(root2), nodeStart = 0, nodeEnd = 0;
          node;

        ) {
          if (node.nodeType === TEXT_NODE) {
            if (
              ((nodeEnd = nodeStart + node.textContent.length),
              nodeStart <= offset2 && nodeEnd >= offset2)
            )
              return { node, offset: offset2 - nodeStart };
            nodeStart = nodeEnd;
          }
          node = getLeafNode(getSiblingNode(node));
        }
      }
      function getOffsets(outerNode) {
        const { ownerDocument } = outerNode;
        const win = (ownerDocument && ownerDocument.defaultView) || window;
        const selection = win.getSelection && win.getSelection();
        if (!selection || selection.rangeCount === 0) return null;
        const { anchorNode } = selection;
        const { anchorOffset } = selection;
        const { focusNode } = selection;
        const { focusOffset } = selection;
        try {
          anchorNode.nodeType, focusNode.nodeType;
        } catch {
          return null;
        }
        return getModernOffsetsFromPoints(
          outerNode,
          anchorNode,
          anchorOffset,
          focusNode,
          focusOffset
        );
      }
      function getModernOffsetsFromPoints(
        outerNode,
        anchorNode,
        anchorOffset,
        focusNode,
        focusOffset
      ) {
        let length = 0;
        let start2 = -1;
        let end2 = -1;
        let indexWithinAnchor = 0;
        let indexWithinFocus = 0;
        let node = outerNode;
        let parentNode = null;
        outer: for (;;) {
          for (
            var next = null;
            node === anchorNode &&
              (anchorOffset === 0 || node.nodeType === TEXT_NODE) &&
              (start2 = length + anchorOffset),
              node === focusNode &&
                (focusOffset === 0 || node.nodeType === TEXT_NODE) &&
                (end2 = length + focusOffset),
              node.nodeType === TEXT_NODE && (length += node.nodeValue.length),
              (next = node.firstChild) !== null;

          )
            (parentNode = node), (node = next);
          for (;;) {
            if (node === outerNode) break outer;
            if (
              (parentNode === anchorNode &&
                ++indexWithinAnchor === anchorOffset &&
                (start2 = length),
              parentNode === focusNode &&
                ++indexWithinFocus === focusOffset &&
                (end2 = length),
              (next = node.nextSibling) !== null)
            )
              break;
            (node = parentNode), (parentNode = node.parentNode);
          }
          node = next;
        }
        return start2 === -1 || end2 === -1
          ? null
          : { start: start2, end: end2 };
      }
      function setOffsets(node, offsets) {
        const doc = node.ownerDocument || document;
        const win = (doc && doc.defaultView) || window;
        if (win.getSelection) {
          const selection = win.getSelection();
          const { length } = node.textContent;
          let start2 = Math.min(offsets.start, length);
          let end2 =
            offsets.end === void 0 ? start2 : Math.min(offsets.end, length);
          if (!selection.extend && start2 > end2) {
            const temp = end2;
            (end2 = start2), (start2 = temp);
          }
          const startMarker = getNodeForCharacterOffset(node, start2);
          const endMarker = getNodeForCharacterOffset(node, end2);
          if (startMarker && endMarker) {
            if (
              selection.rangeCount === 1 &&
              selection.anchorNode === startMarker.node &&
              selection.anchorOffset === startMarker.offset &&
              selection.focusNode === endMarker.node &&
              selection.focusOffset === endMarker.offset
            )
              return;
            const range = doc.createRange();
            range.setStart(startMarker.node, startMarker.offset),
              selection.removeAllRanges(),
              start2 > end2
                ? (selection.addRange(range),
                  selection.extend(endMarker.node, endMarker.offset))
                : (range.setEnd(endMarker.node, endMarker.offset),
                  selection.addRange(range));
          }
        }
      }
      function isTextNode(node) {
        return node && node.nodeType === TEXT_NODE;
      }
      function containsNode(outerNode, innerNode) {
        return !outerNode || !innerNode
          ? !1
          : outerNode === innerNode
          ? !0
          : isTextNode(outerNode)
          ? !1
          : isTextNode(innerNode)
          ? containsNode(outerNode, innerNode.parentNode)
          : 'contains' in outerNode
          ? outerNode.contains(innerNode)
          : outerNode.compareDocumentPosition
          ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
          : !1;
      }
      function isInDocument(node) {
        return (
          node &&
          node.ownerDocument &&
          containsNode(node.ownerDocument.documentElement, node)
        );
      }
      function isSameOriginFrame(iframe) {
        try {
          return typeof iframe.contentWindow.location.href === 'string';
        } catch {
          return !1;
        }
      }
      function getActiveElementDeep() {
        for (
          var win = window, element = getActiveElement();
          element instanceof win.HTMLIFrameElement;

        ) {
          if (isSameOriginFrame(element)) win = element.contentWindow;
          else return element;
          element = getActiveElement(win.document);
        }
        return element;
      }
      function hasSelectionCapabilities(elem) {
        const nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return (
          nodeName &&
          ((nodeName === 'input' &&
            (elem.type === 'text' ||
              elem.type === 'search' ||
              elem.type === 'tel' ||
              elem.type === 'url' ||
              elem.type === 'password')) ||
            nodeName === 'textarea' ||
            elem.contentEditable === 'true')
        );
      }
      function getSelectionInformation() {
        const focusedElem = getActiveElementDeep();
        return {
          activeElementDetached: null,
          focusedElem,
          selectionRange: hasSelectionCapabilities(focusedElem)
            ? getSelection(focusedElem)
            : null,
        };
      }
      function restoreSelection(priorSelectionInformation) {
        const curFocusedElem = getActiveElementDeep();
        const priorFocusedElem = priorSelectionInformation.focusedElem;
        const priorSelectionRange = priorSelectionInformation.selectionRange;
        if (
          curFocusedElem !== priorFocusedElem &&
          isInDocument(priorFocusedElem)
        ) {
          priorSelectionRange !== null &&
            hasSelectionCapabilities(priorFocusedElem) &&
            setSelection(priorFocusedElem, priorSelectionRange);
          for (
            var ancestors = [], ancestor = priorFocusedElem;
            (ancestor = ancestor.parentNode);

          )
            ancestor.nodeType === ELEMENT_NODE &&
              ancestors.push({
                element: ancestor,
                left: ancestor.scrollLeft,
                top: ancestor.scrollTop,
              });
          typeof priorFocusedElem.focus === 'function' &&
            priorFocusedElem.focus();
          for (let i = 0; i < ancestors.length; i++) {
            const info = ancestors[i];
            (info.element.scrollLeft = info.left),
              (info.element.scrollTop = info.top);
          }
        }
      }
      function getSelection(input) {
        let selection;
        return (
          'selectionStart' in input
            ? (selection = {
                start: input.selectionStart,
                end: input.selectionEnd,
              })
            : (selection = getOffsets(input)),
          selection || { start: 0, end: 0 }
        );
      }
      function setSelection(input, offsets) {
        const start2 = offsets.start;
        let end2 = offsets.end;
        end2 === void 0 && (end2 = start2),
          'selectionStart' in input
            ? ((input.selectionStart = start2),
              (input.selectionEnd = Math.min(end2, input.value.length)))
            : setOffsets(input, offsets);
      }
      let validateDOMNesting = function () {};
      let updatedAncestorInfo = function () {};
      {
        const specialTags = [
          'address',
          'applet',
          'area',
          'article',
          'aside',
          'base',
          'basefont',
          'bgsound',
          'blockquote',
          'body',
          'br',
          'button',
          'caption',
          'center',
          'col',
          'colgroup',
          'dd',
          'details',
          'dir',
          'div',
          'dl',
          'dt',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'frame',
          'frameset',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'iframe',
          'img',
          'input',
          'isindex',
          'li',
          'link',
          'listing',
          'main',
          'marquee',
          'menu',
          'menuitem',
          'meta',
          'nav',
          'noembed',
          'noframes',
          'noscript',
          'object',
          'ol',
          'p',
          'param',
          'plaintext',
          'pre',
          'script',
          'section',
          'select',
          'source',
          'style',
          'summary',
          'table',
          'tbody',
          'td',
          'template',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'title',
          'tr',
          'track',
          'ul',
          'wbr',
          'xmp',
        ];
        const inScopeTags = [
          'applet',
          'caption',
          'html',
          'table',
          'td',
          'th',
          'marquee',
          'object',
          'template',
          'foreignObject',
          'desc',
          'title',
        ];
        const buttonScopeTags = inScopeTags.concat(['button']);
        const impliedEndTags = [
          'dd',
          'dt',
          'li',
          'option',
          'optgroup',
          'p',
          'rp',
          'rt',
        ];
        const emptyAncestorInfo = {
          current: null,
          formTag: null,
          aTagInScope: null,
          buttonTagInScope: null,
          nobrTagInScope: null,
          pTagInButtonScope: null,
          listItemTagAutoclosing: null,
          dlItemTagAutoclosing: null,
        };
        updatedAncestorInfo = function (oldInfo, tag) {
          const ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
          const info = { tag };
          return (
            inScopeTags.indexOf(tag) !== -1 &&
              ((ancestorInfo.aTagInScope = null),
              (ancestorInfo.buttonTagInScope = null),
              (ancestorInfo.nobrTagInScope = null)),
            buttonScopeTags.indexOf(tag) !== -1 &&
              (ancestorInfo.pTagInButtonScope = null),
            specialTags.indexOf(tag) !== -1 &&
              tag !== 'address' &&
              tag !== 'div' &&
              tag !== 'p' &&
              ((ancestorInfo.listItemTagAutoclosing = null),
              (ancestorInfo.dlItemTagAutoclosing = null)),
            (ancestorInfo.current = info),
            tag === 'form' && (ancestorInfo.formTag = info),
            tag === 'a' && (ancestorInfo.aTagInScope = info),
            tag === 'button' && (ancestorInfo.buttonTagInScope = info),
            tag === 'nobr' && (ancestorInfo.nobrTagInScope = info),
            tag === 'p' && (ancestorInfo.pTagInButtonScope = info),
            tag === 'li' && (ancestorInfo.listItemTagAutoclosing = info),
            (tag === 'dd' || tag === 'dt') &&
              (ancestorInfo.dlItemTagAutoclosing = info),
            ancestorInfo
          );
        };
        const isTagValidWithParent = function (tag, parentTag) {
          switch (parentTag) {
            case 'select':
              return tag === 'option' || tag === 'optgroup' || tag === '#text';
            case 'optgroup':
              return tag === 'option' || tag === '#text';
            case 'option':
              return tag === '#text';
            case 'tr':
              return (
                tag === 'th' ||
                tag === 'td' ||
                tag === 'style' ||
                tag === 'script' ||
                tag === 'template'
              );
            case 'tbody':
            case 'thead':
            case 'tfoot':
              return (
                tag === 'tr' ||
                tag === 'style' ||
                tag === 'script' ||
                tag === 'template'
              );
            case 'colgroup':
              return tag === 'col' || tag === 'template';
            case 'table':
              return (
                tag === 'caption' ||
                tag === 'colgroup' ||
                tag === 'tbody' ||
                tag === 'tfoot' ||
                tag === 'thead' ||
                tag === 'style' ||
                tag === 'script' ||
                tag === 'template'
              );
            case 'head':
              return (
                tag === 'base' ||
                tag === 'basefont' ||
                tag === 'bgsound' ||
                tag === 'link' ||
                tag === 'meta' ||
                tag === 'title' ||
                tag === 'noscript' ||
                tag === 'noframes' ||
                tag === 'style' ||
                tag === 'script' ||
                tag === 'template'
              );
            case 'html':
              return tag === 'head' || tag === 'body' || tag === 'frameset';
            case 'frameset':
              return tag === 'frame';
            case '#document':
              return tag === 'html';
          }
          switch (tag) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
              return (
                parentTag !== 'h1' &&
                parentTag !== 'h2' &&
                parentTag !== 'h3' &&
                parentTag !== 'h4' &&
                parentTag !== 'h5' &&
                parentTag !== 'h6'
              );
            case 'rp':
            case 'rt':
              return impliedEndTags.indexOf(parentTag) === -1;
            case 'body':
            case 'caption':
            case 'col':
            case 'colgroup':
            case 'frameset':
            case 'frame':
            case 'head':
            case 'html':
            case 'tbody':
            case 'td':
            case 'tfoot':
            case 'th':
            case 'thead':
            case 'tr':
              return parentTag == null;
          }
          return !0;
        };
        const findInvalidAncestorForTag = function (tag, ancestorInfo) {
          switch (tag) {
            case 'address':
            case 'article':
            case 'aside':
            case 'blockquote':
            case 'center':
            case 'details':
            case 'dialog':
            case 'dir':
            case 'div':
            case 'dl':
            case 'fieldset':
            case 'figcaption':
            case 'figure':
            case 'footer':
            case 'header':
            case 'hgroup':
            case 'main':
            case 'menu':
            case 'nav':
            case 'ol':
            case 'p':
            case 'section':
            case 'summary':
            case 'ul':
            case 'pre':
            case 'listing':
            case 'table':
            case 'hr':
            case 'xmp':
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
              return ancestorInfo.pTagInButtonScope;
            case 'form':
              return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
            case 'li':
              return ancestorInfo.listItemTagAutoclosing;
            case 'dd':
            case 'dt':
              return ancestorInfo.dlItemTagAutoclosing;
            case 'button':
              return ancestorInfo.buttonTagInScope;
            case 'a':
              return ancestorInfo.aTagInScope;
            case 'nobr':
              return ancestorInfo.nobrTagInScope;
          }
          return null;
        };
        const didWarn$1 = {};
        validateDOMNesting = function (childTag, childText, ancestorInfo) {
          ancestorInfo = ancestorInfo || emptyAncestorInfo;
          const parentInfo = ancestorInfo.current;
          const parentTag = parentInfo && parentInfo.tag;
          childText != null &&
            (childTag != null &&
              error(
                'validateDOMNesting: when childText is passed, childTag should be null'
              ),
            (childTag = '#text'));
          const invalidParent = isTagValidWithParent(childTag, parentTag)
            ? null
            : parentInfo;
          const invalidAncestor = invalidParent
            ? null
            : findInvalidAncestorForTag(childTag, ancestorInfo);
          const invalidParentOrAncestor = invalidParent || invalidAncestor;
          if (invalidParentOrAncestor) {
            const ancestorTag = invalidParentOrAncestor.tag;
            const addendum = getCurrentFiberStackInDev();
            const warnKey = `${!!invalidParent}|${childTag}|${ancestorTag}|${addendum}`;
            if (!didWarn$1[warnKey]) {
              didWarn$1[warnKey] = !0;
              let tagDisplayName = childTag;
              let whitespaceInfo = '';
              if (
                (childTag === '#text'
                  ? /\S/.test(childText)
                    ? (tagDisplayName = 'Text nodes')
                    : ((tagDisplayName = 'Whitespace text nodes'),
                      (whitespaceInfo =
                        " Make sure you don't have any extra whitespace between tags on each line of your source code."))
                  : (tagDisplayName = `<${childTag}>`),
                invalidParent)
              ) {
                let info = '';
                ancestorTag === 'table' &&
                  childTag === 'tr' &&
                  (info +=
                    ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
                  error(
                    'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                    tagDisplayName,
                    ancestorTag,
                    whitespaceInfo,
                    info
                  );
              } else
                error(
                  'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
                  tagDisplayName,
                  ancestorTag
                );
            }
          }
        };
      }
      let SUPPRESS_HYDRATION_WARNING$1;
      SUPPRESS_HYDRATION_WARNING$1 = 'suppressHydrationWarning';
      const SUSPENSE_START_DATA = '$';
      const SUSPENSE_END_DATA = '/$';
      const SUSPENSE_PENDING_START_DATA = '$?';
      const SUSPENSE_FALLBACK_START_DATA = '$!';
      const STYLE$1 = 'style';
      let eventsEnabled = null;
      let selectionInformation = null;
      function shouldAutoFocusHostComponent(type, props) {
        switch (type) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!props.autoFocus;
        }
        return !1;
      }
      function getRootHostContext(rootContainerInstance) {
        let type;
        let namespace;
        const { nodeType } = rootContainerInstance;
        switch (nodeType) {
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE: {
            type = nodeType === DOCUMENT_NODE ? '#document' : '#fragment';
            const root2 = rootContainerInstance.documentElement;
            namespace = root2
              ? root2.namespaceURI
              : getChildNamespace(null, '');
            break;
          }
          default: {
            const container =
              nodeType === COMMENT_NODE
                ? rootContainerInstance.parentNode
                : rootContainerInstance;
            const ownNamespace = container.namespaceURI || null;
            (type = container.tagName),
              (namespace = getChildNamespace(ownNamespace, type));
            break;
          }
        }
        {
          const validatedTag = type.toLowerCase();
          const ancestorInfo = updatedAncestorInfo(null, validatedTag);
          return { namespace, ancestorInfo };
        }
      }
      function getChildHostContext(
        parentHostContext,
        type,
        rootContainerInstance
      ) {
        {
          const parentHostContextDev = parentHostContext;
          const namespace = getChildNamespace(
            parentHostContextDev.namespace,
            type
          );
          const ancestorInfo = updatedAncestorInfo(
            parentHostContextDev.ancestorInfo,
            type
          );
          return { namespace, ancestorInfo };
        }
      }
      function getPublicInstance(instance) {
        return instance;
      }
      function prepareForCommit(containerInfo) {
        (eventsEnabled = isEnabled()),
          (selectionInformation = getSelectionInformation()),
          setEnabled(!1);
      }
      function resetAfterCommit(containerInfo) {
        restoreSelection(selectionInformation),
          setEnabled(eventsEnabled),
          (eventsEnabled = null),
          (selectionInformation = null);
      }
      function createInstance(
        type,
        props,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle
      ) {
        let parentNamespace;
        {
          const hostContextDev = hostContext;
          if (
            (validateDOMNesting(type, null, hostContextDev.ancestorInfo),
            typeof props.children === 'string' ||
              typeof props.children === 'number')
          ) {
            const string = `${props.children}`;
            const ownAncestorInfo = updatedAncestorInfo(
              hostContextDev.ancestorInfo,
              type
            );
            validateDOMNesting(null, string, ownAncestorInfo);
          }
          parentNamespace = hostContextDev.namespace;
        }
        const domElement = createElement(
          type,
          props,
          rootContainerInstance,
          parentNamespace
        );
        return (
          precacheFiberNode(internalInstanceHandle, domElement),
          updateFiberProps(domElement, props),
          domElement
        );
      }
      function appendInitialChild(parentInstance, child) {
        parentInstance.appendChild(child);
      }
      function finalizeInitialChildren(
        domElement,
        type,
        props,
        rootContainerInstance,
        hostContext
      ) {
        return (
          setInitialProperties(domElement, type, props, rootContainerInstance),
          shouldAutoFocusHostComponent(type, props)
        );
      }
      function prepareUpdate(
        domElement,
        type,
        oldProps,
        newProps,
        rootContainerInstance,
        hostContext
      ) {
        {
          const hostContextDev = hostContext;
          if (
            typeof newProps.children !== typeof oldProps.children &&
            (typeof newProps.children === 'string' ||
              typeof newProps.children === 'number')
          ) {
            const string = `${newProps.children}`;
            const ownAncestorInfo = updatedAncestorInfo(
              hostContextDev.ancestorInfo,
              type
            );
            validateDOMNesting(null, string, ownAncestorInfo);
          }
        }
        return diffProperties(
          domElement,
          type,
          oldProps,
          newProps,
          rootContainerInstance
        );
      }
      function shouldSetTextContent(type, props) {
        return (
          type === 'textarea' ||
          type === 'option' ||
          type === 'noscript' ||
          typeof props.children === 'string' ||
          typeof props.children === 'number' ||
          (typeof props.dangerouslySetInnerHTML === 'object' &&
            props.dangerouslySetInnerHTML !== null &&
            props.dangerouslySetInnerHTML.__html != null)
        );
      }
      function shouldDeprioritizeSubtree(type, props) {
        return !!props.hidden;
      }
      function createTextInstance(
        text,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle
      ) {
        {
          const hostContextDev = hostContext;
          validateDOMNesting(null, text, hostContextDev.ancestorInfo);
        }
        const textNode = createTextNode(text, rootContainerInstance);
        return precacheFiberNode(internalInstanceHandle, textNode), textNode;
      }
      const scheduleTimeout =
        typeof setTimeout === 'function' ? setTimeout : void 0;
      const cancelTimeout =
        typeof clearTimeout === 'function' ? clearTimeout : void 0;
      const noTimeout = -1;
      function commitMount(domElement, type, newProps, internalInstanceHandle) {
        shouldAutoFocusHostComponent(type, newProps) && domElement.focus();
      }
      function commitUpdate(
        domElement,
        updatePayload,
        type,
        oldProps,
        newProps,
        internalInstanceHandle
      ) {
        updateFiberProps(domElement, newProps),
          updateProperties(domElement, updatePayload, type, oldProps, newProps);
      }
      function resetTextContent(domElement) {
        setTextContent(domElement, '');
      }
      function commitTextUpdate(textInstance, oldText, newText) {
        textInstance.nodeValue = newText;
      }
      function appendChild(parentInstance, child) {
        parentInstance.appendChild(child);
      }
      function appendChildToContainer(container, child) {
        let parentNode;
        container.nodeType === COMMENT_NODE
          ? ((parentNode = container.parentNode),
            parentNode.insertBefore(child, container))
          : ((parentNode = container), parentNode.appendChild(child));
        const reactRootContainer = container._reactRootContainer;
        reactRootContainer == null &&
          parentNode.onclick === null &&
          trapClickOnNonInteractiveElement(parentNode);
      }
      function insertBefore(parentInstance, child, beforeChild) {
        parentInstance.insertBefore(child, beforeChild);
      }
      function insertInContainerBefore(container, child, beforeChild) {
        container.nodeType === COMMENT_NODE
          ? container.parentNode.insertBefore(child, beforeChild)
          : container.insertBefore(child, beforeChild);
      }
      function removeChild(parentInstance, child) {
        parentInstance.removeChild(child);
      }
      function removeChildFromContainer(container, child) {
        container.nodeType === COMMENT_NODE
          ? container.parentNode.removeChild(child)
          : container.removeChild(child);
      }
      function hideInstance(instance) {
        instance = instance;
        const style2 = instance.style;
        typeof style2.setProperty === 'function'
          ? style2.setProperty('display', 'none', 'important')
          : (style2.display = 'none');
      }
      function hideTextInstance(textInstance) {
        textInstance.nodeValue = '';
      }
      function unhideInstance(instance, props) {
        instance = instance;
        const styleProp = props[STYLE$1];
        const display =
          styleProp != null && styleProp.hasOwnProperty('display')
            ? styleProp.display
            : null;
        instance.style.display = dangerousStyleValue('display', display);
      }
      function unhideTextInstance(textInstance, text) {
        textInstance.nodeValue = text;
      }
      function canHydrateInstance(instance, type, props) {
        return instance.nodeType !== ELEMENT_NODE ||
          type.toLowerCase() !== instance.nodeName.toLowerCase()
          ? null
          : instance;
      }
      function canHydrateTextInstance(instance, text) {
        return text === '' || instance.nodeType !== TEXT_NODE ? null : instance;
      }
      function isSuspenseInstancePending(instance) {
        return instance.data === SUSPENSE_PENDING_START_DATA;
      }
      function isSuspenseInstanceFallback(instance) {
        return instance.data === SUSPENSE_FALLBACK_START_DATA;
      }
      function getNextHydratable(node) {
        for (; node != null; node = node.nextSibling) {
          const { nodeType } = node;
          if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) break;
        }
        return node;
      }
      function getNextHydratableSibling(instance) {
        return getNextHydratable(instance.nextSibling);
      }
      function getFirstHydratableChild(parentInstance) {
        return getNextHydratable(parentInstance.firstChild);
      }
      function hydrateInstance(
        instance,
        type,
        props,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle
      ) {
        precacheFiberNode(internalInstanceHandle, instance),
          updateFiberProps(instance, props);
        let parentNamespace;
        {
          const hostContextDev = hostContext;
          parentNamespace = hostContextDev.namespace;
        }
        return diffHydratedProperties(
          instance,
          type,
          props,
          parentNamespace,
          rootContainerInstance
        );
      }
      function hydrateTextInstance(textInstance, text, internalInstanceHandle) {
        return (
          precacheFiberNode(internalInstanceHandle, textInstance),
          diffHydratedText(textInstance, text)
        );
      }
      function getNextHydratableInstanceAfterSuspenseInstance(
        suspenseInstance
      ) {
        for (let node = suspenseInstance.nextSibling, depth = 0; node; ) {
          if (node.nodeType === COMMENT_NODE) {
            const { data } = node;
            if (data === SUSPENSE_END_DATA) {
              if (depth === 0) return getNextHydratableSibling(node);
              depth--;
            } else
              (data === SUSPENSE_START_DATA ||
                data === SUSPENSE_FALLBACK_START_DATA ||
                data === SUSPENSE_PENDING_START_DATA) &&
                depth++;
          }
          node = node.nextSibling;
        }
        return null;
      }
      function getParentSuspenseInstance(targetInstance) {
        for (let node = targetInstance.previousSibling, depth = 0; node; ) {
          if (node.nodeType === COMMENT_NODE) {
            const { data } = node;
            if (
              data === SUSPENSE_START_DATA ||
              data === SUSPENSE_FALLBACK_START_DATA ||
              data === SUSPENSE_PENDING_START_DATA
            ) {
              if (depth === 0) return node;
              depth--;
            } else data === SUSPENSE_END_DATA && depth++;
          }
          node = node.previousSibling;
        }
        return null;
      }
      function commitHydratedContainer(container) {
        retryIfBlockedOn(container);
      }
      function commitHydratedSuspenseInstance(suspenseInstance) {
        retryIfBlockedOn(suspenseInstance);
      }
      function didNotMatchHydratedContainerTextInstance(
        parentContainer,
        textInstance,
        text
      ) {
        warnForUnmatchedText(textInstance, text);
      }
      function didNotMatchHydratedTextInstance(
        parentType,
        parentProps,
        parentInstance,
        textInstance,
        text
      ) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 &&
          warnForUnmatchedText(textInstance, text);
      }
      function didNotHydrateContainerInstance(parentContainer, instance) {
        instance.nodeType === ELEMENT_NODE
          ? warnForDeletedHydratableElement(parentContainer, instance)
          : instance.nodeType === COMMENT_NODE ||
            warnForDeletedHydratableText(parentContainer, instance);
      }
      function didNotHydrateInstance(
        parentType,
        parentProps,
        parentInstance,
        instance
      ) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 &&
          (instance.nodeType === ELEMENT_NODE
            ? warnForDeletedHydratableElement(parentInstance, instance)
            : instance.nodeType === COMMENT_NODE ||
              warnForDeletedHydratableText(parentInstance, instance));
      }
      function didNotFindHydratableContainerInstance(
        parentContainer,
        type,
        props
      ) {
        warnForInsertedHydratedElement(parentContainer, type);
      }
      function didNotFindHydratableContainerTextInstance(
        parentContainer,
        text
      ) {
        warnForInsertedHydratedText(parentContainer, text);
      }
      function didNotFindHydratableInstance(
        parentType,
        parentProps,
        parentInstance,
        type,
        props
      ) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 &&
          warnForInsertedHydratedElement(parentInstance, type);
      }
      function didNotFindHydratableTextInstance(
        parentType,
        parentProps,
        parentInstance,
        text
      ) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1] !== !0 &&
          warnForInsertedHydratedText(parentInstance, text);
      }
      function didNotFindHydratableSuspenseInstance(
        parentType,
        parentProps,
        parentInstance
      ) {
        parentProps[SUPPRESS_HYDRATION_WARNING$1];
      }
      const randomKey = Math.random().toString(36).slice(2);
      const internalInstanceKey = `__reactInternalInstance$${randomKey}`;
      const internalEventHandlersKey = `__reactEventHandlers$${randomKey}`;
      const internalContainerInstanceKey = `__reactContainere$${randomKey}`;
      function precacheFiberNode(hostInst, node) {
        node[internalInstanceKey] = hostInst;
      }
      function markContainerAsRoot(hostRoot, node) {
        node[internalContainerInstanceKey] = hostRoot;
      }
      function unmarkContainerAsRoot(node) {
        node[internalContainerInstanceKey] = null;
      }
      function isContainerMarkedAsRoot(node) {
        return !!node[internalContainerInstanceKey];
      }
      function getClosestInstanceFromNode(targetNode) {
        let targetInst = targetNode[internalInstanceKey];
        if (targetInst) return targetInst;
        for (let { parentNode } = targetNode; parentNode; ) {
          if (
            ((targetInst =
              parentNode[internalContainerInstanceKey] ||
              parentNode[internalInstanceKey]),
            targetInst)
          ) {
            const { alternate } = targetInst;
            if (
              targetInst.child !== null ||
              (alternate !== null && alternate.child !== null)
            )
              for (
                let suspenseInstance = getParentSuspenseInstance(targetNode);
                suspenseInstance !== null;

              ) {
                const targetSuspenseInst =
                  suspenseInstance[internalInstanceKey];
                if (targetSuspenseInst) return targetSuspenseInst;
                suspenseInstance = getParentSuspenseInstance(suspenseInstance);
              }
            return targetInst;
          }
          (targetNode = parentNode), (parentNode = targetNode.parentNode);
        }
        return null;
      }
      function getInstanceFromNode$1(node) {
        const inst =
          node[internalInstanceKey] || node[internalContainerInstanceKey];
        return inst &&
          (inst.tag === HostComponent ||
            inst.tag === HostText ||
            inst.tag === SuspenseComponent ||
            inst.tag === HostRoot)
          ? inst
          : null;
      }
      function getNodeFromInstance$1(inst) {
        if (inst.tag === HostComponent || inst.tag === HostText)
          return inst.stateNode;
        throw Error('getNodeFromInstance: Invalid argument.');
      }
      function getFiberCurrentPropsFromNode$1(node) {
        return node[internalEventHandlersKey] || null;
      }
      function updateFiberProps(node, props) {
        node[internalEventHandlersKey] = props;
      }
      function getParent(inst) {
        do inst = inst.return;
        while (inst && inst.tag !== HostComponent);
        return inst || null;
      }
      function getLowestCommonAncestor(instA, instB) {
        for (var depthA = 0, tempA = instA; tempA; tempA = getParent(tempA))
          depthA++;
        for (var depthB = 0, tempB = instB; tempB; tempB = getParent(tempB))
          depthB++;
        for (; depthA - depthB > 0; ) (instA = getParent(instA)), depthA--;
        for (; depthB - depthA > 0; ) (instB = getParent(instB)), depthB--;
        for (let depth = depthA; depth--; ) {
          if (instA === instB || instA === instB.alternate) return instA;
          (instA = getParent(instA)), (instB = getParent(instB));
        }
        return null;
      }
      function traverseTwoPhase(inst, fn, arg) {
        for (var path = []; inst; ) path.push(inst), (inst = getParent(inst));
        let i;
        for (i = path.length; i-- > 0; ) fn(path[i], 'captured', arg);
        for (i = 0; i < path.length; i++) fn(path[i], 'bubbled', arg);
      }
      function traverseEnterLeave(from, to, fn, argFrom, argTo) {
        for (
          var common = from && to ? getLowestCommonAncestor(from, to) : null,
            pathFrom = [];
          !(!from || from === common);

        ) {
          const { alternate } = from;
          if (alternate !== null && alternate === common) break;
          pathFrom.push(from), (from = getParent(from));
        }
        for (var pathTo = []; !(!to || to === common); ) {
          const _alternate = to.alternate;
          if (_alternate !== null && _alternate === common) break;
          pathTo.push(to), (to = getParent(to));
        }
        for (let i = 0; i < pathFrom.length; i++)
          fn(pathFrom[i], 'bubbled', argFrom);
        for (let _i = pathTo.length; _i-- > 0; )
          fn(pathTo[_i], 'captured', argTo);
      }
      function isInteractive(tag) {
        return (
          tag === 'button' ||
          tag === 'input' ||
          tag === 'select' ||
          tag === 'textarea'
        );
      }
      function shouldPreventMouseEvent(name, type, props) {
        switch (name) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            return !!(props.disabled && isInteractive(type));
          default:
            return !1;
        }
      }
      function getListener(inst, registrationName) {
        let listener;
        const { stateNode } = inst;
        if (!stateNode) return null;
        const props = getFiberCurrentPropsFromNode(stateNode);
        if (
          !props ||
          ((listener = props[registrationName]),
          shouldPreventMouseEvent(registrationName, inst.type, props))
        )
          return null;
        if (!(!listener || typeof listener === 'function'))
          throw Error(
            `Expected \`${registrationName}\` listener to be a function, instead got a value of \`${typeof listener}\` type.`
          );
        return listener;
      }
      function listenerAtPhase(inst, event, propagationPhase) {
        const registrationName =
          event.dispatchConfig.phasedRegistrationNames[propagationPhase];
        return getListener(inst, registrationName);
      }
      function accumulateDirectionalDispatches(inst, phase, event) {
        inst || error('Dispatching inst must not be null');
        const listener = listenerAtPhase(inst, event, phase);
        listener &&
          ((event._dispatchListeners = accumulateInto(
            event._dispatchListeners,
            listener
          )),
          (event._dispatchInstances = accumulateInto(
            event._dispatchInstances,
            inst
          )));
      }
      function accumulateTwoPhaseDispatchesSingle(event) {
        event &&
          event.dispatchConfig.phasedRegistrationNames &&
          traverseTwoPhase(
            event._targetInst,
            accumulateDirectionalDispatches,
            event
          );
      }
      function accumulateDispatches(inst, ignoredDirection, event) {
        if (inst && event && event.dispatchConfig.registrationName) {
          const { registrationName } = event.dispatchConfig;
          const listener = getListener(inst, registrationName);
          listener &&
            ((event._dispatchListeners = accumulateInto(
              event._dispatchListeners,
              listener
            )),
            (event._dispatchInstances = accumulateInto(
              event._dispatchInstances,
              inst
            )));
        }
      }
      function accumulateDirectDispatchesSingle(event) {
        event &&
          event.dispatchConfig.registrationName &&
          accumulateDispatches(event._targetInst, null, event);
      }
      function accumulateTwoPhaseDispatches(events) {
        forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
      }
      function accumulateEnterLeaveDispatches(leave, enter, from, to) {
        traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
      }
      function accumulateDirectDispatches(events) {
        forEachAccumulated(events, accumulateDirectDispatchesSingle);
      }
      let root = null;
      let startText = null;
      let fallbackText = null;
      function initialize(nativeEventTarget) {
        return (root = nativeEventTarget), (startText = getText()), !0;
      }
      function reset() {
        (root = null), (startText = null), (fallbackText = null);
      }
      function getData() {
        if (fallbackText) return fallbackText;
        let start2;
        const startValue = startText;
        const startLength = startValue.length;
        let end2;
        const endValue = getText();
        const endLength = endValue.length;
        for (
          start2 = 0;
          start2 < startLength && startValue[start2] === endValue[start2];
          start2++
        );
        const minEnd = startLength - start2;
        for (
          end2 = 1;
          end2 <= minEnd &&
          startValue[startLength - end2] === endValue[endLength - end2];
          end2++
        );
        const sliceTail = end2 > 1 ? 1 - end2 : void 0;
        return (fallbackText = endValue.slice(start2, sliceTail)), fallbackText;
      }
      function getText() {
        return 'value' in root ? root.value : root.textContent;
      }
      const EVENT_POOL_SIZE = 10;
      const EventInterface = {
        type: null,
        target: null,
        currentTarget() {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp(event) {
          return event.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      };
      function functionThatReturnsTrue() {
        return !0;
      }
      function functionThatReturnsFalse() {
        return !1;
      }
      function SyntheticEvent(
        dispatchConfig,
        targetInst,
        nativeEvent,
        nativeEventTarget
      ) {
        delete this.nativeEvent,
          delete this.preventDefault,
          delete this.stopPropagation,
          delete this.isDefaultPrevented,
          delete this.isPropagationStopped,
          (this.dispatchConfig = dispatchConfig),
          (this._targetInst = targetInst),
          (this.nativeEvent = nativeEvent);
        const { Interface } = this.constructor;
        for (const propName in Interface)
          if (Interface.hasOwnProperty(propName)) {
            delete this[propName];
            const normalize = Interface[propName];
            normalize
              ? (this[propName] = normalize(nativeEvent))
              : propName === 'target'
              ? (this.target = nativeEventTarget)
              : (this[propName] = nativeEvent[propName]);
          }
        const defaultPrevented =
          nativeEvent.defaultPrevented != null
            ? nativeEvent.defaultPrevented
            : nativeEvent.returnValue === !1;
        return (
          defaultPrevented
            ? (this.isDefaultPrevented = functionThatReturnsTrue)
            : (this.isDefaultPrevented = functionThatReturnsFalse),
          (this.isPropagationStopped = functionThatReturnsFalse),
          this
        );
      }
      _assign(SyntheticEvent.prototype, {
        preventDefault() {
          this.defaultPrevented = !0;
          const event = this.nativeEvent;
          event &&
            (event.preventDefault
              ? event.preventDefault()
              : typeof event.returnValue !== 'unknown' &&
                (event.returnValue = !1),
            (this.isDefaultPrevented = functionThatReturnsTrue));
        },
        stopPropagation() {
          const event = this.nativeEvent;
          event &&
            (event.stopPropagation
              ? event.stopPropagation()
              : typeof event.cancelBubble !== 'unknown' &&
                (event.cancelBubble = !0),
            (this.isPropagationStopped = functionThatReturnsTrue));
        },
        persist() {
          this.isPersistent = functionThatReturnsTrue;
        },
        isPersistent: functionThatReturnsFalse,
        destructor() {
          const { Interface } = this.constructor;
          for (const propName in Interface)
            Object.defineProperty(
              this,
              propName,
              getPooledWarningPropertyDefinition(propName, Interface[propName])
            );
          (this.dispatchConfig = null),
            (this._targetInst = null),
            (this.nativeEvent = null),
            (this.isDefaultPrevented = functionThatReturnsFalse),
            (this.isPropagationStopped = functionThatReturnsFalse),
            (this._dispatchListeners = null),
            (this._dispatchInstances = null),
            Object.defineProperty(
              this,
              'nativeEvent',
              getPooledWarningPropertyDefinition('nativeEvent', null)
            ),
            Object.defineProperty(
              this,
              'isDefaultPrevented',
              getPooledWarningPropertyDefinition(
                'isDefaultPrevented',
                functionThatReturnsFalse
              )
            ),
            Object.defineProperty(
              this,
              'isPropagationStopped',
              getPooledWarningPropertyDefinition(
                'isPropagationStopped',
                functionThatReturnsFalse
              )
            ),
            Object.defineProperty(
              this,
              'preventDefault',
              getPooledWarningPropertyDefinition('preventDefault', () => {})
            ),
            Object.defineProperty(
              this,
              'stopPropagation',
              getPooledWarningPropertyDefinition('stopPropagation', () => {})
            );
        },
      }),
        (SyntheticEvent.Interface = EventInterface),
        (SyntheticEvent.extend = function (Interface) {
          const Super = this;
          const E = function () {};
          E.prototype = Super.prototype;
          const prototype = new E();
          function Class() {
            return Super.apply(this, arguments);
          }
          return (
            _assign(prototype, Class.prototype),
            (Class.prototype = prototype),
            (Class.prototype.constructor = Class),
            (Class.Interface = _assign({}, Super.Interface, Interface)),
            (Class.extend = Super.extend),
            addEventPoolingTo(Class),
            Class
          );
        }),
        addEventPoolingTo(SyntheticEvent);
      function getPooledWarningPropertyDefinition(propName, getVal) {
        const isFunction = typeof getVal === 'function';
        return { configurable: !0, set: set2, get: get2 };
        function set2(val) {
          const action = isFunction
            ? 'setting the method'
            : 'setting the property';
          return warn2(action, 'This is effectively a no-op'), val;
        }
        function get2() {
          const action = isFunction
            ? 'accessing the method'
            : 'accessing the property';
          const result = isFunction
            ? 'This is a no-op function'
            : 'This is set to null';
          return warn2(action, result), getVal;
        }
        function warn2(action, result) {
          error(
            "This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",
            action,
            propName,
            result
          );
        }
      }
      function getPooledEvent(
        dispatchConfig,
        targetInst,
        nativeEvent,
        nativeInst
      ) {
        const EventConstructor = this;
        if (EventConstructor.eventPool.length) {
          const instance = EventConstructor.eventPool.pop();
          return (
            EventConstructor.call(
              instance,
              dispatchConfig,
              targetInst,
              nativeEvent,
              nativeInst
            ),
            instance
          );
        }
        return new EventConstructor(
          dispatchConfig,
          targetInst,
          nativeEvent,
          nativeInst
        );
      }
      function releasePooledEvent(event) {
        const EventConstructor = this;
        if (!(event instanceof EventConstructor))
          throw Error(
            'Trying to release an event instance into a pool of a different type.'
          );
        event.destructor(),
          EventConstructor.eventPool.length < EVENT_POOL_SIZE &&
            EventConstructor.eventPool.push(event);
      }
      function addEventPoolingTo(EventConstructor) {
        (EventConstructor.eventPool = []),
          (EventConstructor.getPooled = getPooledEvent),
          (EventConstructor.release = releasePooledEvent);
      }
      const SyntheticCompositionEvent = SyntheticEvent.extend({ data: null });
      const SyntheticInputEvent = SyntheticEvent.extend({ data: null });
      const END_KEYCODES = [9, 13, 27, 32];
      const START_KEYCODE = 229;
      const canUseCompositionEvent = canUseDOM && 'CompositionEvent' in window;
      let documentMode = null;
      canUseDOM &&
        'documentMode' in document &&
        (documentMode = document.documentMode);
      const canUseTextInputEvent =
        canUseDOM && 'TextEvent' in window && !documentMode;
      const useFallbackCompositionData =
        canUseDOM &&
        (!canUseCompositionEvent ||
          (documentMode && documentMode > 8 && documentMode <= 11));
      const SPACEBAR_CODE = 32;
      const SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
      const eventTypes = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: 'onBeforeInput',
            captured: 'onBeforeInputCapture',
          },
          dependencies: [
            TOP_COMPOSITION_END,
            TOP_KEY_PRESS,
            TOP_TEXT_INPUT,
            TOP_PASTE,
          ],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture',
          },
          dependencies: [
            TOP_BLUR,
            TOP_COMPOSITION_END,
            TOP_KEY_DOWN,
            TOP_KEY_PRESS,
            TOP_KEY_UP,
            TOP_MOUSE_DOWN,
          ],
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture',
          },
          dependencies: [
            TOP_BLUR,
            TOP_COMPOSITION_START,
            TOP_KEY_DOWN,
            TOP_KEY_PRESS,
            TOP_KEY_UP,
            TOP_MOUSE_DOWN,
          ],
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture',
          },
          dependencies: [
            TOP_BLUR,
            TOP_COMPOSITION_UPDATE,
            TOP_KEY_DOWN,
            TOP_KEY_PRESS,
            TOP_KEY_UP,
            TOP_MOUSE_DOWN,
          ],
        },
      };
      let hasSpaceKeypress = !1;
      function isKeypressCommand(nativeEvent) {
        return (
          (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
          !(nativeEvent.ctrlKey && nativeEvent.altKey)
        );
      }
      function getCompositionEventType(topLevelType) {
        switch (topLevelType) {
          case TOP_COMPOSITION_START:
            return eventTypes.compositionStart;
          case TOP_COMPOSITION_END:
            return eventTypes.compositionEnd;
          case TOP_COMPOSITION_UPDATE:
            return eventTypes.compositionUpdate;
        }
      }
      function isFallbackCompositionStart(topLevelType, nativeEvent) {
        return (
          topLevelType === TOP_KEY_DOWN && nativeEvent.keyCode === START_KEYCODE
        );
      }
      function isFallbackCompositionEnd(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_KEY_UP:
            return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
          case TOP_KEY_DOWN:
            return nativeEvent.keyCode !== START_KEYCODE;
          case TOP_KEY_PRESS:
          case TOP_MOUSE_DOWN:
          case TOP_BLUR:
            return !0;
          default:
            return !1;
        }
      }
      function getDataFromCustomEvent(nativeEvent) {
        const { detail } = nativeEvent;
        return typeof detail === 'object' && 'data' in detail
          ? detail.data
          : null;
      }
      function isUsingKoreanIME(nativeEvent) {
        return nativeEvent.locale === 'ko';
      }
      let isComposing = !1;
      function extractCompositionEvent(
        topLevelType,
        targetInst,
        nativeEvent,
        nativeEventTarget
      ) {
        let eventType;
        let fallbackData;
        if (
          (canUseCompositionEvent
            ? (eventType = getCompositionEventType(topLevelType))
            : isComposing
            ? isFallbackCompositionEnd(topLevelType, nativeEvent) &&
              (eventType = eventTypes.compositionEnd)
            : isFallbackCompositionStart(topLevelType, nativeEvent) &&
              (eventType = eventTypes.compositionStart),
          !eventType)
        )
          return null;
        useFallbackCompositionData &&
          !isUsingKoreanIME(nativeEvent) &&
          (!isComposing && eventType === eventTypes.compositionStart
            ? (isComposing = initialize(nativeEventTarget))
            : eventType === eventTypes.compositionEnd &&
              isComposing &&
              (fallbackData = getData()));
        const event = SyntheticCompositionEvent.getPooled(
          eventType,
          targetInst,
          nativeEvent,
          nativeEventTarget
        );
        if (fallbackData) event.data = fallbackData;
        else {
          const customData = getDataFromCustomEvent(nativeEvent);
          customData !== null && (event.data = customData);
        }
        return accumulateTwoPhaseDispatches(event), event;
      }
      function getNativeBeforeInputChars(topLevelType, nativeEvent) {
        switch (topLevelType) {
          case TOP_COMPOSITION_END:
            return getDataFromCustomEvent(nativeEvent);
          case TOP_KEY_PRESS:
            var { which } = nativeEvent;
            return which !== SPACEBAR_CODE
              ? null
              : ((hasSpaceKeypress = !0), SPACEBAR_CHAR);
          case TOP_TEXT_INPUT:
            var chars = nativeEvent.data;
            return chars === SPACEBAR_CHAR && hasSpaceKeypress ? null : chars;
          default:
            return null;
        }
      }
      function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
        if (isComposing) {
          if (
            topLevelType === TOP_COMPOSITION_END ||
            (!canUseCompositionEvent &&
              isFallbackCompositionEnd(topLevelType, nativeEvent))
          ) {
            const chars = getData();
            return reset(), (isComposing = !1), chars;
          }
          return null;
        }
        switch (topLevelType) {
          case TOP_PASTE:
            return null;
          case TOP_KEY_PRESS:
            if (!isKeypressCommand(nativeEvent)) {
              if (nativeEvent.char && nativeEvent.char.length > 1)
                return nativeEvent.char;
              if (nativeEvent.which)
                return String.fromCharCode(nativeEvent.which);
            }
            return null;
          case TOP_COMPOSITION_END:
            return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)
              ? null
              : nativeEvent.data;
          default:
            return null;
        }
      }
      function extractBeforeInputEvent(
        topLevelType,
        targetInst,
        nativeEvent,
        nativeEventTarget
      ) {
        let chars;
        if (
          (canUseTextInputEvent
            ? (chars = getNativeBeforeInputChars(topLevelType, nativeEvent))
            : (chars = getFallbackBeforeInputChars(topLevelType, nativeEvent)),
          !chars)
        )
          return null;
        const event = SyntheticInputEvent.getPooled(
          eventTypes.beforeInput,
          targetInst,
          nativeEvent,
          nativeEventTarget
        );
        return (event.data = chars), accumulateTwoPhaseDispatches(event), event;
      }
      const BeforeInputEventPlugin = {
        eventTypes,
        extractEvents(
          topLevelType,
          targetInst,
          nativeEvent,
          nativeEventTarget,
          eventSystemFlags
        ) {
          const composition = extractCompositionEvent(
            topLevelType,
            targetInst,
            nativeEvent,
            nativeEventTarget
          );
          const beforeInput = extractBeforeInputEvent(
            topLevelType,
            targetInst,
            nativeEvent,
            nativeEventTarget
          );
          return composition === null
            ? beforeInput
            : beforeInput === null
            ? composition
            : [composition, beforeInput];
        },
      };
      const supportedInputTypes = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function isTextInputElement(elem) {
        const nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
        return nodeName === 'input'
          ? !!supportedInputTypes[elem.type]
          : nodeName === 'textarea';
      }
      const eventTypes$1 = {
        change: {
          phasedRegistrationNames: {
            bubbled: 'onChange',
            captured: 'onChangeCapture',
          },
          dependencies: [
            TOP_BLUR,
            TOP_CHANGE,
            TOP_CLICK,
            TOP_FOCUS,
            TOP_INPUT,
            TOP_KEY_DOWN,
            TOP_KEY_UP,
            TOP_SELECTION_CHANGE,
          ],
        },
      };
      function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
        const event = SyntheticEvent.getPooled(
          eventTypes$1.change,
          inst,
          nativeEvent,
          target
        );
        return (
          (event.type = 'change'),
          enqueueStateRestore(target),
          accumulateTwoPhaseDispatches(event),
          event
        );
      }
      let activeElement = null;
      let activeElementInst = null;
      function shouldUseChangeEvent(elem) {
        const nodeName = elem.nodeName && elem.nodeName.toLowerCase();
        return (
          nodeName === 'select' ||
          (nodeName === 'input' && elem.type === 'file')
        );
      }
      function manualDispatchChangeEvent(nativeEvent) {
        const event = createAndAccumulateChangeEvent(
          activeElementInst,
          nativeEvent,
          getEventTarget(nativeEvent)
        );
        batchedUpdates(runEventInBatch, event);
      }
      function runEventInBatch(event) {
        runEventsInBatch(event);
      }
      function getInstIfValueChanged(targetInst) {
        const targetNode = getNodeFromInstance$1(targetInst);
        if (updateValueIfChanged(targetNode)) return targetInst;
      }
      function getTargetInstForChangeEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_CHANGE) return targetInst;
      }
      let isInputEventSupported = !1;
      canUseDOM &&
        (isInputEventSupported =
          isEventSupported('input') &&
          (!document.documentMode || document.documentMode > 9));
      function startWatchingForValueChange(target, targetInst) {
        (activeElement = target),
          (activeElementInst = targetInst),
          activeElement.attachEvent('onpropertychange', handlePropertyChange);
      }
      function stopWatchingForValueChange() {
        activeElement &&
          (activeElement.detachEvent('onpropertychange', handlePropertyChange),
          (activeElement = null),
          (activeElementInst = null));
      }
      function handlePropertyChange(nativeEvent) {
        nativeEvent.propertyName === 'value' &&
          getInstIfValueChanged(activeElementInst) &&
          manualDispatchChangeEvent(nativeEvent);
      }
      function handleEventsForInputEventPolyfill(
        topLevelType,
        target,
        targetInst
      ) {
        topLevelType === TOP_FOCUS
          ? (stopWatchingForValueChange(),
            startWatchingForValueChange(target, targetInst))
          : topLevelType === TOP_BLUR && stopWatchingForValueChange();
      }
      function getTargetInstForInputEventPolyfill(topLevelType, targetInst) {
        if (
          topLevelType === TOP_SELECTION_CHANGE ||
          topLevelType === TOP_KEY_UP ||
          topLevelType === TOP_KEY_DOWN
        )
          return getInstIfValueChanged(activeElementInst);
      }
      function shouldUseClickEvent(elem) {
        const { nodeName } = elem;
        return (
          nodeName &&
          nodeName.toLowerCase() === 'input' &&
          (elem.type === 'checkbox' || elem.type === 'radio')
        );
      }
      function getTargetInstForClickEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_CLICK)
          return getInstIfValueChanged(targetInst);
      }
      function getTargetInstForInputOrChangeEvent(topLevelType, targetInst) {
        if (topLevelType === TOP_INPUT || topLevelType === TOP_CHANGE)
          return getInstIfValueChanged(targetInst);
      }
      function handleControlledInputBlur(node) {
        const state = node._wrapperState;
        !state ||
          !state.controlled ||
          node.type !== 'number' ||
          setDefaultValue(node, 'number', node.value);
      }
      const ChangeEventPlugin = {
        eventTypes: eventTypes$1,
        _isInputEventSupported: isInputEventSupported,
        extractEvents(
          topLevelType,
          targetInst,
          nativeEvent,
          nativeEventTarget,
          eventSystemFlags
        ) {
          const targetNode = targetInst
            ? getNodeFromInstance$1(targetInst)
            : window;
          let getTargetInstFunc;
          let handleEventFunc;
          if (
            (shouldUseChangeEvent(targetNode)
              ? (getTargetInstFunc = getTargetInstForChangeEvent)
              : isTextInputElement(targetNode)
              ? isInputEventSupported
                ? (getTargetInstFunc = getTargetInstForInputOrChangeEvent)
                : ((getTargetInstFunc = getTargetInstForInputEventPolyfill),
                  (handleEventFunc = handleEventsForInputEventPolyfill))
              : shouldUseClickEvent(targetNode) &&
                (getTargetInstFunc = getTargetInstForClickEvent),
            getTargetInstFunc)
          ) {
            const inst = getTargetInstFunc(topLevelType, targetInst);
            if (inst) {
              const event = createAndAccumulateChangeEvent(
                inst,
                nativeEvent,
                nativeEventTarget
              );
              return event;
            }
          }
          handleEventFunc &&
            handleEventFunc(topLevelType, targetNode, targetInst),
            topLevelType === TOP_BLUR && handleControlledInputBlur(targetNode);
        },
      };
      const SyntheticUIEvent = SyntheticEvent.extend({
        view: null,
        detail: null,
      });
      const modifierKeyToProp = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      };
      function modifierStateGetter(keyArg) {
        const syntheticEvent = this;
        const { nativeEvent } = syntheticEvent;
        if (nativeEvent.getModifierState)
          return nativeEvent.getModifierState(keyArg);
        const keyProp = modifierKeyToProp[keyArg];
        return keyProp ? !!nativeEvent[keyProp] : !1;
      }
      function getEventModifierState(nativeEvent) {
        return modifierStateGetter;
      }
      let previousScreenX = 0;
      let previousScreenY = 0;
      let isMovementXSet = !1;
      let isMovementYSet = !1;
      const SyntheticMouseEvent = SyntheticUIEvent.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: getEventModifierState,
        button: null,
        buttons: null,
        relatedTarget(event) {
          return (
            event.relatedTarget ||
            (event.fromElement === event.srcElement
              ? event.toElement
              : event.fromElement)
          );
        },
        movementX(event) {
          if ('movementX' in event) return event.movementX;
          const screenX = previousScreenX;
          return (
            (previousScreenX = event.screenX),
            isMovementXSet
              ? event.type === 'mousemove'
                ? event.screenX - screenX
                : 0
              : ((isMovementXSet = !0), 0)
          );
        },
        movementY(event) {
          if ('movementY' in event) return event.movementY;
          const screenY = previousScreenY;
          return (
            (previousScreenY = event.screenY),
            isMovementYSet
              ? event.type === 'mousemove'
                ? event.screenY - screenY
                : 0
              : ((isMovementYSet = !0), 0)
          );
        },
      });
      const SyntheticPointerEvent = SyntheticMouseEvent.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null,
      });
      const eventTypes$2 = {
        mouseEnter: {
          registrationName: 'onMouseEnter',
          dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER],
        },
        mouseLeave: {
          registrationName: 'onMouseLeave',
          dependencies: [TOP_MOUSE_OUT, TOP_MOUSE_OVER],
        },
        pointerEnter: {
          registrationName: 'onPointerEnter',
          dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER],
        },
        pointerLeave: {
          registrationName: 'onPointerLeave',
          dependencies: [TOP_POINTER_OUT, TOP_POINTER_OVER],
        },
      };
      const EnterLeaveEventPlugin = {
        eventTypes: eventTypes$2,
        extractEvents(
          topLevelType,
          targetInst,
          nativeEvent,
          nativeEventTarget,
          eventSystemFlags
        ) {
          const isOverEvent =
            topLevelType === TOP_MOUSE_OVER ||
            topLevelType === TOP_POINTER_OVER;
          const isOutEvent =
            topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_POINTER_OUT;
          if (
            (isOverEvent &&
              !(eventSystemFlags & IS_REPLAYED) &&
              (nativeEvent.relatedTarget || nativeEvent.fromElement)) ||
            (!isOutEvent && !isOverEvent)
          )
            return null;
          let win;
          if (nativeEventTarget.window === nativeEventTarget)
            win = nativeEventTarget;
          else {
            const doc = nativeEventTarget.ownerDocument;
            doc ? (win = doc.defaultView || doc.parentWindow) : (win = window);
          }
          let from;
          let to;
          if (isOutEvent) {
            from = targetInst;
            const related = nativeEvent.relatedTarget || nativeEvent.toElement;
            if (
              ((to = related ? getClosestInstanceFromNode(related) : null),
              to !== null)
            ) {
              const nearestMounted = getNearestMountedFiber(to);
              (to !== nearestMounted ||
                (to.tag !== HostComponent && to.tag !== HostText)) &&
                (to = null);
            }
          } else (from = null), (to = targetInst);
          if (from === to) return null;
          let eventInterface;
          let leaveEventType;
          let enterEventType;
          let eventTypePrefix;
          topLevelType === TOP_MOUSE_OUT || topLevelType === TOP_MOUSE_OVER
            ? ((eventInterface = SyntheticMouseEvent),
              (leaveEventType = eventTypes$2.mouseLeave),
              (enterEventType = eventTypes$2.mouseEnter),
              (eventTypePrefix = 'mouse'))
            : (topLevelType === TOP_POINTER_OUT ||
                topLevelType === TOP_POINTER_OVER) &&
              ((eventInterface = SyntheticPointerEvent),
              (leaveEventType = eventTypes$2.pointerLeave),
              (enterEventType = eventTypes$2.pointerEnter),
              (eventTypePrefix = 'pointer'));
          const fromNode = from == null ? win : getNodeFromInstance$1(from);
          const toNode = to == null ? win : getNodeFromInstance$1(to);
          const leave = eventInterface.getPooled(
            leaveEventType,
            from,
            nativeEvent,
            nativeEventTarget
          );
          (leave.type = `${eventTypePrefix}leave`),
            (leave.target = fromNode),
            (leave.relatedTarget = toNode);
          const enter = eventInterface.getPooled(
            enterEventType,
            to,
            nativeEvent,
            nativeEventTarget
          );
          return (
            (enter.type = `${eventTypePrefix}enter`),
            (enter.target = toNode),
            (enter.relatedTarget = fromNode),
            accumulateEnterLeaveDispatches(leave, enter, from, to),
            eventSystemFlags & IS_FIRST_ANCESTOR ? [leave, enter] : [leave]
          );
        },
      };
      function is(x, y) {
        return (
          (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y)
        );
      }
      const objectIs = typeof Object.is === 'function' ? Object.is : is;
      const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
      function shallowEqual(objA, objB) {
        if (objectIs(objA, objB)) return !0;
        if (
          typeof objA !== 'object' ||
          objA === null ||
          typeof objB !== 'object' ||
          objB === null
        )
          return !1;
        const keysA = Object.keys(objA);
        const keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return !1;
        for (let i = 0; i < keysA.length; i++)
          if (
            !hasOwnProperty$2.call(objB, keysA[i]) ||
            !objectIs(objA[keysA[i]], objB[keysA[i]])
          )
            return !1;
        return !0;
      }
      const skipSelectionChangeEvent =
        canUseDOM && 'documentMode' in document && document.documentMode <= 11;
      const eventTypes$3 = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture',
          },
          dependencies: [
            TOP_BLUR,
            TOP_CONTEXT_MENU,
            TOP_DRAG_END,
            TOP_FOCUS,
            TOP_KEY_DOWN,
            TOP_KEY_UP,
            TOP_MOUSE_DOWN,
            TOP_MOUSE_UP,
            TOP_SELECTION_CHANGE,
          ],
        },
      };
      let activeElement$1 = null;
      let activeElementInst$1 = null;
      let lastSelection = null;
      let mouseDown = !1;
      function getSelection$1(node) {
        if ('selectionStart' in node && hasSelectionCapabilities(node))
          return { start: node.selectionStart, end: node.selectionEnd };
        const win =
          (node.ownerDocument && node.ownerDocument.defaultView) || window;
        const selection = win.getSelection();
        return {
          anchorNode: selection.anchorNode,
          anchorOffset: selection.anchorOffset,
          focusNode: selection.focusNode,
          focusOffset: selection.focusOffset,
        };
      }
      function getEventTargetDocument(eventTarget) {
        return eventTarget.window === eventTarget
          ? eventTarget.document
          : eventTarget.nodeType === DOCUMENT_NODE
          ? eventTarget
          : eventTarget.ownerDocument;
      }
      function constructSelectEvent(nativeEvent, nativeEventTarget) {
        const doc = getEventTargetDocument(nativeEventTarget);
        if (
          mouseDown ||
          activeElement$1 == null ||
          activeElement$1 !== getActiveElement(doc)
        )
          return null;
        const currentSelection = getSelection$1(activeElement$1);
        if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
          lastSelection = currentSelection;
          const syntheticEvent = SyntheticEvent.getPooled(
            eventTypes$3.select,
            activeElementInst$1,
            nativeEvent,
            nativeEventTarget
          );
          return (
            (syntheticEvent.type = 'select'),
            (syntheticEvent.target = activeElement$1),
            accumulateTwoPhaseDispatches(syntheticEvent),
            syntheticEvent
          );
        }
        return null;
      }
      const SelectEventPlugin = {
        eventTypes: eventTypes$3,
        extractEvents(
          topLevelType,
          targetInst,
          nativeEvent,
          nativeEventTarget,
          eventSystemFlags,
          container
        ) {
          const containerOrDoc =
            container || getEventTargetDocument(nativeEventTarget);
          if (
            !containerOrDoc ||
            !isListeningToAllDependencies('onSelect', containerOrDoc)
          )
            return null;
          const targetNode = targetInst
            ? getNodeFromInstance$1(targetInst)
            : window;
          switch (topLevelType) {
            case TOP_FOCUS:
              (isTextInputElement(targetNode) ||
                targetNode.contentEditable === 'true') &&
                ((activeElement$1 = targetNode),
                (activeElementInst$1 = targetInst),
                (lastSelection = null));
              break;
            case TOP_BLUR:
              (activeElement$1 = null),
                (activeElementInst$1 = null),
                (lastSelection = null);
              break;
            case TOP_MOUSE_DOWN:
              mouseDown = !0;
              break;
            case TOP_CONTEXT_MENU:
            case TOP_MOUSE_UP:
            case TOP_DRAG_END:
              return (
                (mouseDown = !1),
                constructSelectEvent(nativeEvent, nativeEventTarget)
              );
            case TOP_SELECTION_CHANGE:
              if (skipSelectionChangeEvent) break;
            case TOP_KEY_DOWN:
            case TOP_KEY_UP:
              return constructSelectEvent(nativeEvent, nativeEventTarget);
          }
          return null;
        },
      };
      const SyntheticAnimationEvent = SyntheticEvent.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null,
      });
      const SyntheticClipboardEvent = SyntheticEvent.extend({
        clipboardData(event) {
          return 'clipboardData' in event
            ? event.clipboardData
            : window.clipboardData;
        },
      });
      const SyntheticFocusEvent = SyntheticUIEvent.extend({
        relatedTarget: null,
      });
      function getEventCharCode(nativeEvent) {
        let charCode;
        const { keyCode } = nativeEvent;
        return (
          'charCode' in nativeEvent
            ? ((charCode = nativeEvent.charCode),
              charCode === 0 && keyCode === 13 && (charCode = 13))
            : (charCode = keyCode),
          charCode === 10 && (charCode = 13),
          charCode >= 32 || charCode === 13 ? charCode : 0
        );
      }
      const normalizeKey = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      };
      const translateToKey = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      };
      function getEventKey(nativeEvent) {
        if (nativeEvent.key) {
          const key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if (key !== 'Unidentified') return key;
        }
        if (nativeEvent.type === 'keypress') {
          const charCode = getEventCharCode(nativeEvent);
          return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
        }
        return nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup'
          ? translateToKey[nativeEvent.keyCode] || 'Unidentified'
          : '';
      }
      const SyntheticKeyboardEvent = SyntheticUIEvent.extend({
        key: getEventKey,
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: getEventModifierState,
        charCode(event) {
          return event.type === 'keypress' ? getEventCharCode(event) : 0;
        },
        keyCode(event) {
          return event.type === 'keydown' || event.type === 'keyup'
            ? event.keyCode
            : 0;
        },
        which(event) {
          return event.type === 'keypress'
            ? getEventCharCode(event)
            : event.type === 'keydown' || event.type === 'keyup'
            ? event.keyCode
            : 0;
        },
      });
      const SyntheticDragEvent = SyntheticMouseEvent.extend({
        dataTransfer: null,
      });
      const SyntheticTouchEvent = SyntheticUIEvent.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: getEventModifierState,
      });
      const SyntheticTransitionEvent = SyntheticEvent.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null,
      });
      const SyntheticWheelEvent = SyntheticMouseEvent.extend({
        deltaX(event) {
          return 'deltaX' in event
            ? event.deltaX
            : 'wheelDeltaX' in event
            ? -event.wheelDeltaX
            : 0;
        },
        deltaY(event) {
          return 'deltaY' in event
            ? event.deltaY
            : 'wheelDeltaY' in event
            ? -event.wheelDeltaY
            : 'wheelDelta' in event
            ? -event.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null,
      });
      const knownHTMLTopLevelTypes = [
        TOP_ABORT,
        TOP_CANCEL,
        TOP_CAN_PLAY,
        TOP_CAN_PLAY_THROUGH,
        TOP_CLOSE,
        TOP_DURATION_CHANGE,
        TOP_EMPTIED,
        TOP_ENCRYPTED,
        TOP_ENDED,
        TOP_ERROR,
        TOP_INPUT,
        TOP_INVALID,
        TOP_LOAD,
        TOP_LOADED_DATA,
        TOP_LOADED_METADATA,
        TOP_LOAD_START,
        TOP_PAUSE,
        TOP_PLAY,
        TOP_PLAYING,
        TOP_PROGRESS,
        TOP_RATE_CHANGE,
        TOP_RESET,
        TOP_SEEKED,
        TOP_SEEKING,
        TOP_STALLED,
        TOP_SUBMIT,
        TOP_SUSPEND,
        TOP_TIME_UPDATE,
        TOP_TOGGLE,
        TOP_VOLUME_CHANGE,
        TOP_WAITING,
      ];
      const SimpleEventPlugin = {
        eventTypes: simpleEventPluginEventTypes,
        extractEvents(
          topLevelType,
          targetInst,
          nativeEvent,
          nativeEventTarget,
          eventSystemFlags
        ) {
          const dispatchConfig =
            topLevelEventsToDispatchConfig.get(topLevelType);
          if (!dispatchConfig) return null;
          let EventConstructor;
          switch (topLevelType) {
            case TOP_KEY_PRESS:
              if (getEventCharCode(nativeEvent) === 0) return null;
            case TOP_KEY_DOWN:
            case TOP_KEY_UP:
              EventConstructor = SyntheticKeyboardEvent;
              break;
            case TOP_BLUR:
            case TOP_FOCUS:
              EventConstructor = SyntheticFocusEvent;
              break;
            case TOP_CLICK:
              if (nativeEvent.button === 2) return null;
            case TOP_AUX_CLICK:
            case TOP_DOUBLE_CLICK:
            case TOP_MOUSE_DOWN:
            case TOP_MOUSE_MOVE:
            case TOP_MOUSE_UP:
            case TOP_MOUSE_OUT:
            case TOP_MOUSE_OVER:
            case TOP_CONTEXT_MENU:
              EventConstructor = SyntheticMouseEvent;
              break;
            case TOP_DRAG:
            case TOP_DRAG_END:
            case TOP_DRAG_ENTER:
            case TOP_DRAG_EXIT:
            case TOP_DRAG_LEAVE:
            case TOP_DRAG_OVER:
            case TOP_DRAG_START:
            case TOP_DROP:
              EventConstructor = SyntheticDragEvent;
              break;
            case TOP_TOUCH_CANCEL:
            case TOP_TOUCH_END:
            case TOP_TOUCH_MOVE:
            case TOP_TOUCH_START:
              EventConstructor = SyntheticTouchEvent;
              break;
            case TOP_ANIMATION_END:
            case TOP_ANIMATION_ITERATION:
            case TOP_ANIMATION_START:
              EventConstructor = SyntheticAnimationEvent;
              break;
            case TOP_TRANSITION_END:
              EventConstructor = SyntheticTransitionEvent;
              break;
            case TOP_SCROLL:
              EventConstructor = SyntheticUIEvent;
              break;
            case TOP_WHEEL:
              EventConstructor = SyntheticWheelEvent;
              break;
            case TOP_COPY:
            case TOP_CUT:
            case TOP_PASTE:
              EventConstructor = SyntheticClipboardEvent;
              break;
            case TOP_GOT_POINTER_CAPTURE:
            case TOP_LOST_POINTER_CAPTURE:
            case TOP_POINTER_CANCEL:
            case TOP_POINTER_DOWN:
            case TOP_POINTER_MOVE:
            case TOP_POINTER_OUT:
            case TOP_POINTER_OVER:
            case TOP_POINTER_UP:
              EventConstructor = SyntheticPointerEvent;
              break;
            default:
              knownHTMLTopLevelTypes.indexOf(topLevelType) === -1 &&
                error(
                  'SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.',
                  topLevelType
                ),
                (EventConstructor = SyntheticEvent);
              break;
          }
          const event = EventConstructor.getPooled(
            dispatchConfig,
            targetInst,
            nativeEvent,
            nativeEventTarget
          );
          return accumulateTwoPhaseDispatches(event), event;
        },
      };
      const DOMEventPluginOrder = [
        'ResponderEventPlugin',
        'SimpleEventPlugin',
        'EnterLeaveEventPlugin',
        'ChangeEventPlugin',
        'SelectEventPlugin',
        'BeforeInputEventPlugin',
      ];
      injectEventPluginOrder(DOMEventPluginOrder),
        setComponentTree(
          getFiberCurrentPropsFromNode$1,
          getInstanceFromNode$1,
          getNodeFromInstance$1
        ),
        injectEventPluginsByName({
          SimpleEventPlugin,
          EnterLeaveEventPlugin,
          ChangeEventPlugin,
          SelectEventPlugin,
          BeforeInputEventPlugin,
        });
      const reactEmoji = '\u269B';
      const warningEmoji = '\u26D4';
      const supportsUserTiming =
        typeof performance < 'u' &&
        typeof performance.mark === 'function' &&
        typeof performance.clearMarks === 'function' &&
        typeof performance.measure === 'function' &&
        typeof performance.clearMeasures === 'function';
      let currentFiber = null;
      let currentPhase = null;
      let currentPhaseFiber = null;
      let isCommitting = !1;
      let hasScheduledUpdateInCurrentCommit = !1;
      let hasScheduledUpdateInCurrentPhase = !1;
      let commitCountInCurrentWorkLoop = 0;
      let effectCountInCurrentCommit = 0;
      const labelsInCurrentCommit = new Set();
      const formatMarkName = function (markName) {
        return `${reactEmoji} ${markName}`;
      };
      const formatLabel = function (label, warning) {
        const prefix = warning ? `${warningEmoji} ` : `${reactEmoji} `;
        const suffix = warning ? ` Warning: ${warning}` : '';
        return `${prefix}${label}${suffix}`;
      };
      const beginMark = function (markName) {
        performance.mark(formatMarkName(markName));
      };
      const clearMark = function (markName) {
        performance.clearMarks(formatMarkName(markName));
      };
      const endMark = function (label, markName, warning) {
        const formattedMarkName = formatMarkName(markName);
        const formattedLabel = formatLabel(label, warning);
        try {
          performance.measure(formattedLabel, formattedMarkName);
        } catch {}
        performance.clearMarks(formattedMarkName),
          performance.clearMeasures(formattedLabel);
      };
      const getFiberMarkName = function (label, debugID) {
        return `${label} (#${debugID})`;
      };
      const getFiberLabel = function (componentName, isMounted2, phase) {
        return phase === null
          ? `${componentName} [${isMounted2 ? 'update' : 'mount'}]`
          : `${componentName}.${phase}`;
      };
      const beginFiberMark = function (fiber, phase) {
        const componentName = getComponentName(fiber.type) || 'Unknown';
        const debugID = fiber._debugID;
        const isMounted2 = fiber.alternate !== null;
        const label = getFiberLabel(componentName, isMounted2, phase);
        if (isCommitting && labelsInCurrentCommit.has(label)) return !1;
        labelsInCurrentCommit.add(label);
        const markName = getFiberMarkName(label, debugID);
        return beginMark(markName), !0;
      };
      const clearFiberMark = function (fiber, phase) {
        const componentName = getComponentName(fiber.type) || 'Unknown';
        const debugID = fiber._debugID;
        const isMounted2 = fiber.alternate !== null;
        const label = getFiberLabel(componentName, isMounted2, phase);
        const markName = getFiberMarkName(label, debugID);
        clearMark(markName);
      };
      const endFiberMark = function (fiber, phase, warning) {
        const componentName = getComponentName(fiber.type) || 'Unknown';
        const debugID = fiber._debugID;
        const isMounted2 = fiber.alternate !== null;
        const label = getFiberLabel(componentName, isMounted2, phase);
        const markName = getFiberMarkName(label, debugID);
        endMark(label, markName, warning);
      };
      const shouldIgnoreFiber = function (fiber) {
        switch (fiber.tag) {
          case HostRoot:
          case HostComponent:
          case HostText:
          case HostPortal:
          case Fragment:
          case ContextProvider:
          case ContextConsumer:
          case Mode:
            return !0;
          default:
            return !1;
        }
      };
      const clearPendingPhaseMeasurement = function () {
        currentPhase !== null &&
          currentPhaseFiber !== null &&
          clearFiberMark(currentPhaseFiber, currentPhase),
          (currentPhaseFiber = null),
          (currentPhase = null),
          (hasScheduledUpdateInCurrentPhase = !1);
      };
      const pauseTimers = function () {
        for (let fiber = currentFiber; fiber; )
          fiber._debugIsCurrentlyTiming && endFiberMark(fiber, null, null),
            (fiber = fiber.return);
      };
      const resumeTimersRecursively = function (fiber) {
        fiber.return !== null && resumeTimersRecursively(fiber.return),
          fiber._debugIsCurrentlyTiming && beginFiberMark(fiber, null);
      };
      const resumeTimers = function () {
        currentFiber !== null && resumeTimersRecursively(currentFiber);
      };
      function recordEffect() {
        effectCountInCurrentCommit++;
      }
      function recordScheduleUpdate() {
        isCommitting && (hasScheduledUpdateInCurrentCommit = !0),
          currentPhase !== null &&
            currentPhase !== 'componentWillMount' &&
            currentPhase !== 'componentWillReceiveProps' &&
            (hasScheduledUpdateInCurrentPhase = !0);
      }
      function startWorkTimer(fiber) {
        {
          if (
            !supportsUserTiming ||
            shouldIgnoreFiber(fiber) ||
            ((currentFiber = fiber), !beginFiberMark(fiber, null))
          )
            return;
          fiber._debugIsCurrentlyTiming = !0;
        }
      }
      function cancelWorkTimer(fiber) {
        {
          if (!supportsUserTiming || shouldIgnoreFiber(fiber)) return;
          (fiber._debugIsCurrentlyTiming = !1), clearFiberMark(fiber, null);
        }
      }
      function stopWorkTimer(fiber) {
        {
          if (
            !supportsUserTiming ||
            shouldIgnoreFiber(fiber) ||
            ((currentFiber = fiber.return), !fiber._debugIsCurrentlyTiming)
          )
            return;
          (fiber._debugIsCurrentlyTiming = !1), endFiberMark(fiber, null, null);
        }
      }
      function stopFailedWorkTimer(fiber) {
        {
          if (
            !supportsUserTiming ||
            shouldIgnoreFiber(fiber) ||
            ((currentFiber = fiber.return), !fiber._debugIsCurrentlyTiming)
          )
            return;
          fiber._debugIsCurrentlyTiming = !1;
          const warning =
            fiber.tag === SuspenseComponent
              ? 'Rendering was suspended'
              : 'An error was thrown inside this error boundary';
          endFiberMark(fiber, null, warning);
        }
      }
      function startPhaseTimer(fiber, phase) {
        {
          if (
            !supportsUserTiming ||
            (clearPendingPhaseMeasurement(), !beginFiberMark(fiber, phase))
          )
            return;
          (currentPhaseFiber = fiber), (currentPhase = phase);
        }
      }
      function stopPhaseTimer() {
        {
          if (!supportsUserTiming) return;
          if (currentPhase !== null && currentPhaseFiber !== null) {
            const warning = hasScheduledUpdateInCurrentPhase
              ? 'Scheduled a cascading update'
              : null;
            endFiberMark(currentPhaseFiber, currentPhase, warning);
          }
          (currentPhase = null), (currentPhaseFiber = null);
        }
      }
      function startWorkLoopTimer(nextUnitOfWork) {
        {
          if (((currentFiber = nextUnitOfWork), !supportsUserTiming)) return;
          (commitCountInCurrentWorkLoop = 0),
            beginMark('(React Tree Reconciliation)'),
            resumeTimers();
        }
      }
      function stopWorkLoopTimer(interruptedBy2, didCompleteRoot) {
        {
          if (!supportsUserTiming) return;
          let warning = null;
          if (interruptedBy2 !== null)
            if (interruptedBy2.tag === HostRoot)
              warning = 'A top-level update interrupted the previous render';
            else {
              const componentName =
                getComponentName(interruptedBy2.type) || 'Unknown';
              warning = `An update to ${componentName} interrupted the previous render`;
            }
          else
            commitCountInCurrentWorkLoop > 1 &&
              (warning = 'There were cascading updates');
          commitCountInCurrentWorkLoop = 0;
          const label = didCompleteRoot
            ? '(React Tree Reconciliation: Completed Root)'
            : '(React Tree Reconciliation: Yielded)';
          pauseTimers(), endMark(label, '(React Tree Reconciliation)', warning);
        }
      }
      function startCommitTimer() {
        {
          if (!supportsUserTiming) return;
          (isCommitting = !0),
            (hasScheduledUpdateInCurrentCommit = !1),
            labelsInCurrentCommit.clear(),
            beginMark('(Committing Changes)');
        }
      }
      function stopCommitTimer() {
        {
          if (!supportsUserTiming) return;
          let warning = null;
          hasScheduledUpdateInCurrentCommit
            ? (warning = 'Lifecycle hook scheduled a cascading update')
            : commitCountInCurrentWorkLoop > 0 &&
              (warning = 'Caused by a cascading update in earlier commit'),
            (hasScheduledUpdateInCurrentCommit = !1),
            commitCountInCurrentWorkLoop++,
            (isCommitting = !1),
            labelsInCurrentCommit.clear(),
            endMark('(Committing Changes)', '(Committing Changes)', warning);
        }
      }
      function startCommitSnapshotEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          (effectCountInCurrentCommit = 0),
            beginMark('(Committing Snapshot Effects)');
        }
      }
      function stopCommitSnapshotEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          const count = effectCountInCurrentCommit;
          (effectCountInCurrentCommit = 0),
            endMark(
              `(Committing Snapshot Effects: ${count} Total)`,
              '(Committing Snapshot Effects)',
              null
            );
        }
      }
      function startCommitHostEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          (effectCountInCurrentCommit = 0),
            beginMark('(Committing Host Effects)');
        }
      }
      function stopCommitHostEffectsTimer() {
        {
          if (!supportsUserTiming) return;
          const count = effectCountInCurrentCommit;
          (effectCountInCurrentCommit = 0),
            endMark(
              `(Committing Host Effects: ${count} Total)`,
              '(Committing Host Effects)',
              null
            );
        }
      }
      function startCommitLifeCyclesTimer() {
        {
          if (!supportsUserTiming) return;
          (effectCountInCurrentCommit = 0),
            beginMark('(Calling Lifecycle Methods)');
        }
      }
      function stopCommitLifeCyclesTimer() {
        {
          if (!supportsUserTiming) return;
          const count = effectCountInCurrentCommit;
          (effectCountInCurrentCommit = 0),
            endMark(
              `(Calling Lifecycle Methods: ${count} Total)`,
              '(Calling Lifecycle Methods)',
              null
            );
        }
      }
      const valueStack = [];
      let fiberStack;
      fiberStack = [];
      let index = -1;
      function createCursor(defaultValue) {
        return { current: defaultValue };
      }
      function pop(cursor, fiber) {
        if (index < 0) {
          error('Unexpected pop.');
          return;
        }
        fiber !== fiberStack[index] && error('Unexpected Fiber popped.'),
          (cursor.current = valueStack[index]),
          (valueStack[index] = null),
          (fiberStack[index] = null),
          index--;
      }
      function push(cursor, value, fiber) {
        index++,
          (valueStack[index] = cursor.current),
          (fiberStack[index] = fiber),
          (cursor.current = value);
      }
      let warnedAboutMissingGetChildContext;
      warnedAboutMissingGetChildContext = {};
      const emptyContextObject = {};
      Object.freeze(emptyContextObject);
      const contextStackCursor = createCursor(emptyContextObject);
      const didPerformWorkStackCursor = createCursor(!1);
      let previousContext = emptyContextObject;
      function getUnmaskedContext(
        workInProgress2,
        Component,
        didPushOwnContextIfProvider
      ) {
        return didPushOwnContextIfProvider && isContextProvider(Component)
          ? previousContext
          : contextStackCursor.current;
      }
      function cacheContext(workInProgress2, unmaskedContext, maskedContext) {
        {
          const instance = workInProgress2.stateNode;
          (instance.__reactInternalMemoizedUnmaskedChildContext =
            unmaskedContext),
            (instance.__reactInternalMemoizedMaskedChildContext =
              maskedContext);
        }
      }
      function getMaskedContext(workInProgress2, unmaskedContext) {
        {
          const { type } = workInProgress2;
          const { contextTypes } = type;
          if (!contextTypes) return emptyContextObject;
          const instance = workInProgress2.stateNode;
          if (
            instance &&
            instance.__reactInternalMemoizedUnmaskedChildContext ===
              unmaskedContext
          )
            return instance.__reactInternalMemoizedMaskedChildContext;
          const context = {};
          for (const key in contextTypes) context[key] = unmaskedContext[key];
          {
            const name = getComponentName(type) || 'Unknown';
            checkPropTypes(
              contextTypes,
              context,
              'context',
              name,
              getCurrentFiberStackInDev
            );
          }
          return (
            instance && cacheContext(workInProgress2, unmaskedContext, context),
            context
          );
        }
      }
      function hasContextChanged() {
        return didPerformWorkStackCursor.current;
      }
      function isContextProvider(type) {
        {
          const { childContextTypes } = type;
          return childContextTypes != null;
        }
      }
      function popContext(fiber) {
        pop(didPerformWorkStackCursor, fiber), pop(contextStackCursor, fiber);
      }
      function popTopLevelContextObject(fiber) {
        pop(didPerformWorkStackCursor, fiber), pop(contextStackCursor, fiber);
      }
      function pushTopLevelContextObject(fiber, context, didChange) {
        {
          if (contextStackCursor.current !== emptyContextObject)
            throw Error(
              'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
            );
          push(contextStackCursor, context, fiber),
            push(didPerformWorkStackCursor, didChange, fiber);
        }
      }
      function processChildContext(fiber, type, parentContext) {
        {
          const instance = fiber.stateNode;
          const { childContextTypes } = type;
          if (typeof instance.getChildContext !== 'function') {
            {
              const componentName = getComponentName(type) || 'Unknown';
              warnedAboutMissingGetChildContext[componentName] ||
                ((warnedAboutMissingGetChildContext[componentName] = !0),
                error(
                  '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
                  componentName,
                  componentName
                ));
            }
            return parentContext;
          }
          let childContext;
          startPhaseTimer(fiber, 'getChildContext'),
            (childContext = instance.getChildContext()),
            stopPhaseTimer();
          for (const contextKey in childContext)
            if (!(contextKey in childContextTypes))
              throw Error(
                `${
                  getComponentName(type) || 'Unknown'
                }.getChildContext(): key "${contextKey}" is not defined in childContextTypes.`
              );
          {
            const name = getComponentName(type) || 'Unknown';
            checkPropTypes(
              childContextTypes,
              childContext,
              'child context',
              name,
              getCurrentFiberStackInDev
            );
          }
          return _assign({}, parentContext, {}, childContext);
        }
      }
      function pushContextProvider(workInProgress2) {
        {
          const instance = workInProgress2.stateNode;
          const memoizedMergedChildContext =
            (instance && instance.__reactInternalMemoizedMergedChildContext) ||
            emptyContextObject;
          return (
            (previousContext = contextStackCursor.current),
            push(
              contextStackCursor,
              memoizedMergedChildContext,
              workInProgress2
            ),
            push(
              didPerformWorkStackCursor,
              didPerformWorkStackCursor.current,
              workInProgress2
            ),
            !0
          );
        }
      }
      function invalidateContextProvider(workInProgress2, type, didChange) {
        {
          const instance = workInProgress2.stateNode;
          if (!instance)
            throw Error(
              'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
            );
          if (didChange) {
            const mergedContext = processChildContext(
              workInProgress2,
              type,
              previousContext
            );
            (instance.__reactInternalMemoizedMergedChildContext =
              mergedContext),
              pop(didPerformWorkStackCursor, workInProgress2),
              pop(contextStackCursor, workInProgress2),
              push(contextStackCursor, mergedContext, workInProgress2),
              push(didPerformWorkStackCursor, didChange, workInProgress2);
          } else
            pop(didPerformWorkStackCursor, workInProgress2),
              push(didPerformWorkStackCursor, didChange, workInProgress2);
        }
      }
      function findCurrentUnmaskedContext(fiber) {
        {
          if (!(isFiberMounted(fiber) && fiber.tag === ClassComponent))
            throw Error(
              'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
            );
          let node = fiber;
          do {
            switch (node.tag) {
              case HostRoot:
                return node.stateNode.context;
              case ClassComponent: {
                const Component = node.type;
                if (isContextProvider(Component))
                  return node.stateNode
                    .__reactInternalMemoizedMergedChildContext;
                break;
              }
            }
            node = node.return;
          } while (node !== null);
          throw Error(
            'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'
          );
        }
      }
      const LegacyRoot = 0;
      const BlockingRoot = 1;
      const ConcurrentRoot = 2;
      const Scheduler_runWithPriority = Scheduler.unstable_runWithPriority;
      const Scheduler_scheduleCallback = Scheduler.unstable_scheduleCallback;
      const Scheduler_cancelCallback = Scheduler.unstable_cancelCallback;
      const Scheduler_shouldYield = Scheduler.unstable_shouldYield;
      const Scheduler_requestPaint = Scheduler.unstable_requestPaint;
      const Scheduler_now = Scheduler.unstable_now;
      const Scheduler_getCurrentPriorityLevel =
        Scheduler.unstable_getCurrentPriorityLevel;
      const Scheduler_ImmediatePriority = Scheduler.unstable_ImmediatePriority;
      const Scheduler_UserBlockingPriority =
        Scheduler.unstable_UserBlockingPriority;
      const Scheduler_NormalPriority = Scheduler.unstable_NormalPriority;
      const Scheduler_LowPriority = Scheduler.unstable_LowPriority;
      const Scheduler_IdlePriority = Scheduler.unstable_IdlePriority;
      if (
        !(
          tracing.__interactionsRef != null &&
          tracing.__interactionsRef.current != null
        )
      )
        throw Error(
          'It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling'
        );
      const fakeCallbackNode = {};
      const ImmediatePriority = 99;
      const UserBlockingPriority$1 = 98;
      const NormalPriority = 97;
      const LowPriority = 96;
      const IdlePriority = 95;
      const NoPriority = 90;
      const shouldYield = Scheduler_shouldYield;
      const requestPaint =
        Scheduler_requestPaint !== void 0
          ? Scheduler_requestPaint
          : function () {};
      let syncQueue = null;
      let immediateQueueCallbackNode = null;
      let isFlushingSyncQueue = !1;
      const initialTimeMs = Scheduler_now();
      const now =
        initialTimeMs < 1e4
          ? Scheduler_now
          : function () {
              return Scheduler_now() - initialTimeMs;
            };
      function getCurrentPriorityLevel() {
        switch (Scheduler_getCurrentPriorityLevel()) {
          case Scheduler_ImmediatePriority:
            return ImmediatePriority;
          case Scheduler_UserBlockingPriority:
            return UserBlockingPriority$1;
          case Scheduler_NormalPriority:
            return NormalPriority;
          case Scheduler_LowPriority:
            return LowPriority;
          case Scheduler_IdlePriority:
            return IdlePriority;
          default:
            throw Error('Unknown priority level.');
        }
      }
      function reactPriorityToSchedulerPriority(reactPriorityLevel) {
        switch (reactPriorityLevel) {
          case ImmediatePriority:
            return Scheduler_ImmediatePriority;
          case UserBlockingPriority$1:
            return Scheduler_UserBlockingPriority;
          case NormalPriority:
            return Scheduler_NormalPriority;
          case LowPriority:
            return Scheduler_LowPriority;
          case IdlePriority:
            return Scheduler_IdlePriority;
          default:
            throw Error('Unknown priority level.');
        }
      }
      function runWithPriority$1(reactPriorityLevel, fn) {
        const priorityLevel =
          reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_runWithPriority(priorityLevel, fn);
      }
      function scheduleCallback(reactPriorityLevel, callback, options) {
        const priorityLevel =
          reactPriorityToSchedulerPriority(reactPriorityLevel);
        return Scheduler_scheduleCallback(priorityLevel, callback, options);
      }
      function scheduleSyncCallback(callback) {
        return (
          syncQueue === null
            ? ((syncQueue = [callback]),
              (immediateQueueCallbackNode = Scheduler_scheduleCallback(
                Scheduler_ImmediatePriority,
                flushSyncCallbackQueueImpl
              )))
            : syncQueue.push(callback),
          fakeCallbackNode
        );
      }
      function cancelCallback(callbackNode) {
        callbackNode !== fakeCallbackNode &&
          Scheduler_cancelCallback(callbackNode);
      }
      function flushSyncCallbackQueue() {
        if (immediateQueueCallbackNode !== null) {
          const node = immediateQueueCallbackNode;
          (immediateQueueCallbackNode = null), Scheduler_cancelCallback(node);
        }
        flushSyncCallbackQueueImpl();
      }
      function flushSyncCallbackQueueImpl() {
        if (!isFlushingSyncQueue && syncQueue !== null) {
          isFlushingSyncQueue = !0;
          let i = 0;
          try {
            const _isSync = !0;
            const queue = syncQueue;
            runWithPriority$1(ImmediatePriority, () => {
              for (; i < queue.length; i++) {
                let callback = queue[i];
                do callback = callback(_isSync);
                while (callback !== null);
              }
            }),
              (syncQueue = null);
          } catch (error2) {
            throw (
              (syncQueue !== null && (syncQueue = syncQueue.slice(i + 1)),
              Scheduler_scheduleCallback(
                Scheduler_ImmediatePriority,
                flushSyncCallbackQueue
              ),
              error2)
            );
          } finally {
            isFlushingSyncQueue = !1;
          }
        }
      }
      const NoMode = 0;
      const StrictMode = 1;
      const BlockingMode = 2;
      const ConcurrentMode = 4;
      const ProfileMode = 8;
      const MAX_SIGNED_31_BIT_INT = 1073741823;
      const NoWork = 0;
      const Never = 1;
      const Idle = 2;
      const ContinuousHydration = 3;
      const Sync = MAX_SIGNED_31_BIT_INT;
      const Batched = Sync - 1;
      const UNIT_SIZE = 10;
      const MAGIC_NUMBER_OFFSET = Batched - 1;
      function msToExpirationTime(ms) {
        return MAGIC_NUMBER_OFFSET - ((ms / UNIT_SIZE) | 0);
      }
      function expirationTimeToMs(expirationTime) {
        return (MAGIC_NUMBER_OFFSET - expirationTime) * UNIT_SIZE;
      }
      function ceiling(num, precision) {
        return (((num / precision) | 0) + 1) * precision;
      }
      function computeExpirationBucket(
        currentTime,
        expirationInMs,
        bucketSizeMs
      ) {
        return (
          MAGIC_NUMBER_OFFSET -
          ceiling(
            MAGIC_NUMBER_OFFSET - currentTime + expirationInMs / UNIT_SIZE,
            bucketSizeMs / UNIT_SIZE
          )
        );
      }
      const LOW_PRIORITY_EXPIRATION = 5e3;
      const LOW_PRIORITY_BATCH_SIZE = 250;
      function computeAsyncExpiration(currentTime) {
        return computeExpirationBucket(
          currentTime,
          LOW_PRIORITY_EXPIRATION,
          LOW_PRIORITY_BATCH_SIZE
        );
      }
      function computeSuspenseExpiration(currentTime, timeoutMs) {
        return computeExpirationBucket(
          currentTime,
          timeoutMs,
          LOW_PRIORITY_BATCH_SIZE
        );
      }
      const HIGH_PRIORITY_EXPIRATION = 500;
      const HIGH_PRIORITY_BATCH_SIZE = 100;
      function computeInteractiveExpiration(currentTime) {
        return computeExpirationBucket(
          currentTime,
          HIGH_PRIORITY_EXPIRATION,
          HIGH_PRIORITY_BATCH_SIZE
        );
      }
      function inferPriorityFromExpirationTime(currentTime, expirationTime) {
        if (expirationTime === Sync) return ImmediatePriority;
        if (expirationTime === Never || expirationTime === Idle)
          return IdlePriority;
        const msUntil =
          expirationTimeToMs(expirationTime) - expirationTimeToMs(currentTime);
        return msUntil <= 0
          ? ImmediatePriority
          : msUntil <= HIGH_PRIORITY_EXPIRATION + HIGH_PRIORITY_BATCH_SIZE
          ? UserBlockingPriority$1
          : msUntil <= LOW_PRIORITY_EXPIRATION + LOW_PRIORITY_BATCH_SIZE
          ? NormalPriority
          : IdlePriority;
      }
      const ReactStrictModeWarnings = {
        recordUnsafeLifecycleWarnings(fiber, instance) {},
        flushPendingUnsafeLifecycleWarnings() {},
        recordLegacyContextWarning(fiber, instance) {},
        flushLegacyContextWarning() {},
        discardPendingWarnings() {},
      };
      {
        const findStrictRoot = function (fiber) {
          for (var maybeStrictRoot = null, node = fiber; node !== null; )
            node.mode & StrictMode && (maybeStrictRoot = node),
              (node = node.return);
          return maybeStrictRoot;
        };
        const setToSortedString = function (set2) {
          const array = [];
          return (
            set2.forEach((value) => {
              array.push(value);
            }),
            array.sort().join(', ')
          );
        };
        let pendingComponentWillMountWarnings = [];
        let pendingUNSAFE_ComponentWillMountWarnings = [];
        let pendingComponentWillReceivePropsWarnings = [];
        let pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        let pendingComponentWillUpdateWarnings = [];
        let pendingUNSAFE_ComponentWillUpdateWarnings = [];
        const didWarnAboutUnsafeLifecycles = new Set();
        (ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function (
          fiber,
          instance
        ) {
          didWarnAboutUnsafeLifecycles.has(fiber.type) ||
            (typeof instance.componentWillMount === 'function' &&
              instance.componentWillMount.__suppressDeprecationWarning !== !0 &&
              pendingComponentWillMountWarnings.push(fiber),
            fiber.mode & StrictMode &&
              typeof instance.UNSAFE_componentWillMount === 'function' &&
              pendingUNSAFE_ComponentWillMountWarnings.push(fiber),
            typeof instance.componentWillReceiveProps === 'function' &&
              instance.componentWillReceiveProps
                .__suppressDeprecationWarning !== !0 &&
              pendingComponentWillReceivePropsWarnings.push(fiber),
            fiber.mode & StrictMode &&
              typeof instance.UNSAFE_componentWillReceiveProps === 'function' &&
              pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber),
            typeof instance.componentWillUpdate === 'function' &&
              instance.componentWillUpdate.__suppressDeprecationWarning !==
                !0 &&
              pendingComponentWillUpdateWarnings.push(fiber),
            fiber.mode & StrictMode &&
              typeof instance.UNSAFE_componentWillUpdate === 'function' &&
              pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber));
        }),
          (ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings =
            function () {
              const componentWillMountUniqueNames = new Set();
              pendingComponentWillMountWarnings.length > 0 &&
                (pendingComponentWillMountWarnings.forEach((fiber) => {
                  componentWillMountUniqueNames.add(
                    getComponentName(fiber.type) || 'Component'
                  ),
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                }),
                (pendingComponentWillMountWarnings = []));
              const UNSAFE_componentWillMountUniqueNames = new Set();
              pendingUNSAFE_ComponentWillMountWarnings.length > 0 &&
                (pendingUNSAFE_ComponentWillMountWarnings.forEach((fiber) => {
                  UNSAFE_componentWillMountUniqueNames.add(
                    getComponentName(fiber.type) || 'Component'
                  ),
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                }),
                (pendingUNSAFE_ComponentWillMountWarnings = []));
              const componentWillReceivePropsUniqueNames = new Set();
              pendingComponentWillReceivePropsWarnings.length > 0 &&
                (pendingComponentWillReceivePropsWarnings.forEach((fiber) => {
                  componentWillReceivePropsUniqueNames.add(
                    getComponentName(fiber.type) || 'Component'
                  ),
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                }),
                (pendingComponentWillReceivePropsWarnings = []));
              const UNSAFE_componentWillReceivePropsUniqueNames = new Set();
              pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0 &&
                (pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(
                  (fiber) => {
                    UNSAFE_componentWillReceivePropsUniqueNames.add(
                      getComponentName(fiber.type) || 'Component'
                    ),
                      didWarnAboutUnsafeLifecycles.add(fiber.type);
                  }
                ),
                (pendingUNSAFE_ComponentWillReceivePropsWarnings = []));
              const componentWillUpdateUniqueNames = new Set();
              pendingComponentWillUpdateWarnings.length > 0 &&
                (pendingComponentWillUpdateWarnings.forEach((fiber) => {
                  componentWillUpdateUniqueNames.add(
                    getComponentName(fiber.type) || 'Component'
                  ),
                    didWarnAboutUnsafeLifecycles.add(fiber.type);
                }),
                (pendingComponentWillUpdateWarnings = []));
              const UNSAFE_componentWillUpdateUniqueNames = new Set();
              if (
                (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0 &&
                  (pendingUNSAFE_ComponentWillUpdateWarnings.forEach(
                    (fiber) => {
                      UNSAFE_componentWillUpdateUniqueNames.add(
                        getComponentName(fiber.type) || 'Component'
                      ),
                        didWarnAboutUnsafeLifecycles.add(fiber.type);
                    }
                  ),
                  (pendingUNSAFE_ComponentWillUpdateWarnings = [])),
                UNSAFE_componentWillMountUniqueNames.size > 0)
              ) {
                const sortedNames = setToSortedString(
                  UNSAFE_componentWillMountUniqueNames
                );
                error(
                  `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
                  sortedNames
                );
              }
              if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
                const _sortedNames = setToSortedString(
                  UNSAFE_componentWillReceivePropsUniqueNames
                );
                error(
                  `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state

Please update the following components: %s`,
                  _sortedNames
                );
              }
              if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
                const _sortedNames2 = setToSortedString(
                  UNSAFE_componentWillUpdateUniqueNames
                );
                error(
                  `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                  _sortedNames2
                );
              }
              if (componentWillMountUniqueNames.size > 0) {
                const _sortedNames3 = setToSortedString(
                  componentWillMountUniqueNames
                );
                warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                  _sortedNames3
                );
              }
              if (componentWillReceivePropsUniqueNames.size > 0) {
                const _sortedNames4 = setToSortedString(
                  componentWillReceivePropsUniqueNames
                );
                warn(
                  `componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                  _sortedNames4
                );
              }
              if (componentWillUpdateUniqueNames.size > 0) {
                const _sortedNames5 = setToSortedString(
                  componentWillUpdateUniqueNames
                );
                warn(
                  `componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                  _sortedNames5
                );
              }
            });
        let pendingLegacyContextWarning = new Map();
        const didWarnAboutLegacyContext = new Set();
        (ReactStrictModeWarnings.recordLegacyContextWarning = function (
          fiber,
          instance
        ) {
          const strictRoot = findStrictRoot(fiber);
          if (strictRoot === null) {
            error(
              'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
            );
            return;
          }
          if (!didWarnAboutLegacyContext.has(fiber.type)) {
            let warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
            (fiber.type.contextTypes != null ||
              fiber.type.childContextTypes != null ||
              (instance !== null &&
                typeof instance.getChildContext === 'function')) &&
              (warningsForRoot === void 0 &&
                ((warningsForRoot = []),
                pendingLegacyContextWarning.set(strictRoot, warningsForRoot)),
              warningsForRoot.push(fiber));
          }
        }),
          (ReactStrictModeWarnings.flushLegacyContextWarning = function () {
            pendingLegacyContextWarning.forEach((fiberArray, strictRoot) => {
              if (fiberArray.length !== 0) {
                const firstFiber = fiberArray[0];
                const uniqueNames = new Set();
                fiberArray.forEach((fiber) => {
                  uniqueNames.add(getComponentName(fiber.type) || 'Component'),
                    didWarnAboutLegacyContext.add(fiber.type);
                });
                const sortedNames = setToSortedString(uniqueNames);
                const firstComponentStack =
                  getStackByFiberInDevAndProd(firstFiber);
                error(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://fb.me/react-legacy-context%s`,
                  sortedNames,
                  firstComponentStack
                );
              }
            });
          }),
          (ReactStrictModeWarnings.discardPendingWarnings = function () {
            (pendingComponentWillMountWarnings = []),
              (pendingUNSAFE_ComponentWillMountWarnings = []),
              (pendingComponentWillReceivePropsWarnings = []),
              (pendingUNSAFE_ComponentWillReceivePropsWarnings = []),
              (pendingComponentWillUpdateWarnings = []),
              (pendingUNSAFE_ComponentWillUpdateWarnings = []),
              (pendingLegacyContextWarning = new Map());
          });
      }
      let resolveFamily = null;
      let failedBoundaries = null;
      const setRefreshHandler = function (handler) {
        resolveFamily = handler;
      };
      function resolveFunctionForHotReloading(type) {
        {
          if (resolveFamily === null) return type;
          const family = resolveFamily(type);
          return family === void 0 ? type : family.current;
        }
      }
      function resolveClassForHotReloading(type) {
        return resolveFunctionForHotReloading(type);
      }
      function resolveForwardRefForHotReloading(type) {
        {
          if (resolveFamily === null) return type;
          const family = resolveFamily(type);
          if (family === void 0) {
            if (type != null && typeof type.render === 'function') {
              const currentRender = resolveFunctionForHotReloading(type.render);
              if (type.render !== currentRender) {
                const syntheticType = {
                  $$typeof: REACT_FORWARD_REF_TYPE,
                  render: currentRender,
                };
                return (
                  type.displayName !== void 0 &&
                    (syntheticType.displayName = type.displayName),
                  syntheticType
                );
              }
            }
            return type;
          }
          return family.current;
        }
      }
      function isCompatibleFamilyForHotReloading(fiber, element) {
        {
          if (resolveFamily === null) return !1;
          const prevType = fiber.elementType;
          const nextType = element.type;
          let needsCompareFamilies = !1;
          const $$typeofNextType =
            typeof nextType === 'object' && nextType !== null
              ? nextType.$$typeof
              : null;
          switch (fiber.tag) {
            case ClassComponent: {
              typeof nextType === 'function' && (needsCompareFamilies = !0);
              break;
            }
            case FunctionComponent: {
              (typeof nextType === 'function' ||
                $$typeofNextType === REACT_LAZY_TYPE) &&
                (needsCompareFamilies = !0);
              break;
            }
            case ForwardRef: {
              ($$typeofNextType === REACT_FORWARD_REF_TYPE ||
                $$typeofNextType === REACT_LAZY_TYPE) &&
                (needsCompareFamilies = !0);
              break;
            }
            case MemoComponent:
            case SimpleMemoComponent: {
              ($$typeofNextType === REACT_MEMO_TYPE ||
                $$typeofNextType === REACT_LAZY_TYPE) &&
                (needsCompareFamilies = !0);
              break;
            }
            default:
              return !1;
          }
          if (needsCompareFamilies) {
            const prevFamily = resolveFamily(prevType);
            if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType))
              return !0;
          }
          return !1;
        }
      }
      function markFailedErrorBoundaryForHotReloading(fiber) {
        {
          if (resolveFamily === null || typeof WeakSet !== 'function') return;
          failedBoundaries === null && (failedBoundaries = new WeakSet()),
            failedBoundaries.add(fiber);
        }
      }
      const scheduleRefresh = function (root2, update) {
        {
          if (resolveFamily === null) return;
          const { staleFamilies } = update;
          const { updatedFamilies } = update;
          flushPassiveEffects(),
            flushSync2(() => {
              scheduleFibersWithFamiliesRecursively(
                root2.current,
                updatedFamilies,
                staleFamilies
              );
            });
        }
      };
      const scheduleRoot = function (root2, element) {
        {
          if (root2.context !== emptyContextObject) return;
          flushPassiveEffects(),
            syncUpdates(() => {
              updateContainer(element, root2, null, null);
            });
        }
      };
      function scheduleFibersWithFamiliesRecursively(
        fiber,
        updatedFamilies,
        staleFamilies
      ) {
        {
          const { alternate } = fiber;
          const { child } = fiber;
          const { sibling } = fiber;
          const { tag } = fiber;
          const { type } = fiber;
          let candidateType = null;
          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;
            case ForwardRef:
              candidateType = type.render;
              break;
          }
          if (resolveFamily === null)
            throw new Error(
              'Expected resolveFamily to be set during hot reload.'
            );
          let needsRender = !1;
          let needsRemount = !1;
          if (candidateType !== null) {
            const family = resolveFamily(candidateType);
            family !== void 0 &&
              (staleFamilies.has(family)
                ? (needsRemount = !0)
                : updatedFamilies.has(family) &&
                  (tag === ClassComponent
                    ? (needsRemount = !0)
                    : (needsRender = !0)));
          }
          failedBoundaries !== null &&
            (failedBoundaries.has(fiber) ||
              (alternate !== null && failedBoundaries.has(alternate))) &&
            (needsRemount = !0),
            needsRemount && (fiber._debugNeedsRemount = !0),
            (needsRemount || needsRender) && scheduleWork(fiber, Sync),
            child !== null &&
              !needsRemount &&
              scheduleFibersWithFamiliesRecursively(
                child,
                updatedFamilies,
                staleFamilies
              ),
            sibling !== null &&
              scheduleFibersWithFamiliesRecursively(
                sibling,
                updatedFamilies,
                staleFamilies
              );
        }
      }
      const findHostInstancesForRefresh = function (root2, families) {
        {
          const hostInstances = new Set();
          const types = new Set(families.map((family) => family.current));
          return (
            findHostInstancesForMatchingFibersRecursively(
              root2.current,
              types,
              hostInstances
            ),
            hostInstances
          );
        }
      };
      function findHostInstancesForMatchingFibersRecursively(
        fiber,
        types,
        hostInstances
      ) {
        {
          const { child } = fiber;
          const { sibling } = fiber;
          const { tag } = fiber;
          const { type } = fiber;
          let candidateType = null;
          switch (tag) {
            case FunctionComponent:
            case SimpleMemoComponent:
            case ClassComponent:
              candidateType = type;
              break;
            case ForwardRef:
              candidateType = type.render;
              break;
          }
          let didMatch = !1;
          candidateType !== null && types.has(candidateType) && (didMatch = !0),
            didMatch
              ? findHostInstancesForFiberShallowly(fiber, hostInstances)
              : child !== null &&
                findHostInstancesForMatchingFibersRecursively(
                  child,
                  types,
                  hostInstances
                ),
            sibling !== null &&
              findHostInstancesForMatchingFibersRecursively(
                sibling,
                types,
                hostInstances
              );
        }
      }
      function findHostInstancesForFiberShallowly(fiber, hostInstances) {
        {
          const foundHostInstances = findChildHostInstancesForFiberShallowly(
            fiber,
            hostInstances
          );
          if (foundHostInstances) return;
          for (let node = fiber; ; ) {
            switch (node.tag) {
              case HostComponent:
                hostInstances.add(node.stateNode);
                return;
              case HostPortal:
                hostInstances.add(node.stateNode.containerInfo);
                return;
              case HostRoot:
                hostInstances.add(node.stateNode.containerInfo);
                return;
            }
            if (node.return === null)
              throw new Error('Expected to reach root first.');
            node = node.return;
          }
        }
      }
      function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
        for (let node = fiber, foundHostInstances = !1; ; ) {
          if (node.tag === HostComponent)
            (foundHostInstances = !0), hostInstances.add(node.stateNode);
          else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === fiber) return foundHostInstances;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === fiber)
              return foundHostInstances;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return !1;
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          const props = _assign({}, baseProps);
          const { defaultProps } = Component;
          for (const propName in defaultProps)
            props[propName] === void 0 &&
              (props[propName] = defaultProps[propName]);
          return props;
        }
        return baseProps;
      }
      function readLazyComponentType(lazyComponent) {
        if (
          (initializeLazyComponentType(lazyComponent),
          lazyComponent._status !== Resolved)
        )
          throw lazyComponent._result;
        return lazyComponent._result;
      }
      const valueCursor = createCursor(null);
      let rendererSigil;
      rendererSigil = {};
      let currentlyRenderingFiber = null;
      let lastContextDependency = null;
      let lastContextWithAllBitsObserved = null;
      let isDisallowedContextReadInDEV = !1;
      function resetContextDependencies() {
        (currentlyRenderingFiber = null),
          (lastContextDependency = null),
          (lastContextWithAllBitsObserved = null),
          (isDisallowedContextReadInDEV = !1);
      }
      function enterDisallowedContextReadInDEV() {
        isDisallowedContextReadInDEV = !0;
      }
      function exitDisallowedContextReadInDEV() {
        isDisallowedContextReadInDEV = !1;
      }
      function pushProvider(providerFiber, nextValue) {
        const context = providerFiber.type._context;
        push(valueCursor, context._currentValue, providerFiber),
          (context._currentValue = nextValue),
          context._currentRenderer !== void 0 &&
            context._currentRenderer !== null &&
            context._currentRenderer !== rendererSigil &&
            error(
              'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
            ),
          (context._currentRenderer = rendererSigil);
      }
      function popProvider(providerFiber) {
        const currentValue = valueCursor.current;
        pop(valueCursor, providerFiber);
        const context = providerFiber.type._context;
        context._currentValue = currentValue;
      }
      function calculateChangedBits(context, newValue, oldValue) {
        if (objectIs(oldValue, newValue)) return 0;
        const changedBits =
          typeof context._calculateChangedBits === 'function'
            ? context._calculateChangedBits(oldValue, newValue)
            : MAX_SIGNED_31_BIT_INT;
        return (
          (changedBits & MAX_SIGNED_31_BIT_INT) !== changedBits &&
            error(
              'calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s',
              changedBits
            ),
          changedBits | 0
        );
      }
      function scheduleWorkOnParentPath(parent, renderExpirationTime2) {
        for (let node = parent; node !== null; ) {
          const { alternate } = node;
          if (node.childExpirationTime < renderExpirationTime2)
            (node.childExpirationTime = renderExpirationTime2),
              alternate !== null &&
                alternate.childExpirationTime < renderExpirationTime2 &&
                (alternate.childExpirationTime = renderExpirationTime2);
          else if (
            alternate !== null &&
            alternate.childExpirationTime < renderExpirationTime2
          )
            alternate.childExpirationTime = renderExpirationTime2;
          else break;
          node = node.return;
        }
      }
      function propagateContextChange(
        workInProgress2,
        context,
        changedBits,
        renderExpirationTime2
      ) {
        let fiber = workInProgress2.child;
        for (
          fiber !== null && (fiber.return = workInProgress2);
          fiber !== null;

        ) {
          let nextFiber = void 0;
          const list = fiber.dependencies;
          if (list !== null) {
            nextFiber = fiber.child;
            for (let dependency = list.firstContext; dependency !== null; ) {
              if (
                dependency.context === context &&
                dependency.observedBits & changedBits
              ) {
                if (fiber.tag === ClassComponent) {
                  const update = createUpdate(renderExpirationTime2, null);
                  (update.tag = ForceUpdate), enqueueUpdate(fiber, update);
                }
                fiber.expirationTime < renderExpirationTime2 &&
                  (fiber.expirationTime = renderExpirationTime2);
                const { alternate } = fiber;
                alternate !== null &&
                  alternate.expirationTime < renderExpirationTime2 &&
                  (alternate.expirationTime = renderExpirationTime2),
                  scheduleWorkOnParentPath(fiber.return, renderExpirationTime2),
                  list.expirationTime < renderExpirationTime2 &&
                    (list.expirationTime = renderExpirationTime2);
                break;
              }
              dependency = dependency.next;
            }
          } else
            fiber.tag === ContextProvider
              ? (nextFiber =
                  fiber.type === workInProgress2.type ? null : fiber.child)
              : (nextFiber = fiber.child);
          if (nextFiber !== null) nextFiber.return = fiber;
          else
            for (nextFiber = fiber; nextFiber !== null; ) {
              if (nextFiber === workInProgress2) {
                nextFiber = null;
                break;
              }
              const { sibling } = nextFiber;
              if (sibling !== null) {
                (sibling.return = nextFiber.return), (nextFiber = sibling);
                break;
              }
              nextFiber = nextFiber.return;
            }
          fiber = nextFiber;
        }
      }
      function prepareToReadContext(workInProgress2, renderExpirationTime2) {
        (currentlyRenderingFiber = workInProgress2),
          (lastContextDependency = null),
          (lastContextWithAllBitsObserved = null);
        const { dependencies } = workInProgress2;
        if (dependencies !== null) {
          const { firstContext } = dependencies;
          firstContext !== null &&
            (dependencies.expirationTime >= renderExpirationTime2 &&
              markWorkInProgressReceivedUpdate(),
            (dependencies.firstContext = null));
        }
      }
      function readContext(context, observedBits) {
        if (
          (isDisallowedContextReadInDEV &&
            error(
              'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
            ),
          lastContextWithAllBitsObserved !== context)
        ) {
          if (!(observedBits === !1 || observedBits === 0)) {
            let resolvedObservedBits;
            typeof observedBits !== 'number' ||
            observedBits === MAX_SIGNED_31_BIT_INT
              ? ((lastContextWithAllBitsObserved = context),
                (resolvedObservedBits = MAX_SIGNED_31_BIT_INT))
              : (resolvedObservedBits = observedBits);
            const contextItem = {
              context,
              observedBits: resolvedObservedBits,
              next: null,
            };
            if (lastContextDependency === null) {
              if (currentlyRenderingFiber === null)
                throw Error(
                  'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
                );
              (lastContextDependency = contextItem),
                (currentlyRenderingFiber.dependencies = {
                  expirationTime: NoWork,
                  firstContext: contextItem,
                  responders: null,
                });
            } else
              lastContextDependency = lastContextDependency.next = contextItem;
          }
        }
        return context._currentValue;
      }
      const UpdateState = 0;
      const ReplaceState = 1;
      var ForceUpdate = 2;
      const CaptureUpdate = 3;
      let hasForceUpdate = !1;
      let didWarnUpdateInsideUpdate;
      let currentlyProcessingQueue;
      (didWarnUpdateInsideUpdate = !1), (currentlyProcessingQueue = null);
      function initializeUpdateQueue(fiber) {
        const queue = {
          baseState: fiber.memoizedState,
          baseQueue: null,
          shared: { pending: null },
          effects: null,
        };
        fiber.updateQueue = queue;
      }
      function cloneUpdateQueue(current2, workInProgress2) {
        const queue = workInProgress2.updateQueue;
        const currentQueue = current2.updateQueue;
        if (queue === currentQueue) {
          const clone = {
            baseState: currentQueue.baseState,
            baseQueue: currentQueue.baseQueue,
            shared: currentQueue.shared,
            effects: currentQueue.effects,
          };
          workInProgress2.updateQueue = clone;
        }
      }
      function createUpdate(expirationTime, suspenseConfig) {
        const update = {
          expirationTime,
          suspenseConfig,
          tag: UpdateState,
          payload: null,
          callback: null,
          next: null,
        };
        return (
          (update.next = update),
          (update.priority = getCurrentPriorityLevel()),
          update
        );
      }
      function enqueueUpdate(fiber, update) {
        const { updateQueue } = fiber;
        if (updateQueue !== null) {
          const sharedQueue = updateQueue.shared;
          const { pending } = sharedQueue;
          pending === null
            ? (update.next = update)
            : ((update.next = pending.next), (pending.next = update)),
            (sharedQueue.pending = update),
            currentlyProcessingQueue === sharedQueue &&
              !didWarnUpdateInsideUpdate &&
              (error(
                'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
              ),
              (didWarnUpdateInsideUpdate = !0));
        }
      }
      function enqueueCapturedUpdate(workInProgress2, update) {
        const current2 = workInProgress2.alternate;
        current2 !== null && cloneUpdateQueue(current2, workInProgress2);
        const queue = workInProgress2.updateQueue;
        const last = queue.baseQueue;
        last === null
          ? ((queue.baseQueue = update.next = update), (update.next = update))
          : ((update.next = last.next), (last.next = update));
      }
      function getStateFromUpdate(
        workInProgress2,
        queue,
        update,
        prevState,
        nextProps,
        instance
      ) {
        switch (update.tag) {
          case ReplaceState: {
            const { payload } = update;
            if (typeof payload === 'function') {
              enterDisallowedContextReadInDEV(),
                workInProgress2.mode & StrictMode &&
                  payload.call(instance, prevState, nextProps);
              const nextState = payload.call(instance, prevState, nextProps);
              return exitDisallowedContextReadInDEV(), nextState;
            }
            return payload;
          }
          case CaptureUpdate:
            workInProgress2.effectTag =
              (workInProgress2.effectTag & ~ShouldCapture) | DidCapture;
          case UpdateState: {
            const _payload = update.payload;
            let partialState;
            return (
              typeof _payload === 'function'
                ? (enterDisallowedContextReadInDEV(),
                  workInProgress2.mode & StrictMode &&
                    _payload.call(instance, prevState, nextProps),
                  (partialState = _payload.call(
                    instance,
                    prevState,
                    nextProps
                  )),
                  exitDisallowedContextReadInDEV())
                : (partialState = _payload),
              partialState == null
                ? prevState
                : _assign({}, prevState, partialState)
            );
          }
          case ForceUpdate:
            return (hasForceUpdate = !0), prevState;
        }
        return prevState;
      }
      function processUpdateQueue(
        workInProgress2,
        props,
        instance,
        renderExpirationTime2
      ) {
        const queue = workInProgress2.updateQueue;
        (hasForceUpdate = !1), (currentlyProcessingQueue = queue.shared);
        let { baseQueue } = queue;
        let pendingQueue = queue.shared.pending;
        if (pendingQueue !== null) {
          if (baseQueue !== null) {
            const baseFirst = baseQueue.next;
            const pendingFirst = pendingQueue.next;
            (baseQueue.next = pendingFirst), (pendingQueue.next = baseFirst);
          }
          (baseQueue = pendingQueue), (queue.shared.pending = null);
          const current2 = workInProgress2.alternate;
          if (current2 !== null) {
            const currentQueue = current2.updateQueue;
            currentQueue !== null && (currentQueue.baseQueue = pendingQueue);
          }
        }
        if (baseQueue !== null) {
          const first = baseQueue.next;
          let newState = queue.baseState;
          let newExpirationTime = NoWork;
          let newBaseState = null;
          let newBaseQueueFirst = null;
          let newBaseQueueLast = null;
          if (first !== null) {
            let update = first;
            do {
              const updateExpirationTime = update.expirationTime;
              if (updateExpirationTime < renderExpirationTime2) {
                const clone = {
                  expirationTime: update.expirationTime,
                  suspenseConfig: update.suspenseConfig,
                  tag: update.tag,
                  payload: update.payload,
                  callback: update.callback,
                  next: null,
                };
                newBaseQueueLast === null
                  ? ((newBaseQueueFirst = newBaseQueueLast = clone),
                    (newBaseState = newState))
                  : (newBaseQueueLast = newBaseQueueLast.next = clone),
                  updateExpirationTime > newExpirationTime &&
                    (newExpirationTime = updateExpirationTime);
              } else {
                if (newBaseQueueLast !== null) {
                  const _clone = {
                    expirationTime: Sync,
                    suspenseConfig: update.suspenseConfig,
                    tag: update.tag,
                    payload: update.payload,
                    callback: update.callback,
                    next: null,
                  };
                  newBaseQueueLast = newBaseQueueLast.next = _clone;
                }
                markRenderEventTimeAndConfig(
                  updateExpirationTime,
                  update.suspenseConfig
                ),
                  (newState = getStateFromUpdate(
                    workInProgress2,
                    queue,
                    update,
                    newState,
                    props,
                    instance
                  ));
                const { callback } = update;
                if (callback !== null) {
                  workInProgress2.effectTag |= Callback;
                  const { effects } = queue;
                  effects === null
                    ? (queue.effects = [update])
                    : effects.push(update);
                }
              }
              if (
                ((update = update.next), update === null || update === first)
              ) {
                if (
                  ((pendingQueue = queue.shared.pending), pendingQueue === null)
                )
                  break;
                (update = baseQueue.next = pendingQueue.next),
                  (pendingQueue.next = first),
                  (queue.baseQueue = baseQueue = pendingQueue),
                  (queue.shared.pending = null);
              }
            } while (!0);
          }
          newBaseQueueLast === null
            ? (newBaseState = newState)
            : (newBaseQueueLast.next = newBaseQueueFirst),
            (queue.baseState = newBaseState),
            (queue.baseQueue = newBaseQueueLast),
            markUnprocessedUpdateTime(newExpirationTime),
            (workInProgress2.expirationTime = newExpirationTime),
            (workInProgress2.memoizedState = newState);
        }
        currentlyProcessingQueue = null;
      }
      function callCallback(callback, context) {
        if (typeof callback !== 'function')
          throw Error(
            `Invalid argument passed as callback. Expected a function. Instead received: ${callback}`
          );
        callback.call(context);
      }
      function resetHasForceUpdateBeforeProcessing() {
        hasForceUpdate = !1;
      }
      function checkHasForceUpdateAfterProcessing() {
        return hasForceUpdate;
      }
      function commitUpdateQueue(finishedWork, finishedQueue, instance) {
        const { effects } = finishedQueue;
        if (((finishedQueue.effects = null), effects !== null))
          for (let i = 0; i < effects.length; i++) {
            const effect4 = effects[i];
            const { callback } = effect4;
            callback !== null &&
              ((effect4.callback = null), callCallback(callback, instance));
          }
      }
      const { ReactCurrentBatchConfig } = ReactSharedInternals;
      function requestCurrentSuspenseConfig() {
        return ReactCurrentBatchConfig.suspense;
      }
      const fakeInternalInstance = {};
      const { isArray } = Array;
      const emptyRefsObject = new React.Component().refs;
      let didWarnAboutStateAssignmentForComponent;
      let didWarnAboutUninitializedState;
      let didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
      let didWarnAboutLegacyLifecyclesAndDerivedState;
      let didWarnAboutUndefinedDerivedState;
      let warnOnUndefinedDerivedState;
      let warnOnInvalidCallback;
      let didWarnAboutDirectlyAssigningPropsToState;
      let didWarnAboutContextTypeAndContextTypes;
      let didWarnAboutInvalidateContextType;
      {
        (didWarnAboutStateAssignmentForComponent = new Set()),
          (didWarnAboutUninitializedState = new Set()),
          (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set()),
          (didWarnAboutLegacyLifecyclesAndDerivedState = new Set()),
          (didWarnAboutDirectlyAssigningPropsToState = new Set()),
          (didWarnAboutUndefinedDerivedState = new Set()),
          (didWarnAboutContextTypeAndContextTypes = new Set()),
          (didWarnAboutInvalidateContextType = new Set());
        const didWarnOnInvalidCallback = new Set();
        (warnOnInvalidCallback = function (callback, callerName) {
          if (!(callback === null || typeof callback === 'function')) {
            const key = `${callerName}_${callback}`;
            didWarnOnInvalidCallback.has(key) ||
              (didWarnOnInvalidCallback.add(key),
              error(
                '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                callerName,
                callback
              ));
          }
        }),
          (warnOnUndefinedDerivedState = function (type, partialState) {
            if (partialState === void 0) {
              const componentName = getComponentName(type) || 'Component';
              didWarnAboutUndefinedDerivedState.has(componentName) ||
                (didWarnAboutUndefinedDerivedState.add(componentName),
                error(
                  '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
                  componentName
                ));
            }
          }),
          Object.defineProperty(fakeInternalInstance, '_processChildContext', {
            enumerable: !1,
            value() {
              throw Error(
                "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
              );
            },
          }),
          Object.freeze(fakeInternalInstance);
      }
      function applyDerivedStateFromProps(
        workInProgress2,
        ctor,
        getDerivedStateFromProps,
        nextProps
      ) {
        const prevState = workInProgress2.memoizedState;
        workInProgress2.mode & StrictMode &&
          getDerivedStateFromProps(nextProps, prevState);
        const partialState = getDerivedStateFromProps(nextProps, prevState);
        warnOnUndefinedDerivedState(ctor, partialState);
        const memoizedState =
          partialState == null
            ? prevState
            : _assign({}, prevState, partialState);
        if (
          ((workInProgress2.memoizedState = memoizedState),
          workInProgress2.expirationTime === NoWork)
        ) {
          const { updateQueue } = workInProgress2;
          updateQueue.baseState = memoizedState;
        }
      }
      const classComponentUpdater = {
        isMounted,
        enqueueSetState(inst, payload, callback) {
          const fiber = get(inst);
          const currentTime = requestCurrentTimeForUpdate();
          const suspenseConfig = requestCurrentSuspenseConfig();
          const expirationTime = computeExpirationForFiber(
            currentTime,
            fiber,
            suspenseConfig
          );
          const update = createUpdate(expirationTime, suspenseConfig);
          (update.payload = payload),
            callback != null &&
              (warnOnInvalidCallback(callback, 'setState'),
              (update.callback = callback)),
            enqueueUpdate(fiber, update),
            scheduleWork(fiber, expirationTime);
        },
        enqueueReplaceState(inst, payload, callback) {
          const fiber = get(inst);
          const currentTime = requestCurrentTimeForUpdate();
          const suspenseConfig = requestCurrentSuspenseConfig();
          const expirationTime = computeExpirationForFiber(
            currentTime,
            fiber,
            suspenseConfig
          );
          const update = createUpdate(expirationTime, suspenseConfig);
          (update.tag = ReplaceState),
            (update.payload = payload),
            callback != null &&
              (warnOnInvalidCallback(callback, 'replaceState'),
              (update.callback = callback)),
            enqueueUpdate(fiber, update),
            scheduleWork(fiber, expirationTime);
        },
        enqueueForceUpdate(inst, callback) {
          const fiber = get(inst);
          const currentTime = requestCurrentTimeForUpdate();
          const suspenseConfig = requestCurrentSuspenseConfig();
          const expirationTime = computeExpirationForFiber(
            currentTime,
            fiber,
            suspenseConfig
          );
          const update = createUpdate(expirationTime, suspenseConfig);
          (update.tag = ForceUpdate),
            callback != null &&
              (warnOnInvalidCallback(callback, 'forceUpdate'),
              (update.callback = callback)),
            enqueueUpdate(fiber, update),
            scheduleWork(fiber, expirationTime);
        },
      };
      function checkShouldComponentUpdate(
        workInProgress2,
        ctor,
        oldProps,
        newProps,
        oldState,
        newState,
        nextContext
      ) {
        const instance = workInProgress2.stateNode;
        if (typeof instance.shouldComponentUpdate === 'function') {
          workInProgress2.mode & StrictMode &&
            instance.shouldComponentUpdate(newProps, newState, nextContext),
            startPhaseTimer(workInProgress2, 'shouldComponentUpdate');
          const shouldUpdate = instance.shouldComponentUpdate(
            newProps,
            newState,
            nextContext
          );
          return (
            stopPhaseTimer(),
            shouldUpdate === void 0 &&
              error(
                '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
                getComponentName(ctor) || 'Component'
              ),
            shouldUpdate
          );
        }
        return ctor.prototype && ctor.prototype.isPureReactComponent
          ? !shallowEqual(oldProps, newProps) ||
              !shallowEqual(oldState, newState)
          : !0;
      }
      function checkClassInstance(workInProgress2, ctor, newProps) {
        const instance = workInProgress2.stateNode;
        {
          const name = getComponentName(ctor) || 'Component';
          const renderPresent = instance.render;
          renderPresent ||
            (ctor.prototype && typeof ctor.prototype.render === 'function'
              ? error(
                  '%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
                  name
                )
              : error(
                  '%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
                  name
                )),
            instance.getInitialState &&
              !instance.getInitialState.isReactClassApproved &&
              !instance.state &&
              error(
                'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
                name
              ),
            instance.getDefaultProps &&
              !instance.getDefaultProps.isReactClassApproved &&
              error(
                'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
                name
              ),
            instance.propTypes &&
              error(
                'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
                name
              ),
            instance.contextType &&
              error(
                'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
                name
              ),
            instance.contextTypes &&
              error(
                'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
                name
              ),
            ctor.contextType &&
              ctor.contextTypes &&
              !didWarnAboutContextTypeAndContextTypes.has(ctor) &&
              (didWarnAboutContextTypeAndContextTypes.add(ctor),
              error(
                '%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
                name
              )),
            typeof instance.componentShouldUpdate === 'function' &&
              error(
                '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
                name
              ),
            ctor.prototype &&
              ctor.prototype.isPureReactComponent &&
              typeof instance.shouldComponentUpdate < 'u' &&
              error(
                '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
                getComponentName(ctor) || 'A pure component'
              ),
            typeof instance.componentDidUnmount === 'function' &&
              error(
                '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
                name
              ),
            typeof instance.componentDidReceiveProps === 'function' &&
              error(
                '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
                name
              ),
            typeof instance.componentWillRecieveProps === 'function' &&
              error(
                '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
                name
              ),
            typeof instance.UNSAFE_componentWillRecieveProps === 'function' &&
              error(
                '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
                name
              );
          const hasMutatedProps = instance.props !== newProps;
          instance.props !== void 0 &&
            hasMutatedProps &&
            error(
              "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
              name,
              name
            ),
            instance.defaultProps &&
              error(
                'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
                name,
                name
              ),
            typeof instance.getSnapshotBeforeUpdate === 'function' &&
              typeof instance.componentDidUpdate !== 'function' &&
              !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor) &&
              (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor),
              error(
                '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
                getComponentName(ctor)
              )),
            typeof instance.getDerivedStateFromProps === 'function' &&
              error(
                '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
                name
              ),
            typeof instance.getDerivedStateFromError === 'function' &&
              error(
                '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
                name
              ),
            typeof ctor.getSnapshotBeforeUpdate === 'function' &&
              error(
                '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
                name
              );
          const _state = instance.state;
          _state &&
            (typeof _state !== 'object' || isArray(_state)) &&
            error('%s.state: must be set to an object or null', name),
            typeof instance.getChildContext === 'function' &&
              typeof ctor.childContextTypes !== 'object' &&
              error(
                '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
                name
              );
        }
      }
      function adoptClassInstance(workInProgress2, instance) {
        (instance.updater = classComponentUpdater),
          (workInProgress2.stateNode = instance),
          set(instance, workInProgress2),
          (instance._reactInternalInstance = fakeInternalInstance);
      }
      function constructClassInstance(workInProgress2, ctor, props) {
        let isLegacyContextConsumer = !1;
        let unmaskedContext = emptyContextObject;
        let context = emptyContextObject;
        const { contextType } = ctor;
        if ('contextType' in ctor) {
          const isValid =
            contextType === null ||
            (contextType !== void 0 &&
              contextType.$$typeof === REACT_CONTEXT_TYPE &&
              contextType._context === void 0);
          if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
            didWarnAboutInvalidateContextType.add(ctor);
            let addendum = '';
            contextType === void 0
              ? (addendum =
                  ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.')
              : typeof contextType !== 'object'
              ? (addendum = ` However, it is set to a ${typeof contextType}.`)
              : contextType.$$typeof === REACT_PROVIDER_TYPE
              ? (addendum =
                  ' Did you accidentally pass the Context.Provider instead?')
              : contextType._context !== void 0
              ? (addendum =
                  ' Did you accidentally pass the Context.Consumer instead?')
              : (addendum = ` However, it is set to an object with keys {${Object.keys(
                  contextType
                ).join(', ')}}.`),
              error(
                '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
                getComponentName(ctor) || 'Component',
                addendum
              );
          }
        }
        if (typeof contextType === 'object' && contextType !== null)
          context = readContext(contextType);
        else {
          unmaskedContext = getUnmaskedContext(workInProgress2, ctor, !0);
          const { contextTypes } = ctor;
          (isLegacyContextConsumer = contextTypes != null),
            (context = isLegacyContextConsumer
              ? getMaskedContext(workInProgress2, unmaskedContext)
              : emptyContextObject);
        }
        workInProgress2.mode & StrictMode && new ctor(props, context);
        const instance = new ctor(props, context);
        const state = (workInProgress2.memoizedState =
          instance.state !== null && instance.state !== void 0
            ? instance.state
            : null);
        adoptClassInstance(workInProgress2, instance);
        {
          if (
            typeof ctor.getDerivedStateFromProps === 'function' &&
            state === null
          ) {
            const componentName = getComponentName(ctor) || 'Component';
            didWarnAboutUninitializedState.has(componentName) ||
              (didWarnAboutUninitializedState.add(componentName),
              error(
                '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
                componentName,
                instance.state === null ? 'null' : 'undefined',
                componentName
              ));
          }
          if (
            typeof ctor.getDerivedStateFromProps === 'function' ||
            typeof instance.getSnapshotBeforeUpdate === 'function'
          ) {
            let foundWillMountName = null;
            let foundWillReceivePropsName = null;
            let foundWillUpdateName = null;
            if (
              (typeof instance.componentWillMount === 'function' &&
              instance.componentWillMount.__suppressDeprecationWarning !== !0
                ? (foundWillMountName = 'componentWillMount')
                : typeof instance.UNSAFE_componentWillMount === 'function' &&
                  (foundWillMountName = 'UNSAFE_componentWillMount'),
              typeof instance.componentWillReceiveProps === 'function' &&
              instance.componentWillReceiveProps
                .__suppressDeprecationWarning !== !0
                ? (foundWillReceivePropsName = 'componentWillReceiveProps')
                : typeof instance.UNSAFE_componentWillReceiveProps ===
                    'function' &&
                  (foundWillReceivePropsName =
                    'UNSAFE_componentWillReceiveProps'),
              typeof instance.componentWillUpdate === 'function' &&
              instance.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (foundWillUpdateName = 'componentWillUpdate')
                : typeof instance.UNSAFE_componentWillUpdate === 'function' &&
                  (foundWillUpdateName = 'UNSAFE_componentWillUpdate'),
              foundWillMountName !== null ||
                foundWillReceivePropsName !== null ||
                foundWillUpdateName !== null)
            ) {
              const _componentName = getComponentName(ctor) || 'Component';
              const newApiName =
                typeof ctor.getDerivedStateFromProps === 'function'
                  ? 'getDerivedStateFromProps()'
                  : 'getSnapshotBeforeUpdate()';
              didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) ||
                (didWarnAboutLegacyLifecyclesAndDerivedState.add(
                  _componentName
                ),
                error(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-unsafe-component-lifecycles`,
                  _componentName,
                  newApiName,
                  foundWillMountName !== null
                    ? `
  ${foundWillMountName}`
                    : '',
                  foundWillReceivePropsName !== null
                    ? `
  ${foundWillReceivePropsName}`
                    : '',
                  foundWillUpdateName !== null
                    ? `
  ${foundWillUpdateName}`
                    : ''
                ));
            }
          }
        }
        return (
          isLegacyContextConsumer &&
            cacheContext(workInProgress2, unmaskedContext, context),
          instance
        );
      }
      function callComponentWillMount(workInProgress2, instance) {
        startPhaseTimer(workInProgress2, 'componentWillMount');
        const oldState = instance.state;
        typeof instance.componentWillMount === 'function' &&
          instance.componentWillMount(),
          typeof instance.UNSAFE_componentWillMount === 'function' &&
            instance.UNSAFE_componentWillMount(),
          stopPhaseTimer(),
          oldState !== instance.state &&
            (error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              getComponentName(workInProgress2.type) || 'Component'
            ),
            classComponentUpdater.enqueueReplaceState(
              instance,
              instance.state,
              null
            ));
      }
      function callComponentWillReceiveProps(
        workInProgress2,
        instance,
        newProps,
        nextContext
      ) {
        const oldState = instance.state;
        if (
          (startPhaseTimer(workInProgress2, 'componentWillReceiveProps'),
          typeof instance.componentWillReceiveProps === 'function' &&
            instance.componentWillReceiveProps(newProps, nextContext),
          typeof instance.UNSAFE_componentWillReceiveProps === 'function' &&
            instance.UNSAFE_componentWillReceiveProps(newProps, nextContext),
          stopPhaseTimer(),
          instance.state !== oldState)
        ) {
          {
            const componentName =
              getComponentName(workInProgress2.type) || 'Component';
            didWarnAboutStateAssignmentForComponent.has(componentName) ||
              (didWarnAboutStateAssignmentForComponent.add(componentName),
              error(
                "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                componentName
              ));
          }
          classComponentUpdater.enqueueReplaceState(
            instance,
            instance.state,
            null
          );
        }
      }
      function mountClassInstance(
        workInProgress2,
        ctor,
        newProps,
        renderExpirationTime2
      ) {
        checkClassInstance(workInProgress2, ctor, newProps);
        const instance = workInProgress2.stateNode;
        (instance.props = newProps),
          (instance.state = workInProgress2.memoizedState),
          (instance.refs = emptyRefsObject),
          initializeUpdateQueue(workInProgress2);
        const { contextType } = ctor;
        if (typeof contextType === 'object' && contextType !== null)
          instance.context = readContext(contextType);
        else {
          const unmaskedContext = getUnmaskedContext(workInProgress2, ctor, !0);
          instance.context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        {
          if (instance.state === newProps) {
            const componentName = getComponentName(ctor) || 'Component';
            didWarnAboutDirectlyAssigningPropsToState.has(componentName) ||
              (didWarnAboutDirectlyAssigningPropsToState.add(componentName),
              error(
                "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                componentName
              ));
          }
          workInProgress2.mode & StrictMode &&
            ReactStrictModeWarnings.recordLegacyContextWarning(
              workInProgress2,
              instance
            ),
            ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(
              workInProgress2,
              instance
            );
        }
        processUpdateQueue(
          workInProgress2,
          newProps,
          instance,
          renderExpirationTime2
        ),
          (instance.state = workInProgress2.memoizedState);
        const { getDerivedStateFromProps } = ctor;
        typeof getDerivedStateFromProps === 'function' &&
          (applyDerivedStateFromProps(
            workInProgress2,
            ctor,
            getDerivedStateFromProps,
            newProps
          ),
          (instance.state = workInProgress2.memoizedState)),
          typeof ctor.getDerivedStateFromProps !== 'function' &&
            typeof instance.getSnapshotBeforeUpdate !== 'function' &&
            (typeof instance.UNSAFE_componentWillMount === 'function' ||
              typeof instance.componentWillMount === 'function') &&
            (callComponentWillMount(workInProgress2, instance),
            processUpdateQueue(
              workInProgress2,
              newProps,
              instance,
              renderExpirationTime2
            ),
            (instance.state = workInProgress2.memoizedState)),
          typeof instance.componentDidMount === 'function' &&
            (workInProgress2.effectTag |= Update);
      }
      function resumeMountClassInstance(
        workInProgress2,
        ctor,
        newProps,
        renderExpirationTime2
      ) {
        const instance = workInProgress2.stateNode;
        const oldProps = workInProgress2.memoizedProps;
        instance.props = oldProps;
        const oldContext = instance.context;
        const { contextType } = ctor;
        let nextContext = emptyContextObject;
        if (typeof contextType === 'object' && contextType !== null)
          nextContext = readContext(contextType);
        else {
          const nextLegacyUnmaskedContext = getUnmaskedContext(
            workInProgress2,
            ctor,
            !0
          );
          nextContext = getMaskedContext(
            workInProgress2,
            nextLegacyUnmaskedContext
          );
        }
        const { getDerivedStateFromProps } = ctor;
        const hasNewLifecycles =
          typeof getDerivedStateFromProps === 'function' ||
          typeof instance.getSnapshotBeforeUpdate === 'function';
        !hasNewLifecycles &&
          (typeof instance.UNSAFE_componentWillReceiveProps === 'function' ||
            typeof instance.componentWillReceiveProps === 'function') &&
          (oldProps !== newProps || oldContext !== nextContext) &&
          callComponentWillReceiveProps(
            workInProgress2,
            instance,
            newProps,
            nextContext
          ),
          resetHasForceUpdateBeforeProcessing();
        const oldState = workInProgress2.memoizedState;
        let newState = (instance.state = oldState);
        if (
          (processUpdateQueue(
            workInProgress2,
            newProps,
            instance,
            renderExpirationTime2
          ),
          (newState = workInProgress2.memoizedState),
          oldProps === newProps &&
            oldState === newState &&
            !hasContextChanged() &&
            !checkHasForceUpdateAfterProcessing())
        )
          return (
            typeof instance.componentDidMount === 'function' &&
              (workInProgress2.effectTag |= Update),
            !1
          );
        typeof getDerivedStateFromProps === 'function' &&
          (applyDerivedStateFromProps(
            workInProgress2,
            ctor,
            getDerivedStateFromProps,
            newProps
          ),
          (newState = workInProgress2.memoizedState));
        const shouldUpdate =
          checkHasForceUpdateAfterProcessing() ||
          checkShouldComponentUpdate(
            workInProgress2,
            ctor,
            oldProps,
            newProps,
            oldState,
            newState,
            nextContext
          );
        return (
          shouldUpdate
            ? (!hasNewLifecycles &&
                (typeof instance.UNSAFE_componentWillMount === 'function' ||
                  typeof instance.componentWillMount === 'function') &&
                (startPhaseTimer(workInProgress2, 'componentWillMount'),
                typeof instance.componentWillMount === 'function' &&
                  instance.componentWillMount(),
                typeof instance.UNSAFE_componentWillMount === 'function' &&
                  instance.UNSAFE_componentWillMount(),
                stopPhaseTimer()),
              typeof instance.componentDidMount === 'function' &&
                (workInProgress2.effectTag |= Update))
            : (typeof instance.componentDidMount === 'function' &&
                (workInProgress2.effectTag |= Update),
              (workInProgress2.memoizedProps = newProps),
              (workInProgress2.memoizedState = newState)),
          (instance.props = newProps),
          (instance.state = newState),
          (instance.context = nextContext),
          shouldUpdate
        );
      }
      function updateClassInstance(
        current2,
        workInProgress2,
        ctor,
        newProps,
        renderExpirationTime2
      ) {
        const instance = workInProgress2.stateNode;
        cloneUpdateQueue(current2, workInProgress2);
        const oldProps = workInProgress2.memoizedProps;
        instance.props =
          workInProgress2.type === workInProgress2.elementType
            ? oldProps
            : resolveDefaultProps(workInProgress2.type, oldProps);
        const oldContext = instance.context;
        const { contextType } = ctor;
        let nextContext = emptyContextObject;
        if (typeof contextType === 'object' && contextType !== null)
          nextContext = readContext(contextType);
        else {
          const nextUnmaskedContext = getUnmaskedContext(
            workInProgress2,
            ctor,
            !0
          );
          nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
        }
        const { getDerivedStateFromProps } = ctor;
        const hasNewLifecycles =
          typeof getDerivedStateFromProps === 'function' ||
          typeof instance.getSnapshotBeforeUpdate === 'function';
        !hasNewLifecycles &&
          (typeof instance.UNSAFE_componentWillReceiveProps === 'function' ||
            typeof instance.componentWillReceiveProps === 'function') &&
          (oldProps !== newProps || oldContext !== nextContext) &&
          callComponentWillReceiveProps(
            workInProgress2,
            instance,
            newProps,
            nextContext
          ),
          resetHasForceUpdateBeforeProcessing();
        const oldState = workInProgress2.memoizedState;
        let newState = (instance.state = oldState);
        if (
          (processUpdateQueue(
            workInProgress2,
            newProps,
            instance,
            renderExpirationTime2
          ),
          (newState = workInProgress2.memoizedState),
          oldProps === newProps &&
            oldState === newState &&
            !hasContextChanged() &&
            !checkHasForceUpdateAfterProcessing())
        )
          return (
            typeof instance.componentDidUpdate === 'function' &&
              (oldProps !== current2.memoizedProps ||
                oldState !== current2.memoizedState) &&
              (workInProgress2.effectTag |= Update),
            typeof instance.getSnapshotBeforeUpdate === 'function' &&
              (oldProps !== current2.memoizedProps ||
                oldState !== current2.memoizedState) &&
              (workInProgress2.effectTag |= Snapshot),
            !1
          );
        typeof getDerivedStateFromProps === 'function' &&
          (applyDerivedStateFromProps(
            workInProgress2,
            ctor,
            getDerivedStateFromProps,
            newProps
          ),
          (newState = workInProgress2.memoizedState));
        const shouldUpdate =
          checkHasForceUpdateAfterProcessing() ||
          checkShouldComponentUpdate(
            workInProgress2,
            ctor,
            oldProps,
            newProps,
            oldState,
            newState,
            nextContext
          );
        return (
          shouldUpdate
            ? (!hasNewLifecycles &&
                (typeof instance.UNSAFE_componentWillUpdate === 'function' ||
                  typeof instance.componentWillUpdate === 'function') &&
                (startPhaseTimer(workInProgress2, 'componentWillUpdate'),
                typeof instance.componentWillUpdate === 'function' &&
                  instance.componentWillUpdate(newProps, newState, nextContext),
                typeof instance.UNSAFE_componentWillUpdate === 'function' &&
                  instance.UNSAFE_componentWillUpdate(
                    newProps,
                    newState,
                    nextContext
                  ),
                stopPhaseTimer()),
              typeof instance.componentDidUpdate === 'function' &&
                (workInProgress2.effectTag |= Update),
              typeof instance.getSnapshotBeforeUpdate === 'function' &&
                (workInProgress2.effectTag |= Snapshot))
            : (typeof instance.componentDidUpdate === 'function' &&
                (oldProps !== current2.memoizedProps ||
                  oldState !== current2.memoizedState) &&
                (workInProgress2.effectTag |= Update),
              typeof instance.getSnapshotBeforeUpdate === 'function' &&
                (oldProps !== current2.memoizedProps ||
                  oldState !== current2.memoizedState) &&
                (workInProgress2.effectTag |= Snapshot),
              (workInProgress2.memoizedProps = newProps),
              (workInProgress2.memoizedState = newState)),
          (instance.props = newProps),
          (instance.state = newState),
          (instance.context = nextContext),
          shouldUpdate
        );
      }
      let didWarnAboutMaps;
      let didWarnAboutGenerators;
      let didWarnAboutStringRefs;
      let ownerHasKeyUseWarning;
      let ownerHasFunctionTypeWarning;
      let warnForMissingKey = function (child) {};
      (didWarnAboutMaps = !1),
        (didWarnAboutGenerators = !1),
        (didWarnAboutStringRefs = {}),
        (ownerHasKeyUseWarning = {}),
        (ownerHasFunctionTypeWarning = {}),
        (warnForMissingKey = function (child) {
          if (
            !(child === null || typeof child !== 'object') &&
            !(!child._store || child._store.validated || child.key != null)
          ) {
            if (typeof child._store !== 'object')
              throw Error(
                'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
              );
            child._store.validated = !0;
            const currentComponentErrorInfo = `Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.${getCurrentFiberStackInDev()}`;
            ownerHasKeyUseWarning[currentComponentErrorInfo] ||
              ((ownerHasKeyUseWarning[currentComponentErrorInfo] = !0),
              error(
                'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'
              ));
          }
        });
      const isArray$1 = Array.isArray;
      function coerceRef(returnFiber, current2, element) {
        const mixedRef = element.ref;
        if (
          mixedRef !== null &&
          typeof mixedRef !== 'function' &&
          typeof mixedRef !== 'object'
        ) {
          if (
            (returnFiber.mode & StrictMode || warnAboutStringRefs) &&
            !(
              element._owner &&
              element._self &&
              element._owner.stateNode !== element._self
            )
          ) {
            const componentName =
              getComponentName(returnFiber.type) || 'Component';
            didWarnAboutStringRefs[componentName] ||
              (error(
                'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s',
                mixedRef,
                getStackByFiberInDevAndProd(returnFiber)
              ),
              (didWarnAboutStringRefs[componentName] = !0));
          }
          if (element._owner) {
            const owner = element._owner;
            let inst;
            if (owner) {
              const ownerFiber = owner;
              if (ownerFiber.tag !== ClassComponent)
                throw Error(
                  'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref'
                );
              inst = ownerFiber.stateNode;
            }
            if (!inst)
              throw Error(
                `Missing owner for string ref ${mixedRef}. This error is likely caused by a bug in React. Please file an issue.`
              );
            const stringRef = `${mixedRef}`;
            if (
              current2 !== null &&
              current2.ref !== null &&
              typeof current2.ref === 'function' &&
              current2.ref._stringRef === stringRef
            )
              return current2.ref;
            const ref = function (value) {
              let { refs } = inst;
              refs === emptyRefsObject && (refs = inst.refs = {}),
                value === null
                  ? delete refs[stringRef]
                  : (refs[stringRef] = value);
            };
            return (ref._stringRef = stringRef), ref;
          }
          if (typeof mixedRef !== 'string')
            throw Error(
              'Expected ref to be a function, a string, an object returned by React.createRef(), or null.'
            );
          if (!element._owner)
            throw Error(`Element ref was specified as a string (${mixedRef}) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://fb.me/react-refs-must-have-owner for more information.`);
        }
        return mixedRef;
      }
      function throwOnInvalidObjectType(returnFiber, newChild) {
        if (returnFiber.type !== 'textarea') {
          let addendum = '';
          throw (
            ((addendum = ` If you meant to render a collection of children, use an array instead.${getCurrentFiberStackInDev()}`),
            Error(
              `Objects are not valid as a React child (found: ${
                Object.prototype.toString.call(newChild) === '[object Object]'
                  ? `object with keys {${Object.keys(newChild).join(', ')}}`
                  : newChild
              }).${addendum}`
            ))
          );
        }
      }
      function warnOnFunctionType() {
        {
          const currentComponentErrorInfo = `Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.${getCurrentFiberStackInDev()}`;
          if (ownerHasFunctionTypeWarning[currentComponentErrorInfo]) return;
          (ownerHasFunctionTypeWarning[currentComponentErrorInfo] = !0),
            error(
              'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
            );
        }
      }
      function ChildReconciler(shouldTrackSideEffects) {
        function deleteChild(returnFiber, childToDelete) {
          if (shouldTrackSideEffects) {
            const last = returnFiber.lastEffect;
            last !== null
              ? ((last.nextEffect = childToDelete),
                (returnFiber.lastEffect = childToDelete))
              : (returnFiber.firstEffect = returnFiber.lastEffect =
                  childToDelete),
              (childToDelete.nextEffect = null),
              (childToDelete.effectTag = Deletion);
          }
        }
        function deleteRemainingChildren(returnFiber, currentFirstChild) {
          if (!shouldTrackSideEffects) return null;
          for (let childToDelete = currentFirstChild; childToDelete !== null; )
            deleteChild(returnFiber, childToDelete),
              (childToDelete = childToDelete.sibling);
          return null;
        }
        function mapRemainingChildren(returnFiber, currentFirstChild) {
          for (
            var existingChildren = new Map(), existingChild = currentFirstChild;
            existingChild !== null;

          )
            existingChild.key !== null
              ? existingChildren.set(existingChild.key, existingChild)
              : existingChildren.set(existingChild.index, existingChild),
              (existingChild = existingChild.sibling);
          return existingChildren;
        }
        function useFiber(fiber, pendingProps) {
          const clone = createWorkInProgress(fiber, pendingProps);
          return (clone.index = 0), (clone.sibling = null), clone;
        }
        function placeChild(newFiber, lastPlacedIndex, newIndex) {
          if (((newFiber.index = newIndex), !shouldTrackSideEffects))
            return lastPlacedIndex;
          const current2 = newFiber.alternate;
          if (current2 !== null) {
            const oldIndex = current2.index;
            return oldIndex < lastPlacedIndex
              ? ((newFiber.effectTag = Placement), lastPlacedIndex)
              : oldIndex;
          }
          return (newFiber.effectTag = Placement), lastPlacedIndex;
        }
        function placeSingleChild(newFiber) {
          return (
            shouldTrackSideEffects &&
              newFiber.alternate === null &&
              (newFiber.effectTag = Placement),
            newFiber
          );
        }
        function updateTextNode(
          returnFiber,
          current2,
          textContent,
          expirationTime
        ) {
          if (current2 === null || current2.tag !== HostText) {
            const created = createFiberFromText(
              textContent,
              returnFiber.mode,
              expirationTime
            );
            return (created.return = returnFiber), created;
          }
          const existing = useFiber(current2, textContent);
          return (existing.return = returnFiber), existing;
        }
        function updateElement(returnFiber, current2, element, expirationTime) {
          if (
            current2 !== null &&
            (current2.elementType === element.type ||
              isCompatibleFamilyForHotReloading(current2, element))
          ) {
            const existing = useFiber(current2, element.props);
            return (
              (existing.ref = coerceRef(returnFiber, current2, element)),
              (existing.return = returnFiber),
              (existing._debugSource = element._source),
              (existing._debugOwner = element._owner),
              existing
            );
          }
          const created = createFiberFromElement(
            element,
            returnFiber.mode,
            expirationTime
          );
          return (
            (created.ref = coerceRef(returnFiber, current2, element)),
            (created.return = returnFiber),
            created
          );
        }
        function updatePortal(returnFiber, current2, portal, expirationTime) {
          if (
            current2 === null ||
            current2.tag !== HostPortal ||
            current2.stateNode.containerInfo !== portal.containerInfo ||
            current2.stateNode.implementation !== portal.implementation
          ) {
            const created = createFiberFromPortal(
              portal,
              returnFiber.mode,
              expirationTime
            );
            return (created.return = returnFiber), created;
          }
          const existing = useFiber(current2, portal.children || []);
          return (existing.return = returnFiber), existing;
        }
        function updateFragment2(
          returnFiber,
          current2,
          fragment,
          expirationTime,
          key
        ) {
          if (current2 === null || current2.tag !== Fragment) {
            const created = createFiberFromFragment(
              fragment,
              returnFiber.mode,
              expirationTime,
              key
            );
            return (created.return = returnFiber), created;
          }
          const existing = useFiber(current2, fragment);
          return (existing.return = returnFiber), existing;
        }
        function createChild(returnFiber, newChild, expirationTime) {
          if (typeof newChild === 'string' || typeof newChild === 'number') {
            const created = createFiberFromText(
              `${newChild}`,
              returnFiber.mode,
              expirationTime
            );
            return (created.return = returnFiber), created;
          }
          if (typeof newChild === 'object' && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                const _created = createFiberFromElement(
                  newChild,
                  returnFiber.mode,
                  expirationTime
                );
                return (
                  (_created.ref = coerceRef(returnFiber, null, newChild)),
                  (_created.return = returnFiber),
                  _created
                );
              }
              case REACT_PORTAL_TYPE: {
                const _created2 = createFiberFromPortal(
                  newChild,
                  returnFiber.mode,
                  expirationTime
                );
                return (_created2.return = returnFiber), _created2;
              }
            }
            if (isArray$1(newChild) || getIteratorFn(newChild)) {
              const _created3 = createFiberFromFragment(
                newChild,
                returnFiber.mode,
                expirationTime,
                null
              );
              return (_created3.return = returnFiber), _created3;
            }
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          return typeof newChild === 'function' && warnOnFunctionType(), null;
        }
        function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
          const key = oldFiber !== null ? oldFiber.key : null;
          if (typeof newChild === 'string' || typeof newChild === 'number')
            return key !== null
              ? null
              : updateTextNode(
                  returnFiber,
                  oldFiber,
                  `${newChild}`,
                  expirationTime
                );
          if (typeof newChild === 'object' && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return newChild.key === key
                  ? newChild.type === REACT_FRAGMENT_TYPE
                    ? updateFragment2(
                        returnFiber,
                        oldFiber,
                        newChild.props.children,
                        expirationTime,
                        key
                      )
                    : updateElement(
                        returnFiber,
                        oldFiber,
                        newChild,
                        expirationTime
                      )
                  : null;
              case REACT_PORTAL_TYPE:
                return newChild.key === key
                  ? updatePortal(
                      returnFiber,
                      oldFiber,
                      newChild,
                      expirationTime
                    )
                  : null;
            }
            if (isArray$1(newChild) || getIteratorFn(newChild))
              return key !== null
                ? null
                : updateFragment2(
                    returnFiber,
                    oldFiber,
                    newChild,
                    expirationTime,
                    null
                  );
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          return typeof newChild === 'function' && warnOnFunctionType(), null;
        }
        function updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          newChild,
          expirationTime
        ) {
          if (typeof newChild === 'string' || typeof newChild === 'number') {
            const matchedFiber = existingChildren.get(newIdx) || null;
            return updateTextNode(
              returnFiber,
              matchedFiber,
              `${newChild}`,
              expirationTime
            );
          }
          if (typeof newChild === 'object' && newChild !== null) {
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                const _matchedFiber =
                  existingChildren.get(
                    newChild.key === null ? newIdx : newChild.key
                  ) || null;
                return newChild.type === REACT_FRAGMENT_TYPE
                  ? updateFragment2(
                      returnFiber,
                      _matchedFiber,
                      newChild.props.children,
                      expirationTime,
                      newChild.key
                    )
                  : updateElement(
                      returnFiber,
                      _matchedFiber,
                      newChild,
                      expirationTime
                    );
              }
              case REACT_PORTAL_TYPE: {
                const _matchedFiber2 =
                  existingChildren.get(
                    newChild.key === null ? newIdx : newChild.key
                  ) || null;
                return updatePortal(
                  returnFiber,
                  _matchedFiber2,
                  newChild,
                  expirationTime
                );
              }
            }
            if (isArray$1(newChild) || getIteratorFn(newChild)) {
              const _matchedFiber3 = existingChildren.get(newIdx) || null;
              return updateFragment2(
                returnFiber,
                _matchedFiber3,
                newChild,
                expirationTime,
                null
              );
            }
            throwOnInvalidObjectType(returnFiber, newChild);
          }
          return typeof newChild === 'function' && warnOnFunctionType(), null;
        }
        function warnOnInvalidKey(child, knownKeys) {
          {
            if (typeof child !== 'object' || child === null) return knownKeys;
            switch (child.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                warnForMissingKey(child);
                var { key } = child;
                if (typeof key !== 'string') break;
                if (knownKeys === null) {
                  (knownKeys = new Set()), knownKeys.add(key);
                  break;
                }
                if (!knownKeys.has(key)) {
                  knownKeys.add(key);
                  break;
                }
                error(
                  'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.',
                  key
                );
                break;
            }
          }
          return knownKeys;
        }
        function reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChildren,
          expirationTime
        ) {
          for (let knownKeys = null, i = 0; i < newChildren.length; i++) {
            const child = newChildren[i];
            knownKeys = warnOnInvalidKey(child, knownKeys);
          }
          for (
            var resultingFirstChild = null,
              previousNewFiber = null,
              oldFiber = currentFirstChild,
              lastPlacedIndex = 0,
              newIdx = 0,
              nextOldFiber = null;
            oldFiber !== null && newIdx < newChildren.length;
            newIdx++
          ) {
            oldFiber.index > newIdx
              ? ((nextOldFiber = oldFiber), (oldFiber = null))
              : (nextOldFiber = oldFiber.sibling);
            const newFiber = updateSlot(
              returnFiber,
              oldFiber,
              newChildren[newIdx],
              expirationTime
            );
            if (newFiber === null) {
              oldFiber === null && (oldFiber = nextOldFiber);
              break;
            }
            shouldTrackSideEffects &&
              oldFiber &&
              newFiber.alternate === null &&
              deleteChild(returnFiber, oldFiber),
              (lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx)),
              previousNewFiber === null
                ? (resultingFirstChild = newFiber)
                : (previousNewFiber.sibling = newFiber),
              (previousNewFiber = newFiber),
              (oldFiber = nextOldFiber);
          }
          if (newIdx === newChildren.length)
            return (
              deleteRemainingChildren(returnFiber, oldFiber),
              resultingFirstChild
            );
          if (oldFiber === null) {
            for (; newIdx < newChildren.length; newIdx++) {
              const _newFiber = createChild(
                returnFiber,
                newChildren[newIdx],
                expirationTime
              );
              _newFiber !== null &&
                ((lastPlacedIndex = placeChild(
                  _newFiber,
                  lastPlacedIndex,
                  newIdx
                )),
                previousNewFiber === null
                  ? (resultingFirstChild = _newFiber)
                  : (previousNewFiber.sibling = _newFiber),
                (previousNewFiber = _newFiber));
            }
            return resultingFirstChild;
          }
          for (
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            newIdx < newChildren.length;
            newIdx++
          ) {
            const _newFiber2 = updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              newChildren[newIdx],
              expirationTime
            );
            _newFiber2 !== null &&
              (shouldTrackSideEffects &&
                _newFiber2.alternate !== null &&
                existingChildren.delete(
                  _newFiber2.key === null ? newIdx : _newFiber2.key
                ),
              (lastPlacedIndex = placeChild(
                _newFiber2,
                lastPlacedIndex,
                newIdx
              )),
              previousNewFiber === null
                ? (resultingFirstChild = _newFiber2)
                : (previousNewFiber.sibling = _newFiber2),
              (previousNewFiber = _newFiber2));
          }
          return (
            shouldTrackSideEffects &&
              existingChildren.forEach((child2) =>
                deleteChild(returnFiber, child2)
              ),
            resultingFirstChild
          );
        }
        function reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChildrenIterable,
          expirationTime
        ) {
          const iteratorFn = getIteratorFn(newChildrenIterable);
          if (typeof iteratorFn !== 'function')
            throw Error(
              'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
            );
          {
            typeof Symbol === 'function' &&
              newChildrenIterable[Symbol.toStringTag] === 'Generator' &&
              (didWarnAboutGenerators ||
                error(
                  'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
                ),
              (didWarnAboutGenerators = !0)),
              newChildrenIterable.entries === iteratorFn &&
                (didWarnAboutMaps ||
                  error(
                    'Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.'
                  ),
                (didWarnAboutMaps = !0));
            const _newChildren = iteratorFn.call(newChildrenIterable);
            if (_newChildren)
              for (
                let knownKeys = null, _step = _newChildren.next();
                !_step.done;
                _step = _newChildren.next()
              ) {
                const child = _step.value;
                knownKeys = warnOnInvalidKey(child, knownKeys);
              }
          }
          const newChildren = iteratorFn.call(newChildrenIterable);
          if (newChildren == null)
            throw Error('An iterable object provided no iterator.');
          for (
            var resultingFirstChild = null,
              previousNewFiber = null,
              oldFiber = currentFirstChild,
              lastPlacedIndex = 0,
              newIdx = 0,
              nextOldFiber = null,
              step = newChildren.next();
            oldFiber !== null && !step.done;
            newIdx++, step = newChildren.next()
          ) {
            oldFiber.index > newIdx
              ? ((nextOldFiber = oldFiber), (oldFiber = null))
              : (nextOldFiber = oldFiber.sibling);
            const newFiber = updateSlot(
              returnFiber,
              oldFiber,
              step.value,
              expirationTime
            );
            if (newFiber === null) {
              oldFiber === null && (oldFiber = nextOldFiber);
              break;
            }
            shouldTrackSideEffects &&
              oldFiber &&
              newFiber.alternate === null &&
              deleteChild(returnFiber, oldFiber),
              (lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx)),
              previousNewFiber === null
                ? (resultingFirstChild = newFiber)
                : (previousNewFiber.sibling = newFiber),
              (previousNewFiber = newFiber),
              (oldFiber = nextOldFiber);
          }
          if (step.done)
            return (
              deleteRemainingChildren(returnFiber, oldFiber),
              resultingFirstChild
            );
          if (oldFiber === null) {
            for (; !step.done; newIdx++, step = newChildren.next()) {
              const _newFiber3 = createChild(
                returnFiber,
                step.value,
                expirationTime
              );
              _newFiber3 !== null &&
                ((lastPlacedIndex = placeChild(
                  _newFiber3,
                  lastPlacedIndex,
                  newIdx
                )),
                previousNewFiber === null
                  ? (resultingFirstChild = _newFiber3)
                  : (previousNewFiber.sibling = _newFiber3),
                (previousNewFiber = _newFiber3));
            }
            return resultingFirstChild;
          }
          for (
            var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
            !step.done;
            newIdx++, step = newChildren.next()
          ) {
            const _newFiber4 = updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              step.value,
              expirationTime
            );
            _newFiber4 !== null &&
              (shouldTrackSideEffects &&
                _newFiber4.alternate !== null &&
                existingChildren.delete(
                  _newFiber4.key === null ? newIdx : _newFiber4.key
                ),
              (lastPlacedIndex = placeChild(
                _newFiber4,
                lastPlacedIndex,
                newIdx
              )),
              previousNewFiber === null
                ? (resultingFirstChild = _newFiber4)
                : (previousNewFiber.sibling = _newFiber4),
              (previousNewFiber = _newFiber4));
          }
          return (
            shouldTrackSideEffects &&
              existingChildren.forEach((child2) =>
                deleteChild(returnFiber, child2)
              ),
            resultingFirstChild
          );
        }
        function reconcileSingleTextNode(
          returnFiber,
          currentFirstChild,
          textContent,
          expirationTime
        ) {
          if (
            currentFirstChild !== null &&
            currentFirstChild.tag === HostText
          ) {
            deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
            const existing = useFiber(currentFirstChild, textContent);
            return (existing.return = returnFiber), existing;
          }
          deleteRemainingChildren(returnFiber, currentFirstChild);
          const created = createFiberFromText(
            textContent,
            returnFiber.mode,
            expirationTime
          );
          return (created.return = returnFiber), created;
        }
        function reconcileSingleElement(
          returnFiber,
          currentFirstChild,
          element,
          expirationTime
        ) {
          for (
            let { key } = element, child = currentFirstChild;
            child !== null;

          ) {
            if (child.key === key) {
              switch (child.tag) {
                case Fragment: {
                  if (element.type === REACT_FRAGMENT_TYPE) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    const existing = useFiber(child, element.props.children);
                    return (
                      (existing.return = returnFiber),
                      (existing._debugSource = element._source),
                      (existing._debugOwner = element._owner),
                      existing
                    );
                  }
                  break;
                }
                case Block:
                default: {
                  if (
                    child.elementType === element.type ||
                    isCompatibleFamilyForHotReloading(child, element)
                  ) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    const _existing3 = useFiber(child, element.props);
                    return (
                      (_existing3.ref = coerceRef(returnFiber, child, element)),
                      (_existing3.return = returnFiber),
                      (_existing3._debugSource = element._source),
                      (_existing3._debugOwner = element._owner),
                      _existing3
                    );
                  }
                  break;
                }
              }
              deleteRemainingChildren(returnFiber, child);
              break;
            } else deleteChild(returnFiber, child);
            child = child.sibling;
          }
          if (element.type === REACT_FRAGMENT_TYPE) {
            const created = createFiberFromFragment(
              element.props.children,
              returnFiber.mode,
              expirationTime,
              element.key
            );
            return (created.return = returnFiber), created;
          }
          const _created4 = createFiberFromElement(
            element,
            returnFiber.mode,
            expirationTime
          );
          return (
            (_created4.ref = coerceRef(
              returnFiber,
              currentFirstChild,
              element
            )),
            (_created4.return = returnFiber),
            _created4
          );
        }
        function reconcileSinglePortal(
          returnFiber,
          currentFirstChild,
          portal,
          expirationTime
        ) {
          for (
            let { key } = portal, child = currentFirstChild;
            child !== null;

          ) {
            if (child.key === key)
              if (
                child.tag === HostPortal &&
                child.stateNode.containerInfo === portal.containerInfo &&
                child.stateNode.implementation === portal.implementation
              ) {
                deleteRemainingChildren(returnFiber, child.sibling);
                const existing = useFiber(child, portal.children || []);
                return (existing.return = returnFiber), existing;
              } else {
                deleteRemainingChildren(returnFiber, child);
                break;
              }
            else deleteChild(returnFiber, child);
            child = child.sibling;
          }
          const created = createFiberFromPortal(
            portal,
            returnFiber.mode,
            expirationTime
          );
          return (created.return = returnFiber), created;
        }
        function reconcileChildFibers2(
          returnFiber,
          currentFirstChild,
          newChild,
          expirationTime
        ) {
          const isUnkeyedTopLevelFragment =
            typeof newChild === 'object' &&
            newChild !== null &&
            newChild.type === REACT_FRAGMENT_TYPE &&
            newChild.key === null;
          isUnkeyedTopLevelFragment && (newChild = newChild.props.children);
          const isObject = typeof newChild === 'object' && newChild !== null;
          if (isObject)
            switch (newChild.$$typeof) {
              case REACT_ELEMENT_TYPE:
                return placeSingleChild(
                  reconcileSingleElement(
                    returnFiber,
                    currentFirstChild,
                    newChild,
                    expirationTime
                  )
                );
              case REACT_PORTAL_TYPE:
                return placeSingleChild(
                  reconcileSinglePortal(
                    returnFiber,
                    currentFirstChild,
                    newChild,
                    expirationTime
                  )
                );
            }
          if (typeof newChild === 'string' || typeof newChild === 'number')
            return placeSingleChild(
              reconcileSingleTextNode(
                returnFiber,
                currentFirstChild,
                `${newChild}`,
                expirationTime
              )
            );
          if (isArray$1(newChild))
            return reconcileChildrenArray(
              returnFiber,
              currentFirstChild,
              newChild,
              expirationTime
            );
          if (getIteratorFn(newChild))
            return reconcileChildrenIterator(
              returnFiber,
              currentFirstChild,
              newChild,
              expirationTime
            );
          if (
            (isObject && throwOnInvalidObjectType(returnFiber, newChild),
            typeof newChild === 'function' && warnOnFunctionType(),
            typeof newChild > 'u' && !isUnkeyedTopLevelFragment)
          )
            switch (returnFiber.tag) {
              case ClassComponent: {
                const instance = returnFiber.stateNode;
                if (instance.render._isMockFunction) break;
              }
              case FunctionComponent: {
                const Component = returnFiber.type;
                throw Error(
                  `${
                    Component.displayName || Component.name || 'Component'
                  }(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.`
                );
              }
            }
          return deleteRemainingChildren(returnFiber, currentFirstChild);
        }
        return reconcileChildFibers2;
      }
      const reconcileChildFibers = ChildReconciler(!0);
      const mountChildFibers = ChildReconciler(!1);
      function cloneChildFibers(current2, workInProgress2) {
        if (!(current2 === null || workInProgress2.child === current2.child))
          throw Error('Resuming work not yet implemented.');
        if (workInProgress2.child !== null) {
          let currentChild = workInProgress2.child;
          let newChild = createWorkInProgress(
            currentChild,
            currentChild.pendingProps
          );
          for (
            workInProgress2.child = newChild, newChild.return = workInProgress2;
            currentChild.sibling !== null;

          )
            (currentChild = currentChild.sibling),
              (newChild = newChild.sibling =
                createWorkInProgress(currentChild, currentChild.pendingProps)),
              (newChild.return = workInProgress2);
          newChild.sibling = null;
        }
      }
      function resetChildFibers(workInProgress2, renderExpirationTime2) {
        for (let { child } = workInProgress2; child !== null; )
          resetWorkInProgress(child, renderExpirationTime2),
            (child = child.sibling);
      }
      const NO_CONTEXT = {};
      const contextStackCursor$1 = createCursor(NO_CONTEXT);
      const contextFiberStackCursor = createCursor(NO_CONTEXT);
      const rootInstanceStackCursor = createCursor(NO_CONTEXT);
      function requiredContext(c) {
        if (c === NO_CONTEXT)
          throw Error(
            'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
          );
        return c;
      }
      function getRootHostContainer() {
        const rootInstance = requiredContext(rootInstanceStackCursor.current);
        return rootInstance;
      }
      function pushHostContainer(fiber, nextRootInstance) {
        push(rootInstanceStackCursor, nextRootInstance, fiber),
          push(contextFiberStackCursor, fiber, fiber),
          push(contextStackCursor$1, NO_CONTEXT, fiber);
        const nextRootContext = getRootHostContext(nextRootInstance);
        pop(contextStackCursor$1, fiber),
          push(contextStackCursor$1, nextRootContext, fiber);
      }
      function popHostContainer(fiber) {
        pop(contextStackCursor$1, fiber),
          pop(contextFiberStackCursor, fiber),
          pop(rootInstanceStackCursor, fiber);
      }
      function getHostContext() {
        const context = requiredContext(contextStackCursor$1.current);
        return context;
      }
      function pushHostContext(fiber) {
        const rootInstance = requiredContext(rootInstanceStackCursor.current);
        const context = requiredContext(contextStackCursor$1.current);
        const nextContext = getChildHostContext(context, fiber.type);
        context !== nextContext &&
          (push(contextFiberStackCursor, fiber, fiber),
          push(contextStackCursor$1, nextContext, fiber));
      }
      function popHostContext(fiber) {
        contextFiberStackCursor.current === fiber &&
          (pop(contextStackCursor$1, fiber),
          pop(contextFiberStackCursor, fiber));
      }
      const DefaultSuspenseContext = 0;
      const SubtreeSuspenseContextMask = 1;
      const InvisibleParentSuspenseContext = 1;
      const ForceSuspenseFallback = 2;
      const suspenseStackCursor = createCursor(DefaultSuspenseContext);
      function hasSuspenseContext(parentContext, flag) {
        return (parentContext & flag) !== 0;
      }
      function setDefaultShallowSuspenseContext(parentContext) {
        return parentContext & SubtreeSuspenseContextMask;
      }
      function setShallowSuspenseContext(parentContext, shallowContext) {
        return (parentContext & SubtreeSuspenseContextMask) | shallowContext;
      }
      function addSubtreeSuspenseContext(parentContext, subtreeContext) {
        return parentContext | subtreeContext;
      }
      function pushSuspenseContext(fiber, newContext) {
        push(suspenseStackCursor, newContext, fiber);
      }
      function popSuspenseContext(fiber) {
        pop(suspenseStackCursor, fiber);
      }
      function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
        const nextState = workInProgress2.memoizedState;
        if (nextState !== null) return nextState.dehydrated !== null;
        const props = workInProgress2.memoizedProps;
        return props.fallback === void 0
          ? !1
          : props.unstable_avoidThisFallback !== !0
          ? !0
          : !hasInvisibleParent;
      }
      function findFirstSuspended(row) {
        for (let node = row; node !== null; ) {
          if (node.tag === SuspenseComponent) {
            const state = node.memoizedState;
            if (state !== null) {
              const { dehydrated } = state;
              if (
                dehydrated === null ||
                isSuspenseInstancePending(dehydrated) ||
                isSuspenseInstanceFallback(dehydrated)
              )
                return node;
            }
          } else if (
            node.tag === SuspenseListComponent &&
            node.memoizedProps.revealOrder !== void 0
          ) {
            const didSuspend = (node.effectTag & DidCapture) !== NoEffect;
            if (didSuspend) return node;
          } else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === row) return null;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === row) return null;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
        return null;
      }
      function createDeprecatedResponderListener(responder, props) {
        const eventResponderListener = { responder, props };
        return Object.freeze(eventResponderListener), eventResponderListener;
      }
      const HasEffect = 1;
      const Layout = 2;
      const Passive$1 = 4;
      const { ReactCurrentDispatcher } = ReactSharedInternals;
      const ReactCurrentBatchConfig$1 =
        ReactSharedInternals.ReactCurrentBatchConfig;
      let didWarnAboutMismatchedHooksForComponent;
      didWarnAboutMismatchedHooksForComponent = new Set();
      let renderExpirationTime = NoWork;
      let currentlyRenderingFiber$1 = null;
      let currentHook = null;
      let workInProgressHook = null;
      let didScheduleRenderPhaseUpdate = !1;
      const RE_RENDER_LIMIT = 25;
      let currentHookNameInDev = null;
      let hookTypesDev = null;
      let hookTypesUpdateIndexDev = -1;
      let ignorePreviousDependencies = !1;
      function mountHookTypesDev() {
        {
          const hookName = currentHookNameInDev;
          hookTypesDev === null
            ? (hookTypesDev = [hookName])
            : hookTypesDev.push(hookName);
        }
      }
      function updateHookTypesDev() {
        {
          const hookName = currentHookNameInDev;
          hookTypesDev !== null &&
            (hookTypesUpdateIndexDev++,
            hookTypesDev[hookTypesUpdateIndexDev] !== hookName &&
              warnOnHookMismatchInDev(hookName));
        }
      }
      function checkDepsAreArrayDev(deps) {
        deps != null &&
          !Array.isArray(deps) &&
          error(
            '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
            currentHookNameInDev,
            typeof deps
          );
      }
      function warnOnHookMismatchInDev(currentHookName) {
        {
          const componentName = getComponentName(
            currentlyRenderingFiber$1.type
          );
          if (
            !didWarnAboutMismatchedHooksForComponent.has(componentName) &&
            (didWarnAboutMismatchedHooksForComponent.add(componentName),
            hookTypesDev !== null)
          ) {
            for (
              var table = '', secondColumnStart = 30, i = 0;
              i <= hookTypesUpdateIndexDev;
              i++
            ) {
              for (
                var oldHookName = hookTypesDev[i],
                  newHookName =
                    i === hookTypesUpdateIndexDev
                      ? currentHookName
                      : oldHookName,
                  row = `${i + 1}. ${oldHookName}`;
                row.length < secondColumnStart;

              )
                row += ' ';
              (row += `${newHookName}
`),
                (table += row);
            }
            error(
              `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
              componentName,
              table
            );
          }
        }
      }
      function throwInvalidHookError() {
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (ignorePreviousDependencies) return !1;
        if (prevDeps === null)
          return (
            error(
              '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
              currentHookNameInDev
            ),
            !1
          );
        nextDeps.length !== prevDeps.length &&
          error(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            currentHookNameInDev,
            `[${prevDeps.join(', ')}]`,
            `[${nextDeps.join(', ')}]`
          );
        for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++)
          if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
        return !0;
      }
      function renderWithHooks(
        current2,
        workInProgress2,
        Component,
        props,
        secondArg,
        nextRenderExpirationTime
      ) {
        (renderExpirationTime = nextRenderExpirationTime),
          (currentlyRenderingFiber$1 = workInProgress2),
          (hookTypesDev = current2 !== null ? current2._debugHookTypes : null),
          (hookTypesUpdateIndexDev = -1),
          (ignorePreviousDependencies =
            current2 !== null && current2.type !== workInProgress2.type),
          (workInProgress2.memoizedState = null),
          (workInProgress2.updateQueue = null),
          (workInProgress2.expirationTime = NoWork),
          current2 !== null && current2.memoizedState !== null
            ? (ReactCurrentDispatcher.current = HooksDispatcherOnUpdateInDEV)
            : hookTypesDev !== null
            ? (ReactCurrentDispatcher.current =
                HooksDispatcherOnMountWithHookTypesInDEV)
            : (ReactCurrentDispatcher.current = HooksDispatcherOnMountInDEV);
        let children = Component(props, secondArg);
        if (workInProgress2.expirationTime === renderExpirationTime) {
          let numberOfReRenders = 0;
          do {
            if (
              ((workInProgress2.expirationTime = NoWork),
              !(numberOfReRenders < RE_RENDER_LIMIT))
            )
              throw Error(
                'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
              );
            (numberOfReRenders += 1),
              (ignorePreviousDependencies = !1),
              (currentHook = null),
              (workInProgressHook = null),
              (workInProgress2.updateQueue = null),
              (hookTypesUpdateIndexDev = -1),
              (ReactCurrentDispatcher.current = HooksDispatcherOnRerenderInDEV),
              (children = Component(props, secondArg));
          } while (workInProgress2.expirationTime === renderExpirationTime);
        }
        (ReactCurrentDispatcher.current = ContextOnlyDispatcher),
          (workInProgress2._debugHookTypes = hookTypesDev);
        const didRenderTooFewHooks =
          currentHook !== null && currentHook.next !== null;
        if (
          ((renderExpirationTime = NoWork),
          (currentlyRenderingFiber$1 = null),
          (currentHook = null),
          (workInProgressHook = null),
          (currentHookNameInDev = null),
          (hookTypesDev = null),
          (hookTypesUpdateIndexDev = -1),
          (didScheduleRenderPhaseUpdate = !1),
          didRenderTooFewHooks)
        )
          throw Error(
            'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
          );
        return children;
      }
      function bailoutHooks(current2, workInProgress2, expirationTime) {
        (workInProgress2.updateQueue = current2.updateQueue),
          (workInProgress2.effectTag &= ~(Passive | Update)),
          current2.expirationTime <= expirationTime &&
            (current2.expirationTime = NoWork);
      }
      function resetHooksAfterThrow() {
        if (
          ((ReactCurrentDispatcher.current = ContextOnlyDispatcher),
          didScheduleRenderPhaseUpdate)
        )
          for (
            let hook = currentlyRenderingFiber$1.memoizedState;
            hook !== null;

          ) {
            const { queue } = hook;
            queue !== null && (queue.pending = null), (hook = hook.next);
          }
        (renderExpirationTime = NoWork),
          (currentlyRenderingFiber$1 = null),
          (currentHook = null),
          (workInProgressHook = null),
          (hookTypesDev = null),
          (hookTypesUpdateIndexDev = -1),
          (currentHookNameInDev = null),
          (didScheduleRenderPhaseUpdate = !1);
      }
      function mountWorkInProgressHook() {
        const hook = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          workInProgressHook === null
            ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook =
                hook)
            : (workInProgressHook = workInProgressHook.next = hook),
          workInProgressHook
        );
      }
      function updateWorkInProgressHook() {
        let nextCurrentHook;
        if (currentHook === null) {
          const current2 = currentlyRenderingFiber$1.alternate;
          current2 !== null
            ? (nextCurrentHook = current2.memoizedState)
            : (nextCurrentHook = null);
        } else nextCurrentHook = currentHook.next;
        let nextWorkInProgressHook;
        if (
          (workInProgressHook === null
            ? (nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState)
            : (nextWorkInProgressHook = workInProgressHook.next),
          nextWorkInProgressHook !== null)
        )
          (workInProgressHook = nextWorkInProgressHook),
            (nextWorkInProgressHook = workInProgressHook.next),
            (currentHook = nextCurrentHook);
        else {
          if (nextCurrentHook === null)
            throw Error('Rendered more hooks than during the previous render.');
          currentHook = nextCurrentHook;
          const newHook = {
            memoizedState: currentHook.memoizedState,
            baseState: currentHook.baseState,
            baseQueue: currentHook.baseQueue,
            queue: currentHook.queue,
            next: null,
          };
          workInProgressHook === null
            ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook =
                newHook)
            : (workInProgressHook = workInProgressHook.next = newHook);
        }
        return workInProgressHook;
      }
      function createFunctionComponentUpdateQueue() {
        return { lastEffect: null };
      }
      function basicStateReducer(state, action) {
        return typeof action === 'function' ? action(state) : action;
      }
      function mountReducer(reducer, initialArg, init) {
        const hook = mountWorkInProgressHook();
        let initialState;
        init !== void 0
          ? (initialState = init(initialArg))
          : (initialState = initialArg),
          (hook.memoizedState = hook.baseState = initialState);
        const queue = (hook.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState,
        });
        const dispatch = (queue.dispatch = dispatchAction.bind(
          null,
          currentlyRenderingFiber$1,
          queue
        ));
        return [hook.memoizedState, dispatch];
      }
      function updateReducer(reducer, initialArg, init) {
        const hook = updateWorkInProgressHook();
        const { queue } = hook;
        if (queue === null)
          throw Error(
            'Should have a queue. This is likely a bug in React. Please file an issue.'
          );
        queue.lastRenderedReducer = reducer;
        const current2 = currentHook;
        let { baseQueue } = current2;
        const pendingQueue = queue.pending;
        if (pendingQueue !== null) {
          if (baseQueue !== null) {
            const baseFirst = baseQueue.next;
            const pendingFirst = pendingQueue.next;
            (baseQueue.next = pendingFirst), (pendingQueue.next = baseFirst);
          }
          (current2.baseQueue = baseQueue = pendingQueue),
            (queue.pending = null);
        }
        if (baseQueue !== null) {
          const first = baseQueue.next;
          let newState = current2.baseState;
          let newBaseState = null;
          let newBaseQueueFirst = null;
          let newBaseQueueLast = null;
          let update = first;
          do {
            const updateExpirationTime = update.expirationTime;
            if (updateExpirationTime < renderExpirationTime) {
              const clone = {
                expirationTime: update.expirationTime,
                suspenseConfig: update.suspenseConfig,
                action: update.action,
                eagerReducer: update.eagerReducer,
                eagerState: update.eagerState,
                next: null,
              };
              newBaseQueueLast === null
                ? ((newBaseQueueFirst = newBaseQueueLast = clone),
                  (newBaseState = newState))
                : (newBaseQueueLast = newBaseQueueLast.next = clone),
                updateExpirationTime >
                  currentlyRenderingFiber$1.expirationTime &&
                  ((currentlyRenderingFiber$1.expirationTime =
                    updateExpirationTime),
                  markUnprocessedUpdateTime(updateExpirationTime));
            } else {
              if (newBaseQueueLast !== null) {
                const _clone = {
                  expirationTime: Sync,
                  suspenseConfig: update.suspenseConfig,
                  action: update.action,
                  eagerReducer: update.eagerReducer,
                  eagerState: update.eagerState,
                  next: null,
                };
                newBaseQueueLast = newBaseQueueLast.next = _clone;
              }
              if (
                (markRenderEventTimeAndConfig(
                  updateExpirationTime,
                  update.suspenseConfig
                ),
                update.eagerReducer === reducer)
              )
                newState = update.eagerState;
              else {
                const { action } = update;
                newState = reducer(newState, action);
              }
            }
            update = update.next;
          } while (update !== null && update !== first);
          newBaseQueueLast === null
            ? (newBaseState = newState)
            : (newBaseQueueLast.next = newBaseQueueFirst),
            objectIs(newState, hook.memoizedState) ||
              markWorkInProgressReceivedUpdate(),
            (hook.memoizedState = newState),
            (hook.baseState = newBaseState),
            (hook.baseQueue = newBaseQueueLast),
            (queue.lastRenderedState = newState);
        }
        const { dispatch } = queue;
        return [hook.memoizedState, dispatch];
      }
      function rerenderReducer(reducer, initialArg, init) {
        const hook = updateWorkInProgressHook();
        const { queue } = hook;
        if (queue === null)
          throw Error(
            'Should have a queue. This is likely a bug in React. Please file an issue.'
          );
        queue.lastRenderedReducer = reducer;
        const { dispatch } = queue;
        const lastRenderPhaseUpdate = queue.pending;
        let newState = hook.memoizedState;
        if (lastRenderPhaseUpdate !== null) {
          queue.pending = null;
          const firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
          let update = firstRenderPhaseUpdate;
          do {
            const { action } = update;
            (newState = reducer(newState, action)), (update = update.next);
          } while (update !== firstRenderPhaseUpdate);
          objectIs(newState, hook.memoizedState) ||
            markWorkInProgressReceivedUpdate(),
            (hook.memoizedState = newState),
            hook.baseQueue === null && (hook.baseState = newState),
            (queue.lastRenderedState = newState);
        }
        return [newState, dispatch];
      }
      function mountState(initialState) {
        const hook = mountWorkInProgressHook();
        typeof initialState === 'function' && (initialState = initialState()),
          (hook.memoizedState = hook.baseState = initialState);
        const queue = (hook.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialState,
        });
        const dispatch = (queue.dispatch = dispatchAction.bind(
          null,
          currentlyRenderingFiber$1,
          queue
        ));
        return [hook.memoizedState, dispatch];
      }
      function updateState(initialState) {
        return updateReducer(basicStateReducer);
      }
      function rerenderState(initialState) {
        return rerenderReducer(basicStateReducer);
      }
      function pushEffect(tag, create, destroy, deps) {
        const effect4 = { tag, create, destroy, deps, next: null };
        let componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
        if (componentUpdateQueue === null)
          (componentUpdateQueue = createFunctionComponentUpdateQueue()),
            (currentlyRenderingFiber$1.updateQueue = componentUpdateQueue),
            (componentUpdateQueue.lastEffect = effect4.next = effect4);
        else {
          const { lastEffect } = componentUpdateQueue;
          if (lastEffect === null)
            componentUpdateQueue.lastEffect = effect4.next = effect4;
          else {
            const firstEffect = lastEffect.next;
            (lastEffect.next = effect4),
              (effect4.next = firstEffect),
              (componentUpdateQueue.lastEffect = effect4);
          }
        }
        return effect4;
      }
      function mountRef(initialValue) {
        const hook = mountWorkInProgressHook();
        const ref = { current: initialValue };
        return Object.seal(ref), (hook.memoizedState = ref), ref;
      }
      function updateRef(initialValue) {
        const hook = updateWorkInProgressHook();
        return hook.memoizedState;
      }
      function mountEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        const hook = mountWorkInProgressHook();
        const nextDeps = deps === void 0 ? null : deps;
        (currentlyRenderingFiber$1.effectTag |= fiberEffectTag),
          (hook.memoizedState = pushEffect(
            HasEffect | hookEffectTag,
            create,
            void 0,
            nextDeps
          ));
      }
      function updateEffectImpl(fiberEffectTag, hookEffectTag, create, deps) {
        const hook = updateWorkInProgressHook();
        const nextDeps = deps === void 0 ? null : deps;
        let destroy = void 0;
        if (currentHook !== null) {
          const prevEffect = currentHook.memoizedState;
          if (((destroy = prevEffect.destroy), nextDeps !== null)) {
            const prevDeps = prevEffect.deps;
            if (areHookInputsEqual(nextDeps, prevDeps)) {
              pushEffect(hookEffectTag, create, destroy, nextDeps);
              return;
            }
          }
        }
        (currentlyRenderingFiber$1.effectTag |= fiberEffectTag),
          (hook.memoizedState = pushEffect(
            HasEffect | hookEffectTag,
            create,
            destroy,
            nextDeps
          ));
      }
      function mountEffect(create, deps) {
        return (
          typeof jest < 'u' &&
            warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1),
          mountEffectImpl(Update | Passive, Passive$1, create, deps)
        );
      }
      function updateEffect(create, deps) {
        return (
          typeof jest < 'u' &&
            warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1),
          updateEffectImpl(Update | Passive, Passive$1, create, deps)
        );
      }
      function mountLayoutEffect(create, deps) {
        return mountEffectImpl(Update, Layout, create, deps);
      }
      function updateLayoutEffect(create, deps) {
        return updateEffectImpl(Update, Layout, create, deps);
      }
      function imperativeHandleEffect(create, ref) {
        if (typeof ref === 'function') {
          const refCallback = ref;
          const _inst = create();
          return (
            refCallback(_inst),
            function () {
              refCallback(null);
            }
          );
        }
        if (ref != null) {
          const refObject = ref;
          refObject.hasOwnProperty('current') ||
            error(
              'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
              `an object with keys {${Object.keys(refObject).join(', ')}}`
            );
          const _inst2 = create();
          return (
            (refObject.current = _inst2),
            function () {
              refObject.current = null;
            }
          );
        }
      }
      function mountImperativeHandle(ref, create, deps) {
        typeof create !== 'function' &&
          error(
            'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
            create !== null ? typeof create : 'null'
          );
        const effectDeps = deps != null ? deps.concat([ref]) : null;
        return mountEffectImpl(
          Update,
          Layout,
          imperativeHandleEffect.bind(null, create, ref),
          effectDeps
        );
      }
      function updateImperativeHandle(ref, create, deps) {
        typeof create !== 'function' &&
          error(
            'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
            create !== null ? typeof create : 'null'
          );
        const effectDeps = deps != null ? deps.concat([ref]) : null;
        return updateEffectImpl(
          Update,
          Layout,
          imperativeHandleEffect.bind(null, create, ref),
          effectDeps
        );
      }
      function mountDebugValue(value, formatterFn) {}
      const updateDebugValue = mountDebugValue;
      function mountCallback(callback, deps) {
        const hook = mountWorkInProgressHook();
        const nextDeps = deps === void 0 ? null : deps;
        return (hook.memoizedState = [callback, nextDeps]), callback;
      }
      function updateCallback(callback, deps) {
        const hook = updateWorkInProgressHook();
        const nextDeps = deps === void 0 ? null : deps;
        const prevState = hook.memoizedState;
        if (prevState !== null && nextDeps !== null) {
          const prevDeps = prevState[1];
          if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
        }
        return (hook.memoizedState = [callback, nextDeps]), callback;
      }
      function mountMemo(nextCreate, deps) {
        const hook = mountWorkInProgressHook();
        const nextDeps = deps === void 0 ? null : deps;
        const nextValue = nextCreate();
        return (hook.memoizedState = [nextValue, nextDeps]), nextValue;
      }
      function updateMemo(nextCreate, deps) {
        const hook = updateWorkInProgressHook();
        const nextDeps = deps === void 0 ? null : deps;
        const prevState = hook.memoizedState;
        if (prevState !== null && nextDeps !== null) {
          const prevDeps = prevState[1];
          if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
        }
        const nextValue = nextCreate();
        return (hook.memoizedState = [nextValue, nextDeps]), nextValue;
      }
      function mountDeferredValue(value, config) {
        const _mountState = mountState(value);
        const prevValue = _mountState[0];
        const setValue = _mountState[1];
        return (
          mountEffect(() => {
            const previousConfig = ReactCurrentBatchConfig$1.suspense;
            ReactCurrentBatchConfig$1.suspense =
              config === void 0 ? null : config;
            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.suspense = previousConfig;
            }
          }, [value, config]),
          prevValue
        );
      }
      function updateDeferredValue(value, config) {
        const _updateState = updateState();
        const prevValue = _updateState[0];
        const setValue = _updateState[1];
        return (
          updateEffect(() => {
            const previousConfig = ReactCurrentBatchConfig$1.suspense;
            ReactCurrentBatchConfig$1.suspense =
              config === void 0 ? null : config;
            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.suspense = previousConfig;
            }
          }, [value, config]),
          prevValue
        );
      }
      function rerenderDeferredValue(value, config) {
        const _rerenderState = rerenderState();
        const prevValue = _rerenderState[0];
        const setValue = _rerenderState[1];
        return (
          updateEffect(() => {
            const previousConfig = ReactCurrentBatchConfig$1.suspense;
            ReactCurrentBatchConfig$1.suspense =
              config === void 0 ? null : config;
            try {
              setValue(value);
            } finally {
              ReactCurrentBatchConfig$1.suspense = previousConfig;
            }
          }, [value, config]),
          prevValue
        );
      }
      function startTransition(setPending, config, callback) {
        const priorityLevel = getCurrentPriorityLevel();
        runWithPriority$1(
          priorityLevel < UserBlockingPriority$1
            ? UserBlockingPriority$1
            : priorityLevel,
          () => {
            setPending(!0);
          }
        ),
          runWithPriority$1(
            priorityLevel > NormalPriority ? NormalPriority : priorityLevel,
            () => {
              const previousConfig = ReactCurrentBatchConfig$1.suspense;
              ReactCurrentBatchConfig$1.suspense =
                config === void 0 ? null : config;
              try {
                setPending(!1), callback();
              } finally {
                ReactCurrentBatchConfig$1.suspense = previousConfig;
              }
            }
          );
      }
      function mountTransition(config) {
        const _mountState2 = mountState(!1);
        const isPending = _mountState2[0];
        const setPending = _mountState2[1];
        const start2 = mountCallback(
          startTransition.bind(null, setPending, config),
          [setPending, config]
        );
        return [start2, isPending];
      }
      function updateTransition(config) {
        const _updateState2 = updateState();
        const isPending = _updateState2[0];
        const setPending = _updateState2[1];
        const start2 = updateCallback(
          startTransition.bind(null, setPending, config),
          [setPending, config]
        );
        return [start2, isPending];
      }
      function rerenderTransition(config) {
        const _rerenderState2 = rerenderState();
        const isPending = _rerenderState2[0];
        const setPending = _rerenderState2[1];
        const start2 = updateCallback(
          startTransition.bind(null, setPending, config),
          [setPending, config]
        );
        return [start2, isPending];
      }
      function dispatchAction(fiber, queue, action) {
        typeof arguments[3] === 'function' &&
          error(
            "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
          );
        const currentTime = requestCurrentTimeForUpdate();
        const suspenseConfig = requestCurrentSuspenseConfig();
        const expirationTime = computeExpirationForFiber(
          currentTime,
          fiber,
          suspenseConfig
        );
        const update = {
          expirationTime,
          suspenseConfig,
          action,
          eagerReducer: null,
          eagerState: null,
          next: null,
        };
        update.priority = getCurrentPriorityLevel();
        const { pending } = queue;
        pending === null
          ? (update.next = update)
          : ((update.next = pending.next), (pending.next = update)),
          (queue.pending = update);
        const { alternate } = fiber;
        if (
          fiber === currentlyRenderingFiber$1 ||
          (alternate !== null && alternate === currentlyRenderingFiber$1)
        )
          (didScheduleRenderPhaseUpdate = !0),
            (update.expirationTime = renderExpirationTime),
            (currentlyRenderingFiber$1.expirationTime = renderExpirationTime);
        else {
          if (
            fiber.expirationTime === NoWork &&
            (alternate === null || alternate.expirationTime === NoWork)
          ) {
            const { lastRenderedReducer } = queue;
            if (lastRenderedReducer !== null) {
              let prevDispatcher;
              (prevDispatcher = ReactCurrentDispatcher.current),
                (ReactCurrentDispatcher.current =
                  InvalidNestedHooksDispatcherOnUpdateInDEV);
              try {
                const currentState = queue.lastRenderedState;
                const eagerState = lastRenderedReducer(currentState, action);
                if (
                  ((update.eagerReducer = lastRenderedReducer),
                  (update.eagerState = eagerState),
                  objectIs(eagerState, currentState))
                )
                  return;
              } catch {
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            }
          }
          typeof jest < 'u' &&
            (warnIfNotScopedWithMatchingAct(fiber),
            warnIfNotCurrentlyActingUpdatesInDev(fiber)),
            scheduleWork(fiber, expirationTime);
        }
      }
      var ContextOnlyDispatcher = {
        readContext,
        useCallback: throwInvalidHookError,
        useContext: throwInvalidHookError,
        useEffect: throwInvalidHookError,
        useImperativeHandle: throwInvalidHookError,
        useLayoutEffect: throwInvalidHookError,
        useMemo: throwInvalidHookError,
        useReducer: throwInvalidHookError,
        useRef: throwInvalidHookError,
        useState: throwInvalidHookError,
        useDebugValue: throwInvalidHookError,
        useResponder: throwInvalidHookError,
        useDeferredValue: throwInvalidHookError,
        useTransition: throwInvalidHookError,
      };
      var HooksDispatcherOnMountInDEV = null;
      var HooksDispatcherOnMountWithHookTypesInDEV = null;
      var HooksDispatcherOnUpdateInDEV = null;
      var HooksDispatcherOnRerenderInDEV = null;
      let InvalidNestedHooksDispatcherOnMountInDEV = null;
      var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
      let InvalidNestedHooksDispatcherOnRerenderInDEV = null;
      {
        const warnInvalidContextAccess = function () {
          error(
            'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
          );
        };
        const warnInvalidHookAccess = function () {
          error(
            'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks'
          );
        };
        (HooksDispatcherOnMountInDEV = {
          readContext(context, observedBits) {
            return readContext(context, observedBits);
          },
          useCallback(callback, deps) {
            return (
              (currentHookNameInDev = 'useCallback'),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountCallback(callback, deps)
            );
          },
          useContext(context, observedBits) {
            return (
              (currentHookNameInDev = 'useContext'),
              mountHookTypesDev(),
              readContext(context, observedBits)
            );
          },
          useEffect(create, deps) {
            return (
              (currentHookNameInDev = 'useEffect'),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountEffect(create, deps)
            );
          },
          useImperativeHandle(ref, create, deps) {
            return (
              (currentHookNameInDev = 'useImperativeHandle'),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountImperativeHandle(ref, create, deps)
            );
          },
          useLayoutEffect(create, deps) {
            return (
              (currentHookNameInDev = 'useLayoutEffect'),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps),
              mountLayoutEffect(create, deps)
            );
          },
          useMemo(create, deps) {
            (currentHookNameInDev = 'useMemo'),
              mountHookTypesDev(),
              checkDepsAreArrayDev(deps);
            const prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current =
              InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountMemo(create, deps);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useReducer(reducer, initialArg, init) {
            (currentHookNameInDev = 'useReducer'), mountHookTypesDev();
            const prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current =
              InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountReducer(reducer, initialArg, init);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useRef(initialValue) {
            return (
              (currentHookNameInDev = 'useRef'),
              mountHookTypesDev(),
              mountRef(initialValue)
            );
          },
          useState(initialState) {
            (currentHookNameInDev = 'useState'), mountHookTypesDev();
            const prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current =
              InvalidNestedHooksDispatcherOnMountInDEV;
            try {
              return mountState(initialState);
            } finally {
              ReactCurrentDispatcher.current = prevDispatcher;
            }
          },
          useDebugValue(value, formatterFn) {
            return (
              (currentHookNameInDev = 'useDebugValue'),
              mountHookTypesDev(),
              void 0
            );
          },
          useResponder(responder, props) {
            return (
              (currentHookNameInDev = 'useResponder'),
              mountHookTypesDev(),
              createDeprecatedResponderListener(responder, props)
            );
          },
          useDeferredValue(value, config) {
            return (
              (currentHookNameInDev = 'useDeferredValue'),
              mountHookTypesDev(),
              mountDeferredValue(value, config)
            );
          },
          useTransition(config) {
            return (
              (currentHookNameInDev = 'useTransition'),
              mountHookTypesDev(),
              mountTransition(config)
            );
          },
        }),
          (HooksDispatcherOnMountWithHookTypesInDEV = {
            readContext(context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback(callback, deps) {
              return (
                (currentHookNameInDev = 'useCallback'),
                updateHookTypesDev(),
                mountCallback(callback, deps)
              );
            },
            useContext(context, observedBits) {
              return (
                (currentHookNameInDev = 'useContext'),
                updateHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useEffect'),
                updateHookTypesDev(),
                mountEffect(create, deps)
              );
            },
            useImperativeHandle(ref, create, deps) {
              return (
                (currentHookNameInDev = 'useImperativeHandle'),
                updateHookTypesDev(),
                mountImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useLayoutEffect'),
                updateHookTypesDev(),
                mountLayoutEffect(create, deps)
              );
            },
            useMemo(create, deps) {
              (currentHookNameInDev = 'useMemo'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer(reducer, initialArg, init) {
              (currentHookNameInDev = 'useReducer'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef(initialValue) {
              return (
                (currentHookNameInDev = 'useRef'),
                updateHookTypesDev(),
                mountRef(initialValue)
              );
            },
            useState(initialState) {
              (currentHookNameInDev = 'useState'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue(value, formatterFn) {
              return (
                (currentHookNameInDev = 'useDebugValue'),
                updateHookTypesDev(),
                void 0
              );
            },
            useResponder(responder, props) {
              return (
                (currentHookNameInDev = 'useResponder'),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue(value, config) {
              return (
                (currentHookNameInDev = 'useDeferredValue'),
                updateHookTypesDev(),
                mountDeferredValue(value, config)
              );
            },
            useTransition(config) {
              return (
                (currentHookNameInDev = 'useTransition'),
                updateHookTypesDev(),
                mountTransition(config)
              );
            },
          }),
          (HooksDispatcherOnUpdateInDEV = {
            readContext(context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback(callback, deps) {
              return (
                (currentHookNameInDev = 'useCallback'),
                updateHookTypesDev(),
                updateCallback(callback, deps)
              );
            },
            useContext(context, observedBits) {
              return (
                (currentHookNameInDev = 'useContext'),
                updateHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useEffect'),
                updateHookTypesDev(),
                updateEffect(create, deps)
              );
            },
            useImperativeHandle(ref, create, deps) {
              return (
                (currentHookNameInDev = 'useImperativeHandle'),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useLayoutEffect'),
                updateHookTypesDev(),
                updateLayoutEffect(create, deps)
              );
            },
            useMemo(create, deps) {
              (currentHookNameInDev = 'useMemo'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer(reducer, initialArg, init) {
              (currentHookNameInDev = 'useReducer'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef(initialValue) {
              return (
                (currentHookNameInDev = 'useRef'),
                updateHookTypesDev(),
                updateRef()
              );
            },
            useState(initialState) {
              (currentHookNameInDev = 'useState'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue(value, formatterFn) {
              return (
                (currentHookNameInDev = 'useDebugValue'),
                updateHookTypesDev(),
                updateDebugValue()
              );
            },
            useResponder(responder, props) {
              return (
                (currentHookNameInDev = 'useResponder'),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue(value, config) {
              return (
                (currentHookNameInDev = 'useDeferredValue'),
                updateHookTypesDev(),
                updateDeferredValue(value, config)
              );
            },
            useTransition(config) {
              return (
                (currentHookNameInDev = 'useTransition'),
                updateHookTypesDev(),
                updateTransition(config)
              );
            },
          }),
          (HooksDispatcherOnRerenderInDEV = {
            readContext(context, observedBits) {
              return readContext(context, observedBits);
            },
            useCallback(callback, deps) {
              return (
                (currentHookNameInDev = 'useCallback'),
                updateHookTypesDev(),
                updateCallback(callback, deps)
              );
            },
            useContext(context, observedBits) {
              return (
                (currentHookNameInDev = 'useContext'),
                updateHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useEffect'),
                updateHookTypesDev(),
                updateEffect(create, deps)
              );
            },
            useImperativeHandle(ref, create, deps) {
              return (
                (currentHookNameInDev = 'useImperativeHandle'),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useLayoutEffect'),
                updateHookTypesDev(),
                updateLayoutEffect(create, deps)
              );
            },
            useMemo(create, deps) {
              (currentHookNameInDev = 'useMemo'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer(reducer, initialArg, init) {
              (currentHookNameInDev = 'useReducer'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return rerenderReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef(initialValue) {
              return (
                (currentHookNameInDev = 'useRef'),
                updateHookTypesDev(),
                updateRef()
              );
            },
            useState(initialState) {
              (currentHookNameInDev = 'useState'), updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnRerenderInDEV;
              try {
                return rerenderState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue(value, formatterFn) {
              return (
                (currentHookNameInDev = 'useDebugValue'),
                updateHookTypesDev(),
                updateDebugValue()
              );
            },
            useResponder(responder, props) {
              return (
                (currentHookNameInDev = 'useResponder'),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue(value, config) {
              return (
                (currentHookNameInDev = 'useDeferredValue'),
                updateHookTypesDev(),
                rerenderDeferredValue(value, config)
              );
            },
            useTransition(config) {
              return (
                (currentHookNameInDev = 'useTransition'),
                updateHookTypesDev(),
                rerenderTransition(config)
              );
            },
          }),
          (InvalidNestedHooksDispatcherOnMountInDEV = {
            readContext(context, observedBits) {
              return (
                warnInvalidContextAccess(), readContext(context, observedBits)
              );
            },
            useCallback(callback, deps) {
              return (
                (currentHookNameInDev = 'useCallback'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountCallback(callback, deps)
              );
            },
            useContext(context, observedBits) {
              return (
                (currentHookNameInDev = 'useContext'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useEffect'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountEffect(create, deps)
              );
            },
            useImperativeHandle(ref, create, deps) {
              return (
                (currentHookNameInDev = 'useImperativeHandle'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useLayoutEffect'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountLayoutEffect(create, deps)
              );
            },
            useMemo(create, deps) {
              (currentHookNameInDev = 'useMemo'),
                warnInvalidHookAccess(),
                mountHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer(reducer, initialArg, init) {
              (currentHookNameInDev = 'useReducer'),
                warnInvalidHookAccess(),
                mountHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef(initialValue) {
              return (
                (currentHookNameInDev = 'useRef'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountRef(initialValue)
              );
            },
            useState(initialState) {
              (currentHookNameInDev = 'useState'),
                warnInvalidHookAccess(),
                mountHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnMountInDEV;
              try {
                return mountState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue(value, formatterFn) {
              return (
                (currentHookNameInDev = 'useDebugValue'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                void 0
              );
            },
            useResponder(responder, props) {
              return (
                (currentHookNameInDev = 'useResponder'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue(value, config) {
              return (
                (currentHookNameInDev = 'useDeferredValue'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountDeferredValue(value, config)
              );
            },
            useTransition(config) {
              return (
                (currentHookNameInDev = 'useTransition'),
                warnInvalidHookAccess(),
                mountHookTypesDev(),
                mountTransition(config)
              );
            },
          }),
          (InvalidNestedHooksDispatcherOnUpdateInDEV = {
            readContext(context, observedBits) {
              return (
                warnInvalidContextAccess(), readContext(context, observedBits)
              );
            },
            useCallback(callback, deps) {
              return (
                (currentHookNameInDev = 'useCallback'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateCallback(callback, deps)
              );
            },
            useContext(context, observedBits) {
              return (
                (currentHookNameInDev = 'useContext'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useEffect'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateEffect(create, deps)
              );
            },
            useImperativeHandle(ref, create, deps) {
              return (
                (currentHookNameInDev = 'useImperativeHandle'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useLayoutEffect'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateLayoutEffect(create, deps)
              );
            },
            useMemo(create, deps) {
              (currentHookNameInDev = 'useMemo'),
                warnInvalidHookAccess(),
                updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer(reducer, initialArg, init) {
              (currentHookNameInDev = 'useReducer'),
                warnInvalidHookAccess(),
                updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef(initialValue) {
              return (
                (currentHookNameInDev = 'useRef'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateRef()
              );
            },
            useState(initialState) {
              (currentHookNameInDev = 'useState'),
                warnInvalidHookAccess(),
                updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue(value, formatterFn) {
              return (
                (currentHookNameInDev = 'useDebugValue'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateDebugValue()
              );
            },
            useResponder(responder, props) {
              return (
                (currentHookNameInDev = 'useResponder'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue(value, config) {
              return (
                (currentHookNameInDev = 'useDeferredValue'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateDeferredValue(value, config)
              );
            },
            useTransition(config) {
              return (
                (currentHookNameInDev = 'useTransition'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateTransition(config)
              );
            },
          }),
          (InvalidNestedHooksDispatcherOnRerenderInDEV = {
            readContext(context, observedBits) {
              return (
                warnInvalidContextAccess(), readContext(context, observedBits)
              );
            },
            useCallback(callback, deps) {
              return (
                (currentHookNameInDev = 'useCallback'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateCallback(callback, deps)
              );
            },
            useContext(context, observedBits) {
              return (
                (currentHookNameInDev = 'useContext'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                readContext(context, observedBits)
              );
            },
            useEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useEffect'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateEffect(create, deps)
              );
            },
            useImperativeHandle(ref, create, deps) {
              return (
                (currentHookNameInDev = 'useImperativeHandle'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateImperativeHandle(ref, create, deps)
              );
            },
            useLayoutEffect(create, deps) {
              return (
                (currentHookNameInDev = 'useLayoutEffect'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateLayoutEffect(create, deps)
              );
            },
            useMemo(create, deps) {
              (currentHookNameInDev = 'useMemo'),
                warnInvalidHookAccess(),
                updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return updateMemo(create, deps);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useReducer(reducer, initialArg, init) {
              (currentHookNameInDev = 'useReducer'),
                warnInvalidHookAccess(),
                updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return rerenderReducer(reducer, initialArg, init);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useRef(initialValue) {
              return (
                (currentHookNameInDev = 'useRef'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateRef()
              );
            },
            useState(initialState) {
              (currentHookNameInDev = 'useState'),
                warnInvalidHookAccess(),
                updateHookTypesDev();
              const prevDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current =
                InvalidNestedHooksDispatcherOnUpdateInDEV;
              try {
                return rerenderState(initialState);
              } finally {
                ReactCurrentDispatcher.current = prevDispatcher;
              }
            },
            useDebugValue(value, formatterFn) {
              return (
                (currentHookNameInDev = 'useDebugValue'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                updateDebugValue()
              );
            },
            useResponder(responder, props) {
              return (
                (currentHookNameInDev = 'useResponder'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                createDeprecatedResponderListener(responder, props)
              );
            },
            useDeferredValue(value, config) {
              return (
                (currentHookNameInDev = 'useDeferredValue'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                rerenderDeferredValue(value, config)
              );
            },
            useTransition(config) {
              return (
                (currentHookNameInDev = 'useTransition'),
                warnInvalidHookAccess(),
                updateHookTypesDev(),
                rerenderTransition(config)
              );
            },
          });
      }
      const now$1 = Scheduler.unstable_now;
      let commitTime = 0;
      let profilerStartTime = -1;
      function getCommitTime() {
        return commitTime;
      }
      function recordCommitTime() {
        commitTime = now$1();
      }
      function startProfilerTimer(fiber) {
        (profilerStartTime = now$1()),
          fiber.actualStartTime < 0 && (fiber.actualStartTime = now$1());
      }
      function stopProfilerTimerIfRunning(fiber) {
        profilerStartTime = -1;
      }
      function stopProfilerTimerIfRunningAndRecordDelta(
        fiber,
        overrideBaseTime
      ) {
        if (profilerStartTime >= 0) {
          const elapsedTime = now$1() - profilerStartTime;
          (fiber.actualDuration += elapsedTime),
            overrideBaseTime && (fiber.selfBaseDuration = elapsedTime),
            (profilerStartTime = -1);
        }
      }
      let hydrationParentFiber = null;
      let nextHydratableInstance = null;
      let isHydrating = !1;
      function enterHydrationState(fiber) {
        const parentInstance = fiber.stateNode.containerInfo;
        return (
          (nextHydratableInstance = getFirstHydratableChild(parentInstance)),
          (hydrationParentFiber = fiber),
          (isHydrating = !0),
          !0
        );
      }
      function deleteHydratableInstance(returnFiber, instance) {
        switch (returnFiber.tag) {
          case HostRoot:
            didNotHydrateContainerInstance(
              returnFiber.stateNode.containerInfo,
              instance
            );
            break;
          case HostComponent:
            didNotHydrateInstance(
              returnFiber.type,
              returnFiber.memoizedProps,
              returnFiber.stateNode,
              instance
            );
            break;
        }
        const childToDelete = createFiberFromHostInstanceForDeletion();
        (childToDelete.stateNode = instance),
          (childToDelete.return = returnFiber),
          (childToDelete.effectTag = Deletion),
          returnFiber.lastEffect !== null
            ? ((returnFiber.lastEffect.nextEffect = childToDelete),
              (returnFiber.lastEffect = childToDelete))
            : (returnFiber.firstEffect = returnFiber.lastEffect =
                childToDelete);
      }
      function insertNonHydratedInstance(returnFiber, fiber) {
        switch (
          ((fiber.effectTag = (fiber.effectTag & ~Hydrating) | Placement),
          returnFiber.tag)
        ) {
          case HostRoot: {
            const parentContainer = returnFiber.stateNode.containerInfo;
            switch (fiber.tag) {
              case HostComponent:
                var { type } = fiber;
                var props = fiber.pendingProps;
                didNotFindHydratableContainerInstance(parentContainer, type);
                break;
              case HostText:
                var text = fiber.pendingProps;
                didNotFindHydratableContainerTextInstance(
                  parentContainer,
                  text
                );
                break;
            }
            break;
          }
          case HostComponent: {
            const parentType = returnFiber.type;
            const parentProps = returnFiber.memoizedProps;
            const parentInstance = returnFiber.stateNode;
            switch (fiber.tag) {
              case HostComponent:
                var _type = fiber.type;
                var _props = fiber.pendingProps;
                didNotFindHydratableInstance(
                  parentType,
                  parentProps,
                  parentInstance,
                  _type
                );
                break;
              case HostText:
                var _text = fiber.pendingProps;
                didNotFindHydratableTextInstance(
                  parentType,
                  parentProps,
                  parentInstance,
                  _text
                );
                break;
              case SuspenseComponent:
                didNotFindHydratableSuspenseInstance(parentType, parentProps);
                break;
            }
            break;
          }
          default:
        }
      }
      function tryHydrate(fiber, nextInstance) {
        switch (fiber.tag) {
          case HostComponent: {
            const { type } = fiber;
            const props = fiber.pendingProps;
            const instance = canHydrateInstance(nextInstance, type);
            return instance !== null ? ((fiber.stateNode = instance), !0) : !1;
          }
          case HostText: {
            const text = fiber.pendingProps;
            const textInstance = canHydrateTextInstance(nextInstance, text);
            return textInstance !== null
              ? ((fiber.stateNode = textInstance), !0)
              : !1;
          }
          case SuspenseComponent:
            return !1;
          default:
            return !1;
        }
      }
      function tryToClaimNextHydratableInstance(fiber) {
        if (isHydrating) {
          let nextInstance = nextHydratableInstance;
          if (!nextInstance) {
            insertNonHydratedInstance(hydrationParentFiber, fiber),
              (isHydrating = !1),
              (hydrationParentFiber = fiber);
            return;
          }
          const firstAttemptedInstance = nextInstance;
          if (!tryHydrate(fiber, nextInstance)) {
            if (
              ((nextInstance = getNextHydratableSibling(
                firstAttemptedInstance
              )),
              !nextInstance || !tryHydrate(fiber, nextInstance))
            ) {
              insertNonHydratedInstance(hydrationParentFiber, fiber),
                (isHydrating = !1),
                (hydrationParentFiber = fiber);
              return;
            }
            deleteHydratableInstance(
              hydrationParentFiber,
              firstAttemptedInstance
            );
          }
          (hydrationParentFiber = fiber),
            (nextHydratableInstance = getFirstHydratableChild(nextInstance));
        }
      }
      function prepareToHydrateHostInstance(
        fiber,
        rootContainerInstance,
        hostContext
      ) {
        const instance = fiber.stateNode;
        const updatePayload = hydrateInstance(
          instance,
          fiber.type,
          fiber.memoizedProps,
          rootContainerInstance,
          hostContext,
          fiber
        );
        return (fiber.updateQueue = updatePayload), updatePayload !== null;
      }
      function prepareToHydrateHostTextInstance(fiber) {
        const textInstance = fiber.stateNode;
        const textContent = fiber.memoizedProps;
        const shouldUpdate = hydrateTextInstance(
          textInstance,
          textContent,
          fiber
        );
        if (shouldUpdate) {
          const returnFiber = hydrationParentFiber;
          if (returnFiber !== null)
            switch (returnFiber.tag) {
              case HostRoot: {
                const parentContainer = returnFiber.stateNode.containerInfo;
                didNotMatchHydratedContainerTextInstance(
                  parentContainer,
                  textInstance,
                  textContent
                );
                break;
              }
              case HostComponent: {
                const parentType = returnFiber.type;
                const parentProps = returnFiber.memoizedProps;
                const parentInstance = returnFiber.stateNode;
                didNotMatchHydratedTextInstance(
                  parentType,
                  parentProps,
                  parentInstance,
                  textInstance,
                  textContent
                );
                break;
              }
            }
        }
        return shouldUpdate;
      }
      function skipPastDehydratedSuspenseInstance(fiber) {
        const suspenseState = fiber.memoizedState;
        const suspenseInstance =
          suspenseState !== null ? suspenseState.dehydrated : null;
        if (!suspenseInstance)
          throw Error(
            'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
          );
        return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
      }
      function popToNextHostParent(fiber) {
        for (
          var parent = fiber.return;
          parent !== null &&
          parent.tag !== HostComponent &&
          parent.tag !== HostRoot &&
          parent.tag !== SuspenseComponent;

        )
          parent = parent.return;
        hydrationParentFiber = parent;
      }
      function popHydrationState(fiber) {
        if (fiber !== hydrationParentFiber) return !1;
        if (!isHydrating)
          return popToNextHostParent(fiber), (isHydrating = !0), !1;
        const { type } = fiber;
        if (
          fiber.tag !== HostComponent ||
          (type !== 'head' &&
            type !== 'body' &&
            !shouldSetTextContent(type, fiber.memoizedProps))
        )
          for (let nextInstance = nextHydratableInstance; nextInstance; )
            deleteHydratableInstance(fiber, nextInstance),
              (nextInstance = getNextHydratableSibling(nextInstance));
        return (
          popToNextHostParent(fiber),
          fiber.tag === SuspenseComponent
            ? (nextHydratableInstance =
                skipPastDehydratedSuspenseInstance(fiber))
            : (nextHydratableInstance = hydrationParentFiber
                ? getNextHydratableSibling(fiber.stateNode)
                : null),
          !0
        );
      }
      function resetHydrationState() {
        (hydrationParentFiber = null),
          (nextHydratableInstance = null),
          (isHydrating = !1);
      }
      const ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      let didReceiveUpdate = !1;
      let didWarnAboutBadClass;
      let didWarnAboutModulePatternComponent;
      let didWarnAboutContextTypeOnFunctionComponent;
      let didWarnAboutGetDerivedStateOnFunctionComponent;
      let didWarnAboutFunctionRefs;
      let didWarnAboutReassigningProps;
      let didWarnAboutRevealOrder;
      let didWarnAboutTailOptions;
      (didWarnAboutBadClass = {}),
        (didWarnAboutModulePatternComponent = {}),
        (didWarnAboutContextTypeOnFunctionComponent = {}),
        (didWarnAboutGetDerivedStateOnFunctionComponent = {}),
        (didWarnAboutFunctionRefs = {}),
        (didWarnAboutReassigningProps = !1),
        (didWarnAboutRevealOrder = {}),
        (didWarnAboutTailOptions = {});
      function reconcileChildren(
        current2,
        workInProgress2,
        nextChildren,
        renderExpirationTime2
      ) {
        current2 === null
          ? (workInProgress2.child = mountChildFibers(
              workInProgress2,
              null,
              nextChildren,
              renderExpirationTime2
            ))
          : (workInProgress2.child = reconcileChildFibers(
              workInProgress2,
              current2.child,
              nextChildren,
              renderExpirationTime2
            ));
      }
      function forceUnmountCurrentAndReconcile(
        current2,
        workInProgress2,
        nextChildren,
        renderExpirationTime2
      ) {
        (workInProgress2.child = reconcileChildFibers(
          workInProgress2,
          current2.child,
          null,
          renderExpirationTime2
        )),
          (workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            null,
            nextChildren,
            renderExpirationTime2
          ));
      }
      function updateForwardRef(
        current2,
        workInProgress2,
        Component,
        nextProps,
        renderExpirationTime2
      ) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          const innerPropTypes = Component.propTypes;
          innerPropTypes &&
            checkPropTypes(
              innerPropTypes,
              nextProps,
              'prop',
              getComponentName(Component),
              getCurrentFiberStackInDev
            );
        }
        const render2 = Component.render;
        const { ref } = workInProgress2;
        let nextChildren;
        return (
          prepareToReadContext(workInProgress2, renderExpirationTime2),
          (ReactCurrentOwner$1.current = workInProgress2),
          setIsRendering(!0),
          (nextChildren = renderWithHooks(
            current2,
            workInProgress2,
            render2,
            nextProps,
            ref,
            renderExpirationTime2
          )),
          workInProgress2.mode & StrictMode &&
            workInProgress2.memoizedState !== null &&
            (nextChildren = renderWithHooks(
              current2,
              workInProgress2,
              render2,
              nextProps,
              ref,
              renderExpirationTime2
            )),
          setIsRendering(!1),
          current2 !== null && !didReceiveUpdate
            ? (bailoutHooks(current2, workInProgress2, renderExpirationTime2),
              bailoutOnAlreadyFinishedWork(
                current2,
                workInProgress2,
                renderExpirationTime2
              ))
            : ((workInProgress2.effectTag |= PerformedWork),
              reconcileChildren(
                current2,
                workInProgress2,
                nextChildren,
                renderExpirationTime2
              ),
              workInProgress2.child)
        );
      }
      function updateMemoComponent(
        current2,
        workInProgress2,
        Component,
        nextProps,
        updateExpirationTime,
        renderExpirationTime2
      ) {
        if (current2 === null) {
          const { type } = Component;
          if (
            isSimpleFunctionComponent(type) &&
            Component.compare === null &&
            Component.defaultProps === void 0
          ) {
            let resolvedType = type;
            return (
              (resolvedType = resolveFunctionForHotReloading(type)),
              (workInProgress2.tag = SimpleMemoComponent),
              (workInProgress2.type = resolvedType),
              validateFunctionComponentInDev(workInProgress2, type),
              updateSimpleMemoComponent(
                current2,
                workInProgress2,
                resolvedType,
                nextProps,
                updateExpirationTime,
                renderExpirationTime2
              )
            );
          }
          {
            const innerPropTypes = type.propTypes;
            innerPropTypes &&
              checkPropTypes(
                innerPropTypes,
                nextProps,
                'prop',
                getComponentName(type),
                getCurrentFiberStackInDev
              );
          }
          const child = createFiberFromTypeAndProps(
            Component.type,
            null,
            nextProps,
            null,
            workInProgress2.mode,
            renderExpirationTime2
          );
          return (
            (child.ref = workInProgress2.ref),
            (child.return = workInProgress2),
            (workInProgress2.child = child),
            child
          );
        }
        {
          const _type = Component.type;
          const _innerPropTypes = _type.propTypes;
          _innerPropTypes &&
            checkPropTypes(
              _innerPropTypes,
              nextProps,
              'prop',
              getComponentName(_type),
              getCurrentFiberStackInDev
            );
        }
        const currentChild = current2.child;
        if (updateExpirationTime < renderExpirationTime2) {
          const prevProps = currentChild.memoizedProps;
          let { compare } = Component;
          if (
            ((compare = compare !== null ? compare : shallowEqual),
            compare(prevProps, nextProps) &&
              current2.ref === workInProgress2.ref)
          )
            return bailoutOnAlreadyFinishedWork(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
        }
        workInProgress2.effectTag |= PerformedWork;
        const newChild = createWorkInProgress(currentChild, nextProps);
        return (
          (newChild.ref = workInProgress2.ref),
          (newChild.return = workInProgress2),
          (workInProgress2.child = newChild),
          newChild
        );
      }
      function updateSimpleMemoComponent(
        current2,
        workInProgress2,
        Component,
        nextProps,
        updateExpirationTime,
        renderExpirationTime2
      ) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          let outerMemoType = workInProgress2.elementType;
          outerMemoType.$$typeof === REACT_LAZY_TYPE &&
            (outerMemoType = refineResolvedLazyComponent(outerMemoType));
          const outerPropTypes = outerMemoType && outerMemoType.propTypes;
          outerPropTypes &&
            checkPropTypes(
              outerPropTypes,
              nextProps,
              'prop',
              getComponentName(outerMemoType),
              getCurrentFiberStackInDev
            );
        }
        if (current2 !== null) {
          const prevProps = current2.memoizedProps;
          if (
            shallowEqual(prevProps, nextProps) &&
            current2.ref === workInProgress2.ref &&
            workInProgress2.type === current2.type &&
            ((didReceiveUpdate = !1),
            updateExpirationTime < renderExpirationTime2)
          )
            return (
              (workInProgress2.expirationTime = current2.expirationTime),
              bailoutOnAlreadyFinishedWork(
                current2,
                workInProgress2,
                renderExpirationTime2
              )
            );
        }
        return updateFunctionComponent(
          current2,
          workInProgress2,
          Component,
          nextProps,
          renderExpirationTime2
        );
      }
      function updateFragment(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        const nextChildren = workInProgress2.pendingProps;
        return (
          reconcileChildren(
            current2,
            workInProgress2,
            nextChildren,
            renderExpirationTime2
          ),
          workInProgress2.child
        );
      }
      function updateMode(current2, workInProgress2, renderExpirationTime2) {
        const nextChildren = workInProgress2.pendingProps.children;
        return (
          reconcileChildren(
            current2,
            workInProgress2,
            nextChildren,
            renderExpirationTime2
          ),
          workInProgress2.child
        );
      }
      function updateProfiler(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        workInProgress2.effectTag |= Update;
        const nextProps = workInProgress2.pendingProps;
        const nextChildren = nextProps.children;
        return (
          reconcileChildren(
            current2,
            workInProgress2,
            nextChildren,
            renderExpirationTime2
          ),
          workInProgress2.child
        );
      }
      function markRef(current2, workInProgress2) {
        const { ref } = workInProgress2;
        ((current2 === null && ref !== null) ||
          (current2 !== null && current2.ref !== ref)) &&
          (workInProgress2.effectTag |= Ref);
      }
      function updateFunctionComponent(
        current2,
        workInProgress2,
        Component,
        nextProps,
        renderExpirationTime2
      ) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          const innerPropTypes = Component.propTypes;
          innerPropTypes &&
            checkPropTypes(
              innerPropTypes,
              nextProps,
              'prop',
              getComponentName(Component),
              getCurrentFiberStackInDev
            );
        }
        let context;
        {
          const unmaskedContext = getUnmaskedContext(
            workInProgress2,
            Component,
            !0
          );
          context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        let nextChildren;
        return (
          prepareToReadContext(workInProgress2, renderExpirationTime2),
          (ReactCurrentOwner$1.current = workInProgress2),
          setIsRendering(!0),
          (nextChildren = renderWithHooks(
            current2,
            workInProgress2,
            Component,
            nextProps,
            context,
            renderExpirationTime2
          )),
          workInProgress2.mode & StrictMode &&
            workInProgress2.memoizedState !== null &&
            (nextChildren = renderWithHooks(
              current2,
              workInProgress2,
              Component,
              nextProps,
              context,
              renderExpirationTime2
            )),
          setIsRendering(!1),
          current2 !== null && !didReceiveUpdate
            ? (bailoutHooks(current2, workInProgress2, renderExpirationTime2),
              bailoutOnAlreadyFinishedWork(
                current2,
                workInProgress2,
                renderExpirationTime2
              ))
            : ((workInProgress2.effectTag |= PerformedWork),
              reconcileChildren(
                current2,
                workInProgress2,
                nextChildren,
                renderExpirationTime2
              ),
              workInProgress2.child)
        );
      }
      function updateClassComponent(
        current2,
        workInProgress2,
        Component,
        nextProps,
        renderExpirationTime2
      ) {
        if (workInProgress2.type !== workInProgress2.elementType) {
          const innerPropTypes = Component.propTypes;
          innerPropTypes &&
            checkPropTypes(
              innerPropTypes,
              nextProps,
              'prop',
              getComponentName(Component),
              getCurrentFiberStackInDev
            );
        }
        let hasContext;
        isContextProvider(Component)
          ? ((hasContext = !0), pushContextProvider(workInProgress2))
          : (hasContext = !1),
          prepareToReadContext(workInProgress2, renderExpirationTime2);
        const instance = workInProgress2.stateNode;
        let shouldUpdate;
        instance === null
          ? (current2 !== null &&
              ((current2.alternate = null),
              (workInProgress2.alternate = null),
              (workInProgress2.effectTag |= Placement)),
            constructClassInstance(workInProgress2, Component, nextProps),
            mountClassInstance(
              workInProgress2,
              Component,
              nextProps,
              renderExpirationTime2
            ),
            (shouldUpdate = !0))
          : current2 === null
          ? (shouldUpdate = resumeMountClassInstance(
              workInProgress2,
              Component,
              nextProps,
              renderExpirationTime2
            ))
          : (shouldUpdate = updateClassInstance(
              current2,
              workInProgress2,
              Component,
              nextProps,
              renderExpirationTime2
            ));
        const nextUnitOfWork = finishClassComponent(
          current2,
          workInProgress2,
          Component,
          shouldUpdate,
          hasContext,
          renderExpirationTime2
        );
        {
          const inst = workInProgress2.stateNode;
          inst.props !== nextProps &&
            (didWarnAboutReassigningProps ||
              error(
                'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
                getComponentName(workInProgress2.type) || 'a component'
              ),
            (didWarnAboutReassigningProps = !0));
        }
        return nextUnitOfWork;
      }
      function finishClassComponent(
        current2,
        workInProgress2,
        Component,
        shouldUpdate,
        hasContext,
        renderExpirationTime2
      ) {
        markRef(current2, workInProgress2);
        const didCaptureError =
          (workInProgress2.effectTag & DidCapture) !== NoEffect;
        if (!shouldUpdate && !didCaptureError)
          return (
            hasContext &&
              invalidateContextProvider(workInProgress2, Component, !1),
            bailoutOnAlreadyFinishedWork(
              current2,
              workInProgress2,
              renderExpirationTime2
            )
          );
        const instance = workInProgress2.stateNode;
        ReactCurrentOwner$1.current = workInProgress2;
        let nextChildren;
        return (
          didCaptureError &&
          typeof Component.getDerivedStateFromError !== 'function'
            ? ((nextChildren = null), stopProfilerTimerIfRunning())
            : (setIsRendering(!0),
              (nextChildren = instance.render()),
              workInProgress2.mode & StrictMode && instance.render(),
              setIsRendering(!1)),
          (workInProgress2.effectTag |= PerformedWork),
          current2 !== null && didCaptureError
            ? forceUnmountCurrentAndReconcile(
                current2,
                workInProgress2,
                nextChildren,
                renderExpirationTime2
              )
            : reconcileChildren(
                current2,
                workInProgress2,
                nextChildren,
                renderExpirationTime2
              ),
          (workInProgress2.memoizedState = instance.state),
          hasContext &&
            invalidateContextProvider(workInProgress2, Component, !0),
          workInProgress2.child
        );
      }
      function pushHostRootContext(workInProgress2) {
        const root2 = workInProgress2.stateNode;
        root2.pendingContext
          ? pushTopLevelContextObject(
              workInProgress2,
              root2.pendingContext,
              root2.pendingContext !== root2.context
            )
          : root2.context &&
            pushTopLevelContextObject(workInProgress2, root2.context, !1),
          pushHostContainer(workInProgress2, root2.containerInfo);
      }
      function updateHostRoot(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        pushHostRootContext(workInProgress2);
        const { updateQueue } = workInProgress2;
        if (!(current2 !== null && updateQueue !== null))
          throw Error(
            'If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.'
          );
        const nextProps = workInProgress2.pendingProps;
        const prevState = workInProgress2.memoizedState;
        const prevChildren = prevState !== null ? prevState.element : null;
        cloneUpdateQueue(current2, workInProgress2),
          processUpdateQueue(
            workInProgress2,
            nextProps,
            null,
            renderExpirationTime2
          );
        const nextState = workInProgress2.memoizedState;
        const nextChildren = nextState.element;
        if (nextChildren === prevChildren)
          return (
            resetHydrationState(),
            bailoutOnAlreadyFinishedWork(
              current2,
              workInProgress2,
              renderExpirationTime2
            )
          );
        const root2 = workInProgress2.stateNode;
        if (root2.hydrate && enterHydrationState(workInProgress2)) {
          const child = mountChildFibers(
            workInProgress2,
            null,
            nextChildren,
            renderExpirationTime2
          );
          workInProgress2.child = child;
          for (let node = child; node; )
            (node.effectTag = (node.effectTag & ~Placement) | Hydrating),
              (node = node.sibling);
        } else
          reconcileChildren(
            current2,
            workInProgress2,
            nextChildren,
            renderExpirationTime2
          ),
            resetHydrationState();
        return workInProgress2.child;
      }
      function updateHostComponent(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        pushHostContext(workInProgress2),
          current2 === null &&
            tryToClaimNextHydratableInstance(workInProgress2);
        const { type } = workInProgress2;
        const nextProps = workInProgress2.pendingProps;
        const prevProps = current2 !== null ? current2.memoizedProps : null;
        let nextChildren = nextProps.children;
        const isDirectTextChild = shouldSetTextContent(type, nextProps);
        return (
          isDirectTextChild
            ? (nextChildren = null)
            : prevProps !== null &&
              shouldSetTextContent(type, prevProps) &&
              (workInProgress2.effectTag |= ContentReset),
          markRef(current2, workInProgress2),
          workInProgress2.mode & ConcurrentMode &&
          renderExpirationTime2 !== Never &&
          shouldDeprioritizeSubtree(type, nextProps)
            ? (markSpawnedWork(Never),
              (workInProgress2.expirationTime =
                workInProgress2.childExpirationTime =
                  Never),
              null)
            : (reconcileChildren(
                current2,
                workInProgress2,
                nextChildren,
                renderExpirationTime2
              ),
              workInProgress2.child)
        );
      }
      function updateHostText(current2, workInProgress2) {
        return (
          current2 === null &&
            tryToClaimNextHydratableInstance(workInProgress2),
          null
        );
      }
      function mountLazyComponent(
        _current,
        workInProgress2,
        elementType,
        updateExpirationTime,
        renderExpirationTime2
      ) {
        _current !== null &&
          ((_current.alternate = null),
          (workInProgress2.alternate = null),
          (workInProgress2.effectTag |= Placement));
        const props = workInProgress2.pendingProps;
        cancelWorkTimer(workInProgress2);
        let Component = readLazyComponentType(elementType);
        workInProgress2.type = Component;
        const resolvedTag = (workInProgress2.tag =
          resolveLazyComponentTag(Component));
        startWorkTimer(workInProgress2);
        const resolvedProps = resolveDefaultProps(Component, props);
        let child;
        switch (resolvedTag) {
          case FunctionComponent:
            return (
              validateFunctionComponentInDev(workInProgress2, Component),
              (workInProgress2.type = Component =
                resolveFunctionForHotReloading(Component)),
              (child = updateFunctionComponent(
                null,
                workInProgress2,
                Component,
                resolvedProps,
                renderExpirationTime2
              )),
              child
            );
          case ClassComponent:
            return (
              (workInProgress2.type = Component =
                resolveClassForHotReloading(Component)),
              (child = updateClassComponent(
                null,
                workInProgress2,
                Component,
                resolvedProps,
                renderExpirationTime2
              )),
              child
            );
          case ForwardRef:
            return (
              (workInProgress2.type = Component =
                resolveForwardRefForHotReloading(Component)),
              (child = updateForwardRef(
                null,
                workInProgress2,
                Component,
                resolvedProps,
                renderExpirationTime2
              )),
              child
            );
          case MemoComponent: {
            if (workInProgress2.type !== workInProgress2.elementType) {
              const outerPropTypes = Component.propTypes;
              outerPropTypes &&
                checkPropTypes(
                  outerPropTypes,
                  resolvedProps,
                  'prop',
                  getComponentName(Component),
                  getCurrentFiberStackInDev
                );
            }
            return (
              (child = updateMemoComponent(
                null,
                workInProgress2,
                Component,
                resolveDefaultProps(Component.type, resolvedProps),
                updateExpirationTime,
                renderExpirationTime2
              )),
              child
            );
          }
        }
        let hint = '';
        throw (
          (Component !== null &&
            typeof Component === 'object' &&
            Component.$$typeof === REACT_LAZY_TYPE &&
            (hint =
              ' Did you wrap a component in React.lazy() more than once?'),
          Error(
            `Element type is invalid. Received a promise that resolves to: ${Component}. Lazy element type must resolve to a class or function.${hint}`
          ))
        );
      }
      function mountIncompleteClassComponent(
        _current,
        workInProgress2,
        Component,
        nextProps,
        renderExpirationTime2
      ) {
        _current !== null &&
          ((_current.alternate = null),
          (workInProgress2.alternate = null),
          (workInProgress2.effectTag |= Placement)),
          (workInProgress2.tag = ClassComponent);
        let hasContext;
        return (
          isContextProvider(Component)
            ? ((hasContext = !0), pushContextProvider(workInProgress2))
            : (hasContext = !1),
          prepareToReadContext(workInProgress2, renderExpirationTime2),
          constructClassInstance(workInProgress2, Component, nextProps),
          mountClassInstance(
            workInProgress2,
            Component,
            nextProps,
            renderExpirationTime2
          ),
          finishClassComponent(
            null,
            workInProgress2,
            Component,
            !0,
            hasContext,
            renderExpirationTime2
          )
        );
      }
      function mountIndeterminateComponent(
        _current,
        workInProgress2,
        Component,
        renderExpirationTime2
      ) {
        _current !== null &&
          ((_current.alternate = null),
          (workInProgress2.alternate = null),
          (workInProgress2.effectTag |= Placement));
        const props = workInProgress2.pendingProps;
        let context;
        {
          const unmaskedContext = getUnmaskedContext(
            workInProgress2,
            Component,
            !1
          );
          context = getMaskedContext(workInProgress2, unmaskedContext);
        }
        prepareToReadContext(workInProgress2, renderExpirationTime2);
        let value;
        {
          if (
            Component.prototype &&
            typeof Component.prototype.render === 'function'
          ) {
            const componentName = getComponentName(Component) || 'Unknown';
            didWarnAboutBadClass[componentName] ||
              (error(
                "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
                componentName,
                componentName
              ),
              (didWarnAboutBadClass[componentName] = !0));
          }
          workInProgress2.mode & StrictMode &&
            ReactStrictModeWarnings.recordLegacyContextWarning(
              workInProgress2,
              null
            ),
            setIsRendering(!0),
            (ReactCurrentOwner$1.current = workInProgress2),
            (value = renderWithHooks(
              null,
              workInProgress2,
              Component,
              props,
              context,
              renderExpirationTime2
            )),
            setIsRendering(!1);
        }
        if (
          ((workInProgress2.effectTag |= PerformedWork),
          typeof value === 'object' &&
            value !== null &&
            typeof value.render === 'function' &&
            value.$$typeof === void 0)
        ) {
          {
            const _componentName = getComponentName(Component) || 'Unknown';
            didWarnAboutModulePatternComponent[_componentName] ||
              (error(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                _componentName,
                _componentName,
                _componentName
              ),
              (didWarnAboutModulePatternComponent[_componentName] = !0));
          }
          (workInProgress2.tag = ClassComponent),
            (workInProgress2.memoizedState = null),
            (workInProgress2.updateQueue = null);
          let hasContext = !1;
          isContextProvider(Component)
            ? ((hasContext = !0), pushContextProvider(workInProgress2))
            : (hasContext = !1),
            (workInProgress2.memoizedState =
              value.state !== null && value.state !== void 0
                ? value.state
                : null),
            initializeUpdateQueue(workInProgress2);
          const { getDerivedStateFromProps } = Component;
          return (
            typeof getDerivedStateFromProps === 'function' &&
              applyDerivedStateFromProps(
                workInProgress2,
                Component,
                getDerivedStateFromProps,
                props
              ),
            adoptClassInstance(workInProgress2, value),
            mountClassInstance(
              workInProgress2,
              Component,
              props,
              renderExpirationTime2
            ),
            finishClassComponent(
              null,
              workInProgress2,
              Component,
              !0,
              hasContext,
              renderExpirationTime2
            )
          );
        }
        return (
          (workInProgress2.tag = FunctionComponent),
          workInProgress2.mode & StrictMode &&
            workInProgress2.memoizedState !== null &&
            (value = renderWithHooks(
              null,
              workInProgress2,
              Component,
              props,
              context,
              renderExpirationTime2
            )),
          reconcileChildren(
            null,
            workInProgress2,
            value,
            renderExpirationTime2
          ),
          validateFunctionComponentInDev(workInProgress2, Component),
          workInProgress2.child
        );
      }
      function validateFunctionComponentInDev(workInProgress2, Component) {
        {
          if (
            (Component &&
              Component.childContextTypes &&
              error(
                '%s(...): childContextTypes cannot be defined on a function component.',
                Component.displayName || Component.name || 'Component'
              ),
            workInProgress2.ref !== null)
          ) {
            let info = '';
            const ownerName = getCurrentFiberOwnerNameInDevOrNull();
            ownerName &&
              (info += `

Check the render method of \`${ownerName}\`.`);
            let warningKey = ownerName || workInProgress2._debugID || '';
            const debugSource = workInProgress2._debugSource;
            debugSource &&
              (warningKey = `${debugSource.fileName}:${debugSource.lineNumber}`),
              didWarnAboutFunctionRefs[warningKey] ||
                ((didWarnAboutFunctionRefs[warningKey] = !0),
                error(
                  'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
                  info
                ));
          }
          if (typeof Component.getDerivedStateFromProps === 'function') {
            const _componentName2 = getComponentName(Component) || 'Unknown';
            didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] ||
              (error(
                '%s: Function components do not support getDerivedStateFromProps.',
                _componentName2
              ),
              (didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] =
                !0));
          }
          if (
            typeof Component.contextType === 'object' &&
            Component.contextType !== null
          ) {
            const _componentName3 = getComponentName(Component) || 'Unknown';
            didWarnAboutContextTypeOnFunctionComponent[_componentName3] ||
              (error(
                '%s: Function components do not support contextType.',
                _componentName3
              ),
              (didWarnAboutContextTypeOnFunctionComponent[_componentName3] =
                !0));
          }
        }
      }
      const SUSPENDED_MARKER = { dehydrated: null, retryTime: NoWork };
      function shouldRemainOnFallback(
        suspenseContext,
        current2,
        workInProgress2
      ) {
        return (
          hasSuspenseContext(suspenseContext, ForceSuspenseFallback) &&
          (current2 === null || current2.memoizedState !== null)
        );
      }
      function updateSuspenseComponent(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        const { mode } = workInProgress2;
        const nextProps = workInProgress2.pendingProps;
        shouldSuspend(workInProgress2) &&
          (workInProgress2.effectTag |= DidCapture);
        let suspenseContext = suspenseStackCursor.current;
        let nextDidTimeout = !1;
        const didSuspend =
          (workInProgress2.effectTag & DidCapture) !== NoEffect;
        if (
          (didSuspend || shouldRemainOnFallback(suspenseContext, current2)
            ? ((nextDidTimeout = !0),
              (workInProgress2.effectTag &= ~DidCapture))
            : (current2 === null || current2.memoizedState !== null) &&
              nextProps.fallback !== void 0 &&
              nextProps.unstable_avoidThisFallback !== !0 &&
              (suspenseContext = addSubtreeSuspenseContext(
                suspenseContext,
                InvisibleParentSuspenseContext
              )),
          (suspenseContext = setDefaultShallowSuspenseContext(suspenseContext)),
          pushSuspenseContext(workInProgress2, suspenseContext),
          current2 === null)
        )
          if (
            (nextProps.fallback !== void 0 &&
              tryToClaimNextHydratableInstance(workInProgress2),
            nextDidTimeout)
          ) {
            const nextFallbackChildren = nextProps.fallback;
            const primaryChildFragment = createFiberFromFragment(
              null,
              mode,
              NoWork,
              null
            );
            if (
              ((primaryChildFragment.return = workInProgress2),
              (workInProgress2.mode & BlockingMode) === NoMode)
            ) {
              const progressedState = workInProgress2.memoizedState;
              const progressedPrimaryChild =
                progressedState !== null
                  ? workInProgress2.child.child
                  : workInProgress2.child;
              primaryChildFragment.child = progressedPrimaryChild;
              for (
                let progressedChild = progressedPrimaryChild;
                progressedChild !== null;

              )
                (progressedChild.return = primaryChildFragment),
                  (progressedChild = progressedChild.sibling);
            }
            const fallbackChildFragment = createFiberFromFragment(
              nextFallbackChildren,
              mode,
              renderExpirationTime2,
              null
            );
            return (
              (fallbackChildFragment.return = workInProgress2),
              (primaryChildFragment.sibling = fallbackChildFragment),
              (workInProgress2.memoizedState = SUSPENDED_MARKER),
              (workInProgress2.child = primaryChildFragment),
              fallbackChildFragment
            );
          } else {
            const nextPrimaryChildren = nextProps.children;
            return (
              (workInProgress2.memoizedState = null),
              (workInProgress2.child = mountChildFibers(
                workInProgress2,
                null,
                nextPrimaryChildren,
                renderExpirationTime2
              ))
            );
          }
        const prevState = current2.memoizedState;
        if (prevState !== null) {
          const currentPrimaryChildFragment = current2.child;
          const currentFallbackChildFragment =
            currentPrimaryChildFragment.sibling;
          if (nextDidTimeout) {
            const _nextFallbackChildren2 = nextProps.fallback;
            const _primaryChildFragment2 = createWorkInProgress(
              currentPrimaryChildFragment,
              currentPrimaryChildFragment.pendingProps
            );
            if (
              ((_primaryChildFragment2.return = workInProgress2),
              (workInProgress2.mode & BlockingMode) === NoMode)
            ) {
              const _progressedState = workInProgress2.memoizedState;
              const _progressedPrimaryChild =
                _progressedState !== null
                  ? workInProgress2.child.child
                  : workInProgress2.child;
              if (
                _progressedPrimaryChild !== currentPrimaryChildFragment.child
              ) {
                _primaryChildFragment2.child = _progressedPrimaryChild;
                for (
                  let _progressedChild2 = _progressedPrimaryChild;
                  _progressedChild2 !== null;

                )
                  (_progressedChild2.return = _primaryChildFragment2),
                    (_progressedChild2 = _progressedChild2.sibling);
              }
            }
            if (workInProgress2.mode & ProfileMode) {
              for (
                var _treeBaseDuration = 0,
                  _hiddenChild = _primaryChildFragment2.child;
                _hiddenChild !== null;

              )
                (_treeBaseDuration += _hiddenChild.treeBaseDuration),
                  (_hiddenChild = _hiddenChild.sibling);
              _primaryChildFragment2.treeBaseDuration = _treeBaseDuration;
            }
            const _fallbackChildFragment2 = createWorkInProgress(
              currentFallbackChildFragment,
              _nextFallbackChildren2
            );
            return (
              (_fallbackChildFragment2.return = workInProgress2),
              (_primaryChildFragment2.sibling = _fallbackChildFragment2),
              (_primaryChildFragment2.childExpirationTime = NoWork),
              (workInProgress2.memoizedState = SUSPENDED_MARKER),
              (workInProgress2.child = _primaryChildFragment2),
              _fallbackChildFragment2
            );
          }
          const _nextPrimaryChildren = nextProps.children;
          const currentPrimaryChild = currentPrimaryChildFragment.child;
          const primaryChild = reconcileChildFibers(
            workInProgress2,
            currentPrimaryChild,
            _nextPrimaryChildren,
            renderExpirationTime2
          );
          return (
            (workInProgress2.memoizedState = null),
            (workInProgress2.child = primaryChild)
          );
        }
        const _currentPrimaryChild = current2.child;
        if (nextDidTimeout) {
          const _nextFallbackChildren3 = nextProps.fallback;
          const _primaryChildFragment3 = createFiberFromFragment(
            null,
            mode,
            NoWork,
            null
          );
          if (
            ((_primaryChildFragment3.return = workInProgress2),
            (_primaryChildFragment3.child = _currentPrimaryChild),
            _currentPrimaryChild !== null &&
              (_currentPrimaryChild.return = _primaryChildFragment3),
            (workInProgress2.mode & BlockingMode) === NoMode)
          ) {
            const _progressedState2 = workInProgress2.memoizedState;
            const _progressedPrimaryChild2 =
              _progressedState2 !== null
                ? workInProgress2.child.child
                : workInProgress2.child;
            _primaryChildFragment3.child = _progressedPrimaryChild2;
            for (
              let _progressedChild3 = _progressedPrimaryChild2;
              _progressedChild3 !== null;

            )
              (_progressedChild3.return = _primaryChildFragment3),
                (_progressedChild3 = _progressedChild3.sibling);
          }
          if (workInProgress2.mode & ProfileMode) {
            for (
              var _treeBaseDuration2 = 0,
                _hiddenChild2 = _primaryChildFragment3.child;
              _hiddenChild2 !== null;

            )
              (_treeBaseDuration2 += _hiddenChild2.treeBaseDuration),
                (_hiddenChild2 = _hiddenChild2.sibling);
            _primaryChildFragment3.treeBaseDuration = _treeBaseDuration2;
          }
          const _fallbackChildFragment3 = createFiberFromFragment(
            _nextFallbackChildren3,
            mode,
            renderExpirationTime2,
            null
          );
          return (
            (_fallbackChildFragment3.return = workInProgress2),
            (_primaryChildFragment3.sibling = _fallbackChildFragment3),
            (_fallbackChildFragment3.effectTag |= Placement),
            (_primaryChildFragment3.childExpirationTime = NoWork),
            (workInProgress2.memoizedState = SUSPENDED_MARKER),
            (workInProgress2.child = _primaryChildFragment3),
            _fallbackChildFragment3
          );
        }
        workInProgress2.memoizedState = null;
        const _nextPrimaryChildren2 = nextProps.children;
        return (workInProgress2.child = reconcileChildFibers(
          workInProgress2,
          _currentPrimaryChild,
          _nextPrimaryChildren2,
          renderExpirationTime2
        ));
      }
      function scheduleWorkOnFiber(fiber, renderExpirationTime2) {
        fiber.expirationTime < renderExpirationTime2 &&
          (fiber.expirationTime = renderExpirationTime2);
        const { alternate } = fiber;
        alternate !== null &&
          alternate.expirationTime < renderExpirationTime2 &&
          (alternate.expirationTime = renderExpirationTime2),
          scheduleWorkOnParentPath(fiber.return, renderExpirationTime2);
      }
      function propagateSuspenseContextChange(
        workInProgress2,
        firstChild,
        renderExpirationTime2
      ) {
        for (let node = firstChild; node !== null; ) {
          if (node.tag === SuspenseComponent) {
            const state = node.memoizedState;
            state !== null && scheduleWorkOnFiber(node, renderExpirationTime2);
          } else if (node.tag === SuspenseListComponent)
            scheduleWorkOnFiber(node, renderExpirationTime2);
          else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === workInProgress2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === workInProgress2) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function findLastContentRow(firstChild) {
        for (var row = firstChild, lastContentRow = null; row !== null; ) {
          const currentRow = row.alternate;
          currentRow !== null &&
            findFirstSuspended(currentRow) === null &&
            (lastContentRow = row),
            (row = row.sibling);
        }
        return lastContentRow;
      }
      function validateRevealOrder(revealOrder) {
        if (
          revealOrder !== void 0 &&
          revealOrder !== 'forwards' &&
          revealOrder !== 'backwards' &&
          revealOrder !== 'together' &&
          !didWarnAboutRevealOrder[revealOrder]
        )
          if (
            ((didWarnAboutRevealOrder[revealOrder] = !0),
            typeof revealOrder === 'string')
          )
            switch (revealOrder.toLowerCase()) {
              case 'together':
              case 'forwards':
              case 'backwards': {
                error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  revealOrder,
                  revealOrder.toLowerCase()
                );
                break;
              }
              case 'forward':
              case 'backward': {
                error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  revealOrder,
                  revealOrder.toLowerCase()
                );
                break;
              }
              default:
                error(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  revealOrder
                );
                break;
            }
          else
            error(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              revealOrder
            );
      }
      function validateTailOptions(tailMode, revealOrder) {
        tailMode !== void 0 &&
          !didWarnAboutTailOptions[tailMode] &&
          (tailMode !== 'collapsed' && tailMode !== 'hidden'
            ? ((didWarnAboutTailOptions[tailMode] = !0),
              error(
                '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                tailMode
              ))
            : revealOrder !== 'forwards' &&
              revealOrder !== 'backwards' &&
              ((didWarnAboutTailOptions[tailMode] = !0),
              error(
                '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                tailMode
              )));
      }
      function validateSuspenseListNestedChild(childSlot, index2) {
        {
          const isArray2 = Array.isArray(childSlot);
          const isIterable =
            !isArray2 && typeof getIteratorFn(childSlot) === 'function';
          if (isArray2 || isIterable) {
            const type = isArray2 ? 'array' : 'iterable';
            return (
              error(
                'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>',
                type,
                index2,
                type
              ),
              !1
            );
          }
        }
        return !0;
      }
      function validateSuspenseListChildren(children, revealOrder) {
        if (
          (revealOrder === 'forwards' || revealOrder === 'backwards') &&
          children !== void 0 &&
          children !== null &&
          children !== !1
        )
          if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i++)
              if (!validateSuspenseListNestedChild(children[i], i)) return;
          } else {
            const iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
              const childrenIterator = iteratorFn.call(children);
              if (childrenIterator)
                for (
                  let step = childrenIterator.next(), _i = 0;
                  !step.done;
                  step = childrenIterator.next()
                ) {
                  if (!validateSuspenseListNestedChild(step.value, _i)) return;
                  _i++;
                }
            } else
              error(
                'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
                revealOrder
              );
          }
      }
      function initSuspenseListRenderState(
        workInProgress2,
        isBackwards,
        tail,
        lastContentRow,
        tailMode,
        lastEffectBeforeRendering
      ) {
        const renderState = workInProgress2.memoizedState;
        renderState === null
          ? (workInProgress2.memoizedState = {
              isBackwards,
              rendering: null,
              renderingStartTime: 0,
              last: lastContentRow,
              tail,
              tailExpiration: 0,
              tailMode,
              lastEffect: lastEffectBeforeRendering,
            })
          : ((renderState.isBackwards = isBackwards),
            (renderState.rendering = null),
            (renderState.renderingStartTime = 0),
            (renderState.last = lastContentRow),
            (renderState.tail = tail),
            (renderState.tailExpiration = 0),
            (renderState.tailMode = tailMode),
            (renderState.lastEffect = lastEffectBeforeRendering));
      }
      function updateSuspenseListComponent(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        const nextProps = workInProgress2.pendingProps;
        const { revealOrder } = nextProps;
        const tailMode = nextProps.tail;
        const newChildren = nextProps.children;
        validateRevealOrder(revealOrder),
          validateTailOptions(tailMode, revealOrder),
          validateSuspenseListChildren(newChildren, revealOrder),
          reconcileChildren(
            current2,
            workInProgress2,
            newChildren,
            renderExpirationTime2
          );
        let suspenseContext = suspenseStackCursor.current;
        const shouldForceFallback = hasSuspenseContext(
          suspenseContext,
          ForceSuspenseFallback
        );
        if (shouldForceFallback)
          (suspenseContext = setShallowSuspenseContext(
            suspenseContext,
            ForceSuspenseFallback
          )),
            (workInProgress2.effectTag |= DidCapture);
        else {
          const didSuspendBefore =
            current2 !== null && (current2.effectTag & DidCapture) !== NoEffect;
          didSuspendBefore &&
            propagateSuspenseContextChange(
              workInProgress2,
              workInProgress2.child,
              renderExpirationTime2
            ),
            (suspenseContext =
              setDefaultShallowSuspenseContext(suspenseContext));
        }
        if (
          (pushSuspenseContext(workInProgress2, suspenseContext),
          (workInProgress2.mode & BlockingMode) === NoMode)
        )
          workInProgress2.memoizedState = null;
        else
          switch (revealOrder) {
            case 'forwards': {
              const lastContentRow = findLastContentRow(workInProgress2.child);
              let tail;
              lastContentRow === null
                ? ((tail = workInProgress2.child),
                  (workInProgress2.child = null))
                : ((tail = lastContentRow.sibling),
                  (lastContentRow.sibling = null)),
                initSuspenseListRenderState(
                  workInProgress2,
                  !1,
                  tail,
                  lastContentRow,
                  tailMode,
                  workInProgress2.lastEffect
                );
              break;
            }
            case 'backwards': {
              let _tail = null;
              let row = workInProgress2.child;
              for (workInProgress2.child = null; row !== null; ) {
                const currentRow = row.alternate;
                if (
                  currentRow !== null &&
                  findFirstSuspended(currentRow) === null
                ) {
                  workInProgress2.child = row;
                  break;
                }
                const nextRow = row.sibling;
                (row.sibling = _tail), (_tail = row), (row = nextRow);
              }
              initSuspenseListRenderState(
                workInProgress2,
                !0,
                _tail,
                null,
                tailMode,
                workInProgress2.lastEffect
              );
              break;
            }
            case 'together': {
              initSuspenseListRenderState(
                workInProgress2,
                !1,
                null,
                null,
                void 0,
                workInProgress2.lastEffect
              );
              break;
            }
            default:
              workInProgress2.memoizedState = null;
          }
        return workInProgress2.child;
      }
      function updatePortalComponent(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        pushHostContainer(
          workInProgress2,
          workInProgress2.stateNode.containerInfo
        );
        const nextChildren = workInProgress2.pendingProps;
        return (
          current2 === null
            ? (workInProgress2.child = reconcileChildFibers(
                workInProgress2,
                null,
                nextChildren,
                renderExpirationTime2
              ))
            : reconcileChildren(
                current2,
                workInProgress2,
                nextChildren,
                renderExpirationTime2
              ),
          workInProgress2.child
        );
      }
      function updateContextProvider(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        const providerType = workInProgress2.type;
        const context = providerType._context;
        const newProps = workInProgress2.pendingProps;
        const oldProps = workInProgress2.memoizedProps;
        const newValue = newProps.value;
        {
          const providerPropTypes = workInProgress2.type.propTypes;
          providerPropTypes &&
            checkPropTypes(
              providerPropTypes,
              newProps,
              'prop',
              'Context.Provider',
              getCurrentFiberStackInDev
            );
        }
        if ((pushProvider(workInProgress2, newValue), oldProps !== null)) {
          const oldValue = oldProps.value;
          const changedBits = calculateChangedBits(context, newValue, oldValue);
          if (changedBits === 0) {
            if (oldProps.children === newProps.children && !hasContextChanged())
              return bailoutOnAlreadyFinishedWork(
                current2,
                workInProgress2,
                renderExpirationTime2
              );
          } else
            propagateContextChange(
              workInProgress2,
              context,
              changedBits,
              renderExpirationTime2
            );
        }
        const newChildren = newProps.children;
        return (
          reconcileChildren(
            current2,
            workInProgress2,
            newChildren,
            renderExpirationTime2
          ),
          workInProgress2.child
        );
      }
      let hasWarnedAboutUsingContextAsConsumer = !1;
      function updateContextConsumer(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        let context = workInProgress2.type;
        context._context === void 0
          ? context !== context.Consumer &&
            (hasWarnedAboutUsingContextAsConsumer ||
              ((hasWarnedAboutUsingContextAsConsumer = !0),
              error(
                'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
              )))
          : (context = context._context);
        const newProps = workInProgress2.pendingProps;
        const render2 = newProps.children;
        typeof render2 !== 'function' &&
          error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ),
          prepareToReadContext(workInProgress2, renderExpirationTime2);
        const newValue = readContext(context, newProps.unstable_observedBits);
        let newChildren;
        return (
          (ReactCurrentOwner$1.current = workInProgress2),
          setIsRendering(!0),
          (newChildren = render2(newValue)),
          setIsRendering(!1),
          (workInProgress2.effectTag |= PerformedWork),
          reconcileChildren(
            current2,
            workInProgress2,
            newChildren,
            renderExpirationTime2
          ),
          workInProgress2.child
        );
      }
      function markWorkInProgressReceivedUpdate() {
        didReceiveUpdate = !0;
      }
      function bailoutOnAlreadyFinishedWork(
        current2,
        workInProgress2,
        renderExpirationTime2
      ) {
        cancelWorkTimer(workInProgress2),
          current2 !== null &&
            (workInProgress2.dependencies = current2.dependencies),
          stopProfilerTimerIfRunning();
        const updateExpirationTime = workInProgress2.expirationTime;
        updateExpirationTime !== NoWork &&
          markUnprocessedUpdateTime(updateExpirationTime);
        const { childExpirationTime } = workInProgress2;
        return childExpirationTime < renderExpirationTime2
          ? null
          : (cloneChildFibers(current2, workInProgress2),
            workInProgress2.child);
      }
      function remountFiber(current2, oldWorkInProgress, newWorkInProgress) {
        {
          const returnFiber = oldWorkInProgress.return;
          if (returnFiber === null)
            throw new Error('Cannot swap the root fiber.');
          if (
            ((current2.alternate = null),
            (oldWorkInProgress.alternate = null),
            (newWorkInProgress.index = oldWorkInProgress.index),
            (newWorkInProgress.sibling = oldWorkInProgress.sibling),
            (newWorkInProgress.return = oldWorkInProgress.return),
            (newWorkInProgress.ref = oldWorkInProgress.ref),
            oldWorkInProgress === returnFiber.child)
          )
            returnFiber.child = newWorkInProgress;
          else {
            let prevSibling = returnFiber.child;
            if (prevSibling === null)
              throw new Error('Expected parent to have a child.');
            for (; prevSibling.sibling !== oldWorkInProgress; )
              if (((prevSibling = prevSibling.sibling), prevSibling === null))
                throw new Error('Expected to find the previous sibling.');
            prevSibling.sibling = newWorkInProgress;
          }
          const last = returnFiber.lastEffect;
          return (
            last !== null
              ? ((last.nextEffect = current2),
                (returnFiber.lastEffect = current2))
              : (returnFiber.firstEffect = returnFiber.lastEffect = current2),
            (current2.nextEffect = null),
            (current2.effectTag = Deletion),
            (newWorkInProgress.effectTag |= Placement),
            newWorkInProgress
          );
        }
      }
      function beginWork(current2, workInProgress2, renderExpirationTime2) {
        const updateExpirationTime = workInProgress2.expirationTime;
        if (workInProgress2._debugNeedsRemount && current2 !== null)
          return remountFiber(
            current2,
            workInProgress2,
            createFiberFromTypeAndProps(
              workInProgress2.type,
              workInProgress2.key,
              workInProgress2.pendingProps,
              workInProgress2._debugOwner || null,
              workInProgress2.mode,
              workInProgress2.expirationTime
            )
          );
        if (current2 !== null) {
          const oldProps = current2.memoizedProps;
          const newProps = workInProgress2.pendingProps;
          if (
            oldProps !== newProps ||
            hasContextChanged() ||
            workInProgress2.type !== current2.type
          )
            didReceiveUpdate = !0;
          else if (updateExpirationTime < renderExpirationTime2) {
            switch (((didReceiveUpdate = !1), workInProgress2.tag)) {
              case HostRoot:
                pushHostRootContext(workInProgress2), resetHydrationState();
                break;
              case HostComponent:
                if (
                  (pushHostContext(workInProgress2),
                  workInProgress2.mode & ConcurrentMode &&
                    renderExpirationTime2 !== Never &&
                    shouldDeprioritizeSubtree(workInProgress2.type, newProps))
                )
                  return (
                    markSpawnedWork(Never),
                    (workInProgress2.expirationTime =
                      workInProgress2.childExpirationTime =
                        Never),
                    null
                  );
                break;
              case ClassComponent: {
                const Component = workInProgress2.type;
                isContextProvider(Component) &&
                  pushContextProvider(workInProgress2);
                break;
              }
              case HostPortal:
                pushHostContainer(
                  workInProgress2,
                  workInProgress2.stateNode.containerInfo
                );
                break;
              case ContextProvider: {
                const newValue = workInProgress2.memoizedProps.value;
                pushProvider(workInProgress2, newValue);
                break;
              }
              case Profiler:
                {
                  const hasChildWork =
                    workInProgress2.childExpirationTime >=
                    renderExpirationTime2;
                  hasChildWork && (workInProgress2.effectTag |= Update);
                }
                break;
              case SuspenseComponent: {
                const state = workInProgress2.memoizedState;
                if (state !== null) {
                  const primaryChildFragment = workInProgress2.child;
                  const primaryChildExpirationTime =
                    primaryChildFragment.childExpirationTime;
                  if (
                    primaryChildExpirationTime !== NoWork &&
                    primaryChildExpirationTime >= renderExpirationTime2
                  )
                    return updateSuspenseComponent(
                      current2,
                      workInProgress2,
                      renderExpirationTime2
                    );
                  pushSuspenseContext(
                    workInProgress2,
                    setDefaultShallowSuspenseContext(
                      suspenseStackCursor.current
                    )
                  );
                  const child = bailoutOnAlreadyFinishedWork(
                    current2,
                    workInProgress2,
                    renderExpirationTime2
                  );
                  return child !== null ? child.sibling : null;
                } else
                  pushSuspenseContext(
                    workInProgress2,
                    setDefaultShallowSuspenseContext(
                      suspenseStackCursor.current
                    )
                  );
                break;
              }
              case SuspenseListComponent: {
                const didSuspendBefore =
                  (current2.effectTag & DidCapture) !== NoEffect;
                const _hasChildWork =
                  workInProgress2.childExpirationTime >= renderExpirationTime2;
                if (didSuspendBefore) {
                  if (_hasChildWork)
                    return updateSuspenseListComponent(
                      current2,
                      workInProgress2,
                      renderExpirationTime2
                    );
                  workInProgress2.effectTag |= DidCapture;
                }
                const renderState = workInProgress2.memoizedState;
                if (
                  (renderState !== null &&
                    ((renderState.rendering = null), (renderState.tail = null)),
                  pushSuspenseContext(
                    workInProgress2,
                    suspenseStackCursor.current
                  ),
                  _hasChildWork)
                )
                  break;
                return null;
              }
            }
            return bailoutOnAlreadyFinishedWork(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          } else didReceiveUpdate = !1;
        } else didReceiveUpdate = !1;
        switch (
          ((workInProgress2.expirationTime = NoWork), workInProgress2.tag)
        ) {
          case IndeterminateComponent:
            return mountIndeterminateComponent(
              current2,
              workInProgress2,
              workInProgress2.type,
              renderExpirationTime2
            );
          case LazyComponent: {
            const { elementType } = workInProgress2;
            return mountLazyComponent(
              current2,
              workInProgress2,
              elementType,
              updateExpirationTime,
              renderExpirationTime2
            );
          }
          case FunctionComponent: {
            const _Component = workInProgress2.type;
            const unresolvedProps = workInProgress2.pendingProps;
            const resolvedProps =
              workInProgress2.elementType === _Component
                ? unresolvedProps
                : resolveDefaultProps(_Component, unresolvedProps);
            return updateFunctionComponent(
              current2,
              workInProgress2,
              _Component,
              resolvedProps,
              renderExpirationTime2
            );
          }
          case ClassComponent: {
            const _Component2 = workInProgress2.type;
            const _unresolvedProps = workInProgress2.pendingProps;
            const _resolvedProps =
              workInProgress2.elementType === _Component2
                ? _unresolvedProps
                : resolveDefaultProps(_Component2, _unresolvedProps);
            return updateClassComponent(
              current2,
              workInProgress2,
              _Component2,
              _resolvedProps,
              renderExpirationTime2
            );
          }
          case HostRoot:
            return updateHostRoot(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case HostComponent:
            return updateHostComponent(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case HostText:
            return updateHostText(current2, workInProgress2);
          case SuspenseComponent:
            return updateSuspenseComponent(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case HostPortal:
            return updatePortalComponent(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case ForwardRef: {
            const { type } = workInProgress2;
            const _unresolvedProps2 = workInProgress2.pendingProps;
            const _resolvedProps2 =
              workInProgress2.elementType === type
                ? _unresolvedProps2
                : resolveDefaultProps(type, _unresolvedProps2);
            return updateForwardRef(
              current2,
              workInProgress2,
              type,
              _resolvedProps2,
              renderExpirationTime2
            );
          }
          case Fragment:
            return updateFragment(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case Mode:
            return updateMode(current2, workInProgress2, renderExpirationTime2);
          case Profiler:
            return updateProfiler(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case ContextProvider:
            return updateContextProvider(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case ContextConsumer:
            return updateContextConsumer(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
          case MemoComponent: {
            const _type2 = workInProgress2.type;
            const _unresolvedProps3 = workInProgress2.pendingProps;
            let _resolvedProps3 = resolveDefaultProps(
              _type2,
              _unresolvedProps3
            );
            if (workInProgress2.type !== workInProgress2.elementType) {
              const outerPropTypes = _type2.propTypes;
              outerPropTypes &&
                checkPropTypes(
                  outerPropTypes,
                  _resolvedProps3,
                  'prop',
                  getComponentName(_type2),
                  getCurrentFiberStackInDev
                );
            }
            return (
              (_resolvedProps3 = resolveDefaultProps(
                _type2.type,
                _resolvedProps3
              )),
              updateMemoComponent(
                current2,
                workInProgress2,
                _type2,
                _resolvedProps3,
                updateExpirationTime,
                renderExpirationTime2
              )
            );
          }
          case SimpleMemoComponent:
            return updateSimpleMemoComponent(
              current2,
              workInProgress2,
              workInProgress2.type,
              workInProgress2.pendingProps,
              updateExpirationTime,
              renderExpirationTime2
            );
          case IncompleteClassComponent: {
            const _Component3 = workInProgress2.type;
            const _unresolvedProps4 = workInProgress2.pendingProps;
            const _resolvedProps4 =
              workInProgress2.elementType === _Component3
                ? _unresolvedProps4
                : resolveDefaultProps(_Component3, _unresolvedProps4);
            return mountIncompleteClassComponent(
              current2,
              workInProgress2,
              _Component3,
              _resolvedProps4,
              renderExpirationTime2
            );
          }
          case SuspenseListComponent:
            return updateSuspenseListComponent(
              current2,
              workInProgress2,
              renderExpirationTime2
            );
        }
        throw Error(
          `Unknown unit of work tag (${workInProgress2.tag}). This error is likely caused by a bug in React. Please file an issue.`
        );
      }
      function markUpdate(workInProgress2) {
        workInProgress2.effectTag |= Update;
      }
      function markRef$1(workInProgress2) {
        workInProgress2.effectTag |= Ref;
      }
      let appendAllChildren;
      let updateHostContainer;
      let updateHostComponent$1;
      let updateHostText$1;
      (appendAllChildren = function (
        parent,
        workInProgress2,
        needsVisibilityToggle,
        isHidden
      ) {
        for (let node = workInProgress2.child; node !== null; ) {
          if (node.tag === HostComponent || node.tag === HostText)
            appendInitialChild(parent, node.stateNode);
          else if (node.tag !== HostPortal) {
            if (node.child !== null) {
              (node.child.return = node), (node = node.child);
              continue;
            }
          }
          if (node === workInProgress2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === workInProgress2) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }),
        (updateHostContainer = function (workInProgress2) {}),
        (updateHostComponent$1 = function (
          current2,
          workInProgress2,
          type,
          newProps,
          rootContainerInstance
        ) {
          const oldProps = current2.memoizedProps;
          if (oldProps !== newProps) {
            const instance = workInProgress2.stateNode;
            const currentHostContext = getHostContext();
            const updatePayload = prepareUpdate(
              instance,
              type,
              oldProps,
              newProps,
              rootContainerInstance,
              currentHostContext
            );
            (workInProgress2.updateQueue = updatePayload),
              updatePayload && markUpdate(workInProgress2);
          }
        }),
        (updateHostText$1 = function (
          current2,
          workInProgress2,
          oldText,
          newText
        ) {
          oldText !== newText && markUpdate(workInProgress2);
        });
      function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
        switch (renderState.tailMode) {
          case 'hidden': {
            for (
              var tailNode = renderState.tail, lastTailNode = null;
              tailNode !== null;

            )
              tailNode.alternate !== null && (lastTailNode = tailNode),
                (tailNode = tailNode.sibling);
            lastTailNode === null
              ? (renderState.tail = null)
              : (lastTailNode.sibling = null);
            break;
          }
          case 'collapsed': {
            for (
              var _tailNode = renderState.tail, _lastTailNode = null;
              _tailNode !== null;

            )
              _tailNode.alternate !== null && (_lastTailNode = _tailNode),
                (_tailNode = _tailNode.sibling);
            _lastTailNode === null
              ? !hasRenderedATailFallback && renderState.tail !== null
                ? (renderState.tail.sibling = null)
                : (renderState.tail = null)
              : (_lastTailNode.sibling = null);
            break;
          }
        }
      }
      function completeWork(current2, workInProgress2, renderExpirationTime2) {
        const newProps = workInProgress2.pendingProps;
        switch (workInProgress2.tag) {
          case IndeterminateComponent:
          case LazyComponent:
          case SimpleMemoComponent:
          case FunctionComponent:
          case ForwardRef:
          case Fragment:
          case Mode:
          case Profiler:
          case ContextConsumer:
          case MemoComponent:
            return null;
          case ClassComponent: {
            const Component = workInProgress2.type;
            return (
              isContextProvider(Component) && popContext(workInProgress2), null
            );
          }
          case HostRoot: {
            popHostContainer(workInProgress2),
              popTopLevelContextObject(workInProgress2);
            const fiberRoot = workInProgress2.stateNode;
            if (
              (fiberRoot.pendingContext &&
                ((fiberRoot.context = fiberRoot.pendingContext),
                (fiberRoot.pendingContext = null)),
              current2 === null || current2.child === null)
            ) {
              const wasHydrated = popHydrationState(workInProgress2);
              wasHydrated && markUpdate(workInProgress2);
            }
            return updateHostContainer(workInProgress2), null;
          }
          case HostComponent: {
            popHostContext(workInProgress2);
            const rootContainerInstance = getRootHostContainer();
            const { type } = workInProgress2;
            if (current2 !== null && workInProgress2.stateNode != null)
              updateHostComponent$1(
                current2,
                workInProgress2,
                type,
                newProps,
                rootContainerInstance
              ),
                current2.ref !== workInProgress2.ref &&
                  markRef$1(workInProgress2);
            else {
              if (!newProps) {
                if (workInProgress2.stateNode === null)
                  throw Error(
                    'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
                  );
                return null;
              }
              const currentHostContext = getHostContext();
              const _wasHydrated = popHydrationState(workInProgress2);
              if (_wasHydrated)
                prepareToHydrateHostInstance(
                  workInProgress2,
                  rootContainerInstance,
                  currentHostContext
                ) && markUpdate(workInProgress2);
              else {
                const instance = createInstance(
                  type,
                  newProps,
                  rootContainerInstance,
                  currentHostContext,
                  workInProgress2
                );
                appendAllChildren(instance, workInProgress2, !1, !1),
                  (workInProgress2.stateNode = instance),
                  finalizeInitialChildren(
                    instance,
                    type,
                    newProps,
                    rootContainerInstance
                  ) && markUpdate(workInProgress2);
              }
              workInProgress2.ref !== null && markRef$1(workInProgress2);
            }
            return null;
          }
          case HostText: {
            const newText = newProps;
            if (current2 && workInProgress2.stateNode != null) {
              const oldText = current2.memoizedProps;
              updateHostText$1(current2, workInProgress2, oldText, newText);
            } else {
              if (
                typeof newText !== 'string' &&
                workInProgress2.stateNode === null
              )
                throw Error(
                  'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
                );
              const _rootContainerInstance = getRootHostContainer();
              const _currentHostContext = getHostContext();
              const _wasHydrated2 = popHydrationState(workInProgress2);
              _wasHydrated2
                ? prepareToHydrateHostTextInstance(workInProgress2) &&
                  markUpdate(workInProgress2)
                : (workInProgress2.stateNode = createTextInstance(
                    newText,
                    _rootContainerInstance,
                    _currentHostContext,
                    workInProgress2
                  ));
            }
            return null;
          }
          case SuspenseComponent: {
            popSuspenseContext(workInProgress2);
            const nextState = workInProgress2.memoizedState;
            if ((workInProgress2.effectTag & DidCapture) !== NoEffect)
              return (
                (workInProgress2.expirationTime = renderExpirationTime2),
                workInProgress2
              );
            const nextDidTimeout = nextState !== null;
            let prevDidTimeout = !1;
            if (current2 === null)
              workInProgress2.memoizedProps.fallback !== void 0 &&
                popHydrationState(workInProgress2);
            else {
              const prevState = current2.memoizedState;
              if (
                ((prevDidTimeout = prevState !== null),
                !nextDidTimeout && prevState !== null)
              ) {
                const currentFallbackChild = current2.child.sibling;
                if (currentFallbackChild !== null) {
                  const first = workInProgress2.firstEffect;
                  first !== null
                    ? ((workInProgress2.firstEffect = currentFallbackChild),
                      (currentFallbackChild.nextEffect = first))
                    : ((workInProgress2.firstEffect =
                        workInProgress2.lastEffect =
                          currentFallbackChild),
                      (currentFallbackChild.nextEffect = null)),
                    (currentFallbackChild.effectTag = Deletion);
                }
              }
            }
            if (
              nextDidTimeout &&
              !prevDidTimeout &&
              (workInProgress2.mode & BlockingMode) !== NoMode
            ) {
              const hasInvisibleChildContext =
                current2 === null &&
                workInProgress2.memoizedProps.unstable_avoidThisFallback !== !0;
              hasInvisibleChildContext ||
              hasSuspenseContext(
                suspenseStackCursor.current,
                InvisibleParentSuspenseContext
              )
                ? renderDidSuspend()
                : renderDidSuspendDelayIfPossible();
            }
            return (
              (nextDidTimeout || prevDidTimeout) &&
                (workInProgress2.effectTag |= Update),
              null
            );
          }
          case HostPortal:
            return (
              popHostContainer(workInProgress2),
              updateHostContainer(workInProgress2),
              null
            );
          case ContextProvider:
            return popProvider(workInProgress2), null;
          case IncompleteClassComponent: {
            const _Component = workInProgress2.type;
            return (
              isContextProvider(_Component) && popContext(workInProgress2), null
            );
          }
          case SuspenseListComponent: {
            popSuspenseContext(workInProgress2);
            const renderState = workInProgress2.memoizedState;
            if (renderState === null) return null;
            let didSuspendAlready =
              (workInProgress2.effectTag & DidCapture) !== NoEffect;
            const renderedTail = renderState.rendering;
            if (renderedTail === null)
              if (didSuspendAlready) cutOffTailIfNeeded(renderState, !1);
              else {
                const cannotBeSuspended =
                  renderHasNotSuspendedYet() &&
                  (current2 === null ||
                    (current2.effectTag & DidCapture) === NoEffect);
                if (!cannotBeSuspended)
                  for (let row = workInProgress2.child; row !== null; ) {
                    const suspended = findFirstSuspended(row);
                    if (suspended !== null) {
                      (didSuspendAlready = !0),
                        (workInProgress2.effectTag |= DidCapture),
                        cutOffTailIfNeeded(renderState, !1);
                      const newThennables = suspended.updateQueue;
                      return (
                        newThennables !== null &&
                          ((workInProgress2.updateQueue = newThennables),
                          (workInProgress2.effectTag |= Update)),
                        renderState.lastEffect === null &&
                          (workInProgress2.firstEffect = null),
                        (workInProgress2.lastEffect = renderState.lastEffect),
                        resetChildFibers(
                          workInProgress2,
                          renderExpirationTime2
                        ),
                        pushSuspenseContext(
                          workInProgress2,
                          setShallowSuspenseContext(
                            suspenseStackCursor.current,
                            ForceSuspenseFallback
                          )
                        ),
                        workInProgress2.child
                      );
                    }
                    row = row.sibling;
                  }
              }
            else {
              if (!didSuspendAlready) {
                const _suspended = findFirstSuspended(renderedTail);
                if (_suspended !== null) {
                  (workInProgress2.effectTag |= DidCapture),
                    (didSuspendAlready = !0);
                  const _newThennables = _suspended.updateQueue;
                  if (
                    (_newThennables !== null &&
                      ((workInProgress2.updateQueue = _newThennables),
                      (workInProgress2.effectTag |= Update)),
                    cutOffTailIfNeeded(renderState, !0),
                    renderState.tail === null &&
                      renderState.tailMode === 'hidden' &&
                      !renderedTail.alternate)
                  ) {
                    const lastEffect = (workInProgress2.lastEffect =
                      renderState.lastEffect);
                    return (
                      lastEffect !== null && (lastEffect.nextEffect = null),
                      null
                    );
                  }
                } else if (
                  now() * 2 - renderState.renderingStartTime >
                    renderState.tailExpiration &&
                  renderExpirationTime2 > Never
                ) {
                  (workInProgress2.effectTag |= DidCapture),
                    (didSuspendAlready = !0),
                    cutOffTailIfNeeded(renderState, !1);
                  const nextPriority = renderExpirationTime2 - 1;
                  (workInProgress2.expirationTime =
                    workInProgress2.childExpirationTime =
                      nextPriority),
                    markSpawnedWork(nextPriority);
                }
              }
              if (renderState.isBackwards)
                (renderedTail.sibling = workInProgress2.child),
                  (workInProgress2.child = renderedTail);
              else {
                const previousSibling = renderState.last;
                previousSibling !== null
                  ? (previousSibling.sibling = renderedTail)
                  : (workInProgress2.child = renderedTail),
                  (renderState.last = renderedTail);
              }
            }
            if (renderState.tail !== null) {
              if (renderState.tailExpiration === 0) {
                const TAIL_EXPIRATION_TIMEOUT_MS = 500;
                renderState.tailExpiration = now() + TAIL_EXPIRATION_TIMEOUT_MS;
              }
              const next = renderState.tail;
              (renderState.rendering = next),
                (renderState.tail = next.sibling),
                (renderState.lastEffect = workInProgress2.lastEffect),
                (renderState.renderingStartTime = now()),
                (next.sibling = null);
              let suspenseContext = suspenseStackCursor.current;
              return (
                didSuspendAlready
                  ? (suspenseContext = setShallowSuspenseContext(
                      suspenseContext,
                      ForceSuspenseFallback
                    ))
                  : (suspenseContext =
                      setDefaultShallowSuspenseContext(suspenseContext)),
                pushSuspenseContext(workInProgress2, suspenseContext),
                next
              );
            }
            return null;
          }
        }
        throw Error(
          `Unknown unit of work tag (${workInProgress2.tag}). This error is likely caused by a bug in React. Please file an issue.`
        );
      }
      function unwindWork(workInProgress2, renderExpirationTime2) {
        switch (workInProgress2.tag) {
          case ClassComponent: {
            const Component = workInProgress2.type;
            isContextProvider(Component) && popContext(workInProgress2);
            const { effectTag } = workInProgress2;
            return effectTag & ShouldCapture
              ? ((workInProgress2.effectTag =
                  (effectTag & ~ShouldCapture) | DidCapture),
                workInProgress2)
              : null;
          }
          case HostRoot: {
            popHostContainer(workInProgress2),
              popTopLevelContextObject(workInProgress2);
            const _effectTag = workInProgress2.effectTag;
            if ((_effectTag & DidCapture) !== NoEffect)
              throw Error(
                'The root failed to unmount after an error. This is likely a bug in React. Please file an issue.'
              );
            return (
              (workInProgress2.effectTag =
                (_effectTag & ~ShouldCapture) | DidCapture),
              workInProgress2
            );
          }
          case HostComponent:
            return popHostContext(workInProgress2), null;
          case SuspenseComponent: {
            popSuspenseContext(workInProgress2);
            const _effectTag2 = workInProgress2.effectTag;
            return _effectTag2 & ShouldCapture
              ? ((workInProgress2.effectTag =
                  (_effectTag2 & ~ShouldCapture) | DidCapture),
                workInProgress2)
              : null;
          }
          case SuspenseListComponent:
            return popSuspenseContext(workInProgress2), null;
          case HostPortal:
            return popHostContainer(workInProgress2), null;
          case ContextProvider:
            return popProvider(workInProgress2), null;
          default:
            return null;
        }
      }
      function unwindInterruptedWork(interruptedWork) {
        switch (interruptedWork.tag) {
          case ClassComponent: {
            const { childContextTypes } = interruptedWork.type;
            childContextTypes != null && popContext(interruptedWork);
            break;
          }
          case HostRoot: {
            popHostContainer(interruptedWork),
              popTopLevelContextObject(interruptedWork);
            break;
          }
          case HostComponent: {
            popHostContext(interruptedWork);
            break;
          }
          case HostPortal:
            popHostContainer(interruptedWork);
            break;
          case SuspenseComponent:
            popSuspenseContext(interruptedWork);
            break;
          case SuspenseListComponent:
            popSuspenseContext(interruptedWork);
            break;
          case ContextProvider:
            popProvider(interruptedWork);
            break;
        }
      }
      function createCapturedValue(value, source) {
        return { value, source, stack: getStackByFiberInDevAndProd(source) };
      }
      function logCapturedError(capturedError) {
        const error2 = capturedError.error;
        {
          const { componentName } = capturedError;
          const { componentStack } = capturedError;
          const { errorBoundaryName } = capturedError;
          const { errorBoundaryFound } = capturedError;
          const { willRetry } = capturedError;
          if (error2 != null && error2._suppressLogging) {
            if (errorBoundaryFound && willRetry) return;
            console.error(error2);
          }
          const componentNameMessage = componentName
            ? `The above error occurred in the <${componentName}> component:`
            : 'The above error occurred in one of your React components:';
          let errorBoundaryMessage;
          errorBoundaryFound && errorBoundaryName
            ? willRetry
              ? (errorBoundaryMessage =
                  `React will try to recreate this component tree from scratch ` +
                  `using the error boundary you provided, ${errorBoundaryName}.`)
              : (errorBoundaryMessage = `This error was initially handled by the error boundary ${errorBoundaryName}.
Recreating the tree from scratch failed so React will unmount the tree.`)
            : (errorBoundaryMessage = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.`);
          const combinedMessage =
            `${componentNameMessage}${componentStack}

` + `${errorBoundaryMessage}`;
          console.error(combinedMessage);
        }
      }
      let didWarnAboutUndefinedSnapshotBeforeUpdate = null;
      didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
      const PossiblyWeakSet = typeof WeakSet === 'function' ? WeakSet : Set;
      function logError(boundary, errorInfo) {
        const { source } = errorInfo;
        let { stack } = errorInfo;
        stack === null &&
          source !== null &&
          (stack = getStackByFiberInDevAndProd(source));
        const capturedError = {
          componentName: source !== null ? getComponentName(source.type) : null,
          componentStack: stack !== null ? stack : '',
          error: errorInfo.value,
          errorBoundary: null,
          errorBoundaryName: null,
          errorBoundaryFound: !1,
          willRetry: !1,
        };
        boundary !== null &&
          boundary.tag === ClassComponent &&
          ((capturedError.errorBoundary = boundary.stateNode),
          (capturedError.errorBoundaryName = getComponentName(boundary.type)),
          (capturedError.errorBoundaryFound = !0),
          (capturedError.willRetry = !0));
        try {
          logCapturedError(capturedError);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
      }
      const callComponentWillUnmountWithTimer = function (current2, instance) {
        startPhaseTimer(current2, 'componentWillUnmount'),
          (instance.props = current2.memoizedProps),
          (instance.state = current2.memoizedState),
          instance.componentWillUnmount(),
          stopPhaseTimer();
      };
      function safelyCallComponentWillUnmount(current2, instance) {
        if (
          (invokeGuardedCallback(
            null,
            callComponentWillUnmountWithTimer,
            null,
            current2,
            instance
          ),
          hasCaughtError())
        ) {
          const unmountError = clearCaughtError();
          captureCommitPhaseError(current2, unmountError);
        }
      }
      function safelyDetachRef(current2) {
        const { ref } = current2;
        if (ref !== null)
          if (typeof ref === 'function') {
            if (
              (invokeGuardedCallback(null, ref, null, null), hasCaughtError())
            ) {
              const refError = clearCaughtError();
              captureCommitPhaseError(current2, refError);
            }
          } else ref.current = null;
      }
      function safelyCallDestroy(current2, destroy) {
        if ((invokeGuardedCallback(null, destroy, null), hasCaughtError())) {
          const error2 = clearCaughtError();
          captureCommitPhaseError(current2, error2);
        }
      }
      function commitBeforeMutationLifeCycles(current2, finishedWork) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
          case Block:
            return;
          case ClassComponent: {
            if (finishedWork.effectTag & Snapshot && current2 !== null) {
              const prevProps = current2.memoizedProps;
              const prevState = current2.memoizedState;
              startPhaseTimer(finishedWork, 'getSnapshotBeforeUpdate');
              const instance = finishedWork.stateNode;
              finishedWork.type === finishedWork.elementType &&
                !didWarnAboutReassigningProps &&
                (instance.props !== finishedWork.memoizedProps &&
                  error(
                    'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                    getComponentName(finishedWork.type) || 'instance'
                  ),
                instance.state !== finishedWork.memoizedState &&
                  error(
                    'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                    getComponentName(finishedWork.type) || 'instance'
                  ));
              const snapshot = instance.getSnapshotBeforeUpdate(
                finishedWork.elementType === finishedWork.type
                  ? prevProps
                  : resolveDefaultProps(finishedWork.type, prevProps),
                prevState
              );
              {
                const didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                snapshot === void 0 &&
                  !didWarnSet.has(finishedWork.type) &&
                  (didWarnSet.add(finishedWork.type),
                  error(
                    '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                    getComponentName(finishedWork.type)
                  ));
              }
              (instance.__reactInternalSnapshotBeforeUpdate = snapshot),
                stopPhaseTimer();
            }
            return;
          }
          case HostRoot:
          case HostComponent:
          case HostText:
          case HostPortal:
          case IncompleteClassComponent:
            return;
        }
        throw Error(
          'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
        );
      }
      function commitHookEffectListUnmount(tag, finishedWork) {
        const { updateQueue } = finishedWork;
        const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
          const firstEffect = lastEffect.next;
          let effect4 = firstEffect;
          do {
            if ((effect4.tag & tag) === tag) {
              const { destroy } = effect4;
              (effect4.destroy = void 0), destroy !== void 0 && destroy();
            }
            effect4 = effect4.next;
          } while (effect4 !== firstEffect);
        }
      }
      function commitHookEffectListMount(tag, finishedWork) {
        const { updateQueue } = finishedWork;
        const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
        if (lastEffect !== null) {
          const firstEffect = lastEffect.next;
          let effect4 = firstEffect;
          do {
            if ((effect4.tag & tag) === tag) {
              const { create } = effect4;
              effect4.destroy = create();
              {
                const { destroy } = effect4;
                if (destroy !== void 0 && typeof destroy !== 'function') {
                  let addendum = void 0;
                  destroy === null
                    ? (addendum =
                        ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                    : typeof destroy.then === 'function'
                    ? (addendum = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching`)
                    : (addendum = ` You returned: ${destroy}`),
                    error(
                      'An effect function must not return anything besides a function, which is used for clean-up.%s%s',
                      addendum,
                      getStackByFiberInDevAndProd(finishedWork)
                    );
                }
              }
            }
            effect4 = effect4.next;
          } while (effect4 !== firstEffect);
        }
      }
      function commitPassiveHookEffects(finishedWork) {
        if ((finishedWork.effectTag & Passive) !== NoEffect)
          switch (finishedWork.tag) {
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent:
            case Block: {
              commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork),
                commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
              break;
            }
          }
      }
      function commitLifeCycles(
        finishedRoot,
        current2,
        finishedWork,
        committedExpirationTime
      ) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent:
          case Block: {
            commitHookEffectListMount(Layout | HasEffect, finishedWork);
            return;
          }
          case ClassComponent: {
            const instance = finishedWork.stateNode;
            if (finishedWork.effectTag & Update)
              if (current2 === null)
                startPhaseTimer(finishedWork, 'componentDidMount'),
                  finishedWork.type === finishedWork.elementType &&
                    !didWarnAboutReassigningProps &&
                    (instance.props !== finishedWork.memoizedProps &&
                      error(
                        'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      ),
                    instance.state !== finishedWork.memoizedState &&
                      error(
                        'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      )),
                  instance.componentDidMount(),
                  stopPhaseTimer();
              else {
                const prevProps =
                  finishedWork.elementType === finishedWork.type
                    ? current2.memoizedProps
                    : resolveDefaultProps(
                        finishedWork.type,
                        current2.memoizedProps
                      );
                const prevState = current2.memoizedState;
                startPhaseTimer(finishedWork, 'componentDidUpdate'),
                  finishedWork.type === finishedWork.elementType &&
                    !didWarnAboutReassigningProps &&
                    (instance.props !== finishedWork.memoizedProps &&
                      error(
                        'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      ),
                    instance.state !== finishedWork.memoizedState &&
                      error(
                        'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                        getComponentName(finishedWork.type) || 'instance'
                      )),
                  instance.componentDidUpdate(
                    prevProps,
                    prevState,
                    instance.__reactInternalSnapshotBeforeUpdate
                  ),
                  stopPhaseTimer();
              }
            const { updateQueue } = finishedWork;
            updateQueue !== null &&
              (finishedWork.type === finishedWork.elementType &&
                !didWarnAboutReassigningProps &&
                (instance.props !== finishedWork.memoizedProps &&
                  error(
                    'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                    getComponentName(finishedWork.type) || 'instance'
                  ),
                instance.state !== finishedWork.memoizedState &&
                  error(
                    'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                    getComponentName(finishedWork.type) || 'instance'
                  )),
              commitUpdateQueue(finishedWork, updateQueue, instance));
            return;
          }
          case HostRoot: {
            const _updateQueue = finishedWork.updateQueue;
            if (_updateQueue !== null) {
              let _instance = null;
              if (finishedWork.child !== null)
                switch (finishedWork.child.tag) {
                  case HostComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                  case ClassComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                }
              commitUpdateQueue(finishedWork, _updateQueue, _instance);
            }
            return;
          }
          case HostComponent: {
            const _instance2 = finishedWork.stateNode;
            if (current2 === null && finishedWork.effectTag & Update) {
              const { type } = finishedWork;
              const props = finishedWork.memoizedProps;
              commitMount(_instance2, type, props);
            }
            return;
          }
          case HostText:
            return;
          case HostPortal:
            return;
          case Profiler: {
            {
              const { onRender } = finishedWork.memoizedProps;
              typeof onRender === 'function' &&
                onRender(
                  finishedWork.memoizedProps.id,
                  current2 === null ? 'mount' : 'update',
                  finishedWork.actualDuration,
                  finishedWork.treeBaseDuration,
                  finishedWork.actualStartTime,
                  getCommitTime(),
                  finishedRoot.memoizedInteractions
                );
            }
            return;
          }
          case SuspenseComponent: {
            commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            return;
          }
          case SuspenseListComponent:
          case IncompleteClassComponent:
          case FundamentalComponent:
          case ScopeComponent:
            return;
        }
        throw Error(
          'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
        );
      }
      function hideOrUnhideAllChildren(finishedWork, isHidden) {
        for (let node = finishedWork; ; ) {
          if (node.tag === HostComponent) {
            const instance = node.stateNode;
            isHidden
              ? hideInstance(instance)
              : unhideInstance(node.stateNode, node.memoizedProps);
          } else if (node.tag === HostText) {
            const _instance3 = node.stateNode;
            isHidden
              ? hideTextInstance(_instance3)
              : unhideTextInstance(_instance3, node.memoizedProps);
          } else if (
            node.tag === SuspenseComponent &&
            node.memoizedState !== null &&
            node.memoizedState.dehydrated === null
          ) {
            const fallbackChildFragment = node.child.sibling;
            (fallbackChildFragment.return = node),
              (node = fallbackChildFragment);
            continue;
          } else if (node.child !== null) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === finishedWork) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === finishedWork) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function commitAttachRef(finishedWork) {
        const { ref } = finishedWork;
        if (ref !== null) {
          const instance = finishedWork.stateNode;
          let instanceToUse;
          switch (finishedWork.tag) {
            case HostComponent:
              instanceToUse = instance;
              break;
            default:
              instanceToUse = instance;
          }
          typeof ref === 'function'
            ? ref(instanceToUse)
            : (ref.hasOwnProperty('current') ||
                error(
                  'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s',
                  getComponentName(finishedWork.type),
                  getStackByFiberInDevAndProd(finishedWork)
                ),
              (ref.current = instanceToUse));
        }
      }
      function commitDetachRef(current2) {
        const currentRef = current2.ref;
        currentRef !== null &&
          (typeof currentRef === 'function'
            ? currentRef(null)
            : (currentRef.current = null));
      }
      function commitUnmount(finishedRoot, current2, renderPriorityLevel) {
        switch ((onCommitUnmount(current2), current2.tag)) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent:
          case Block: {
            const { updateQueue } = current2;
            if (updateQueue !== null) {
              const { lastEffect } = updateQueue;
              if (lastEffect !== null) {
                const firstEffect = lastEffect.next;
                {
                  const priorityLevel =
                    renderPriorityLevel > NormalPriority
                      ? NormalPriority
                      : renderPriorityLevel;
                  runWithPriority$1(priorityLevel, () => {
                    let effect4 = firstEffect;
                    do {
                      const _destroy = effect4.destroy;
                      _destroy !== void 0 &&
                        safelyCallDestroy(current2, _destroy),
                        (effect4 = effect4.next);
                    } while (effect4 !== firstEffect);
                  });
                }
              }
            }
            return;
          }
          case ClassComponent: {
            safelyDetachRef(current2);
            const instance = current2.stateNode;
            typeof instance.componentWillUnmount === 'function' &&
              safelyCallComponentWillUnmount(current2, instance);
            return;
          }
          case HostComponent: {
            safelyDetachRef(current2);
            return;
          }
          case HostPortal: {
            unmountHostComponents(finishedRoot, current2, renderPriorityLevel);
          }
          case FundamentalComponent:
          case DehydratedFragment:
          case ScopeComponent:
        }
      }
      function commitNestedUnmounts(finishedRoot, root2, renderPriorityLevel) {
        for (let node = root2; ; ) {
          if (
            (commitUnmount(finishedRoot, node, renderPriorityLevel),
            node.child !== null && node.tag !== HostPortal)
          ) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === root2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === root2) return;
            node = node.return;
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function detachFiber(current2) {
        const { alternate } = current2;
        (current2.return = null),
          (current2.child = null),
          (current2.memoizedState = null),
          (current2.updateQueue = null),
          (current2.dependencies = null),
          (current2.alternate = null),
          (current2.firstEffect = null),
          (current2.lastEffect = null),
          (current2.pendingProps = null),
          (current2.memoizedProps = null),
          (current2.stateNode = null),
          alternate !== null && detachFiber(alternate);
      }
      function getHostParentFiber(fiber) {
        for (let parent = fiber.return; parent !== null; ) {
          if (isHostParent(parent)) return parent;
          parent = parent.return;
        }
        throw Error(
          'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
        );
      }
      function isHostParent(fiber) {
        return (
          fiber.tag === HostComponent ||
          fiber.tag === HostRoot ||
          fiber.tag === HostPortal
        );
      }
      function getHostSibling(fiber) {
        let node = fiber;
        siblings: for (;;) {
          for (; node.sibling === null; ) {
            if (node.return === null || isHostParent(node.return)) return null;
            node = node.return;
          }
          for (
            node.sibling.return = node.return, node = node.sibling;
            node.tag !== HostComponent &&
            node.tag !== HostText &&
            node.tag !== DehydratedFragment;

          ) {
            if (
              node.effectTag & Placement ||
              node.child === null ||
              node.tag === HostPortal
            )
              continue siblings;
            (node.child.return = node), (node = node.child);
          }
          if (!(node.effectTag & Placement)) return node.stateNode;
        }
      }
      function commitPlacement(finishedWork) {
        const parentFiber = getHostParentFiber(finishedWork);
        let parent;
        let isContainer;
        const parentStateNode = parentFiber.stateNode;
        switch (parentFiber.tag) {
          case HostComponent:
            (parent = parentStateNode), (isContainer = !1);
            break;
          case HostRoot:
            (parent = parentStateNode.containerInfo), (isContainer = !0);
            break;
          case HostPortal:
            (parent = parentStateNode.containerInfo), (isContainer = !0);
            break;
          case FundamentalComponent:
          default:
            throw Error(
              'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
            );
        }
        parentFiber.effectTag & ContentReset &&
          (resetTextContent(parent), (parentFiber.effectTag &= ~ContentReset));
        const before = getHostSibling(finishedWork);
        isContainer
          ? insertOrAppendPlacementNodeIntoContainer(
              finishedWork,
              before,
              parent
            )
          : insertOrAppendPlacementNode(finishedWork, before, parent);
      }
      function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
        const { tag } = node;
        const isHost = tag === HostComponent || tag === HostText;
        if (isHost || enableFundamentalAPI) {
          const stateNode = isHost ? node.stateNode : node.stateNode.instance;
          before
            ? insertInContainerBefore(parent, stateNode, before)
            : appendChildToContainer(parent, stateNode);
        } else if (tag !== HostPortal) {
          const { child } = node;
          if (child !== null) {
            insertOrAppendPlacementNodeIntoContainer(child, before, parent);
            for (let { sibling } = child; sibling !== null; )
              insertOrAppendPlacementNodeIntoContainer(sibling, before, parent),
                (sibling = sibling.sibling);
          }
        }
      }
      function insertOrAppendPlacementNode(node, before, parent) {
        const { tag } = node;
        const isHost = tag === HostComponent || tag === HostText;
        if (isHost || enableFundamentalAPI) {
          const stateNode = isHost ? node.stateNode : node.stateNode.instance;
          before
            ? insertBefore(parent, stateNode, before)
            : appendChild(parent, stateNode);
        } else if (tag !== HostPortal) {
          const { child } = node;
          if (child !== null) {
            insertOrAppendPlacementNode(child, before, parent);
            for (let { sibling } = child; sibling !== null; )
              insertOrAppendPlacementNode(sibling, before, parent),
                (sibling = sibling.sibling);
          }
        }
      }
      function unmountHostComponents(
        finishedRoot,
        current2,
        renderPriorityLevel
      ) {
        for (
          var node = current2,
            currentParentIsValid = !1,
            currentParent,
            currentParentIsContainer;
          ;

        ) {
          if (!currentParentIsValid) {
            let parent = node.return;
            findParent: for (;;) {
              if (parent === null)
                throw Error(
                  'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
                );
              const parentStateNode = parent.stateNode;
              switch (parent.tag) {
                case HostComponent:
                  (currentParent = parentStateNode),
                    (currentParentIsContainer = !1);
                  break findParent;
                case HostRoot:
                  (currentParent = parentStateNode.containerInfo),
                    (currentParentIsContainer = !0);
                  break findParent;
                case HostPortal:
                  (currentParent = parentStateNode.containerInfo),
                    (currentParentIsContainer = !0);
                  break findParent;
              }
              parent = parent.return;
            }
            currentParentIsValid = !0;
          }
          if (node.tag === HostComponent || node.tag === HostText)
            commitNestedUnmounts(finishedRoot, node, renderPriorityLevel),
              currentParentIsContainer
                ? removeChildFromContainer(currentParent, node.stateNode)
                : removeChild(currentParent, node.stateNode);
          else if (node.tag === HostPortal) {
            if (node.child !== null) {
              (currentParent = node.stateNode.containerInfo),
                (currentParentIsContainer = !0),
                (node.child.return = node),
                (node = node.child);
              continue;
            }
          } else if (
            (commitUnmount(finishedRoot, node, renderPriorityLevel),
            node.child !== null)
          ) {
            (node.child.return = node), (node = node.child);
            continue;
          }
          if (node === current2) return;
          for (; node.sibling === null; ) {
            if (node.return === null || node.return === current2) return;
            (node = node.return),
              node.tag === HostPortal && (currentParentIsValid = !1);
          }
          (node.sibling.return = node.return), (node = node.sibling);
        }
      }
      function commitDeletion(finishedRoot, current2, renderPriorityLevel) {
        unmountHostComponents(finishedRoot, current2, renderPriorityLevel),
          detachFiber(current2);
      }
      function commitWork(current2, finishedWork) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent:
          case Block: {
            commitHookEffectListUnmount(Layout | HasEffect, finishedWork);
            return;
          }
          case ClassComponent:
            return;
          case HostComponent: {
            const instance = finishedWork.stateNode;
            if (instance != null) {
              const newProps = finishedWork.memoizedProps;
              const oldProps =
                current2 !== null ? current2.memoizedProps : newProps;
              const { type } = finishedWork;
              const updatePayload = finishedWork.updateQueue;
              (finishedWork.updateQueue = null),
                updatePayload !== null &&
                  commitUpdate(
                    instance,
                    updatePayload,
                    type,
                    oldProps,
                    newProps
                  );
            }
            return;
          }
          case HostText: {
            if (finishedWork.stateNode === null)
              throw Error(
                'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
              );
            const textInstance = finishedWork.stateNode;
            const newText = finishedWork.memoizedProps;
            const oldText =
              current2 !== null ? current2.memoizedProps : newText;
            commitTextUpdate(textInstance, oldText, newText);
            return;
          }
          case HostRoot: {
            {
              const _root = finishedWork.stateNode;
              _root.hydrate &&
                ((_root.hydrate = !1),
                commitHydratedContainer(_root.containerInfo));
            }
            return;
          }
          case Profiler:
            return;
          case SuspenseComponent: {
            commitSuspenseComponent(finishedWork),
              attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case SuspenseListComponent: {
            attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case IncompleteClassComponent:
            return;
        }
        throw Error(
          'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
        );
      }
      function commitSuspenseComponent(finishedWork) {
        const newState = finishedWork.memoizedState;
        let newDidTimeout;
        let primaryChildParent = finishedWork;
        newState === null
          ? (newDidTimeout = !1)
          : ((newDidTimeout = !0),
            (primaryChildParent = finishedWork.child),
            markCommitTimeOfFallback()),
          primaryChildParent !== null &&
            hideOrUnhideAllChildren(primaryChildParent, newDidTimeout);
      }
      function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
        const newState = finishedWork.memoizedState;
        if (newState === null) {
          const current2 = finishedWork.alternate;
          if (current2 !== null) {
            const prevState = current2.memoizedState;
            if (prevState !== null) {
              const suspenseInstance = prevState.dehydrated;
              suspenseInstance !== null &&
                commitHydratedSuspenseInstance(suspenseInstance);
            }
          }
        }
      }
      function attachSuspenseRetryListeners(finishedWork) {
        const thenables = finishedWork.updateQueue;
        if (thenables !== null) {
          finishedWork.updateQueue = null;
          let retryCache = finishedWork.stateNode;
          retryCache === null &&
            (retryCache = finishedWork.stateNode = new PossiblyWeakSet()),
            thenables.forEach((thenable) => {
              let retry = resolveRetryThenable.bind(
                null,
                finishedWork,
                thenable
              );
              retryCache.has(thenable) ||
                (thenable.__reactDoNotTraceInteractions !== !0 &&
                  (retry = tracing.unstable_wrap(retry)),
                retryCache.add(thenable),
                thenable.then(retry, retry));
            });
        }
      }
      function commitResetTextContent(current2) {
        resetTextContent(current2.stateNode);
      }
      const PossiblyWeakMap$1 = typeof WeakMap === 'function' ? WeakMap : Map;
      function createRootErrorUpdate(fiber, errorInfo, expirationTime) {
        const update = createUpdate(expirationTime, null);
        (update.tag = CaptureUpdate), (update.payload = { element: null });
        const error2 = errorInfo.value;
        return (
          (update.callback = function () {
            onUncaughtError(error2), logError(fiber, errorInfo);
          }),
          update
        );
      }
      function createClassErrorUpdate(fiber, errorInfo, expirationTime) {
        const update = createUpdate(expirationTime, null);
        update.tag = CaptureUpdate;
        const { getDerivedStateFromError } = fiber.type;
        if (typeof getDerivedStateFromError === 'function') {
          const error$1 = errorInfo.value;
          update.payload = function () {
            return (
              logError(fiber, errorInfo), getDerivedStateFromError(error$1)
            );
          };
        }
        const inst = fiber.stateNode;
        return (
          inst !== null && typeof inst.componentDidCatch === 'function'
            ? (update.callback = function () {
                markFailedErrorBoundaryForHotReloading(fiber),
                  typeof getDerivedStateFromError !== 'function' &&
                    (markLegacyErrorBoundaryAsFailed(this),
                    logError(fiber, errorInfo));
                const error$12 = errorInfo.value;
                const { stack } = errorInfo;
                this.componentDidCatch(error$12, {
                  componentStack: stack !== null ? stack : '',
                }),
                  typeof getDerivedStateFromError !== 'function' &&
                    fiber.expirationTime !== Sync &&
                    error(
                      '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                      getComponentName(fiber.type) || 'Unknown'
                    );
              })
            : (update.callback = function () {
                markFailedErrorBoundaryForHotReloading(fiber);
              }),
          update
        );
      }
      function attachPingListener(root2, renderExpirationTime2, thenable) {
        let { pingCache } = root2;
        let threadIDs;
        if (
          (pingCache === null
            ? ((pingCache = root2.pingCache = new PossiblyWeakMap$1()),
              (threadIDs = new Set()),
              pingCache.set(thenable, threadIDs))
            : ((threadIDs = pingCache.get(thenable)),
              threadIDs === void 0 &&
                ((threadIDs = new Set()), pingCache.set(thenable, threadIDs))),
          !threadIDs.has(renderExpirationTime2))
        ) {
          threadIDs.add(renderExpirationTime2);
          const ping = pingSuspendedRoot.bind(
            null,
            root2,
            thenable,
            renderExpirationTime2
          );
          thenable.then(ping, ping);
        }
      }
      function throwException(
        root2,
        returnFiber,
        sourceFiber,
        value,
        renderExpirationTime2
      ) {
        if (
          ((sourceFiber.effectTag |= Incomplete),
          (sourceFiber.firstEffect = sourceFiber.lastEffect = null),
          value !== null &&
            typeof value === 'object' &&
            typeof value.then === 'function')
        ) {
          const thenable = value;
          if ((sourceFiber.mode & BlockingMode) === NoMode) {
            const currentSource = sourceFiber.alternate;
            currentSource
              ? ((sourceFiber.updateQueue = currentSource.updateQueue),
                (sourceFiber.memoizedState = currentSource.memoizedState),
                (sourceFiber.expirationTime = currentSource.expirationTime))
              : ((sourceFiber.updateQueue = null),
                (sourceFiber.memoizedState = null));
          }
          const hasInvisibleParentBoundary = hasSuspenseContext(
            suspenseStackCursor.current,
            InvisibleParentSuspenseContext
          );
          let _workInProgress = returnFiber;
          do {
            if (
              _workInProgress.tag === SuspenseComponent &&
              shouldCaptureSuspense(_workInProgress, hasInvisibleParentBoundary)
            ) {
              const thenables = _workInProgress.updateQueue;
              if (thenables === null) {
                const updateQueue = new Set();
                updateQueue.add(thenable),
                  (_workInProgress.updateQueue = updateQueue);
              } else thenables.add(thenable);
              if ((_workInProgress.mode & BlockingMode) === NoMode) {
                if (
                  ((_workInProgress.effectTag |= DidCapture),
                  (sourceFiber.effectTag &= ~(
                    LifecycleEffectMask | Incomplete
                  )),
                  sourceFiber.tag === ClassComponent)
                ) {
                  const currentSourceFiber = sourceFiber.alternate;
                  if (currentSourceFiber === null)
                    sourceFiber.tag = IncompleteClassComponent;
                  else {
                    const update = createUpdate(Sync, null);
                    (update.tag = ForceUpdate),
                      enqueueUpdate(sourceFiber, update);
                  }
                }
                sourceFiber.expirationTime = Sync;
                return;
              }
              attachPingListener(root2, renderExpirationTime2, thenable),
                (_workInProgress.effectTag |= ShouldCapture),
                (_workInProgress.expirationTime = renderExpirationTime2);
              return;
            }
            _workInProgress = _workInProgress.return;
          } while (_workInProgress !== null);
          value = new Error(`${
            getComponentName(sourceFiber.type) || 'A React component'
          } suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.${getStackByFiberInDevAndProd(
            sourceFiber
          )}`);
        }
        renderDidError(), (value = createCapturedValue(value, sourceFiber));
        let workInProgress2 = returnFiber;
        do {
          switch (workInProgress2.tag) {
            case HostRoot: {
              const _errorInfo = value;
              (workInProgress2.effectTag |= ShouldCapture),
                (workInProgress2.expirationTime = renderExpirationTime2);
              const _update = createRootErrorUpdate(
                workInProgress2,
                _errorInfo,
                renderExpirationTime2
              );
              enqueueCapturedUpdate(workInProgress2, _update);
              return;
            }
            case ClassComponent:
              var errorInfo = value;
              var ctor = workInProgress2.type;
              var instance = workInProgress2.stateNode;
              if (
                (workInProgress2.effectTag & DidCapture) === NoEffect &&
                (typeof ctor.getDerivedStateFromError === 'function' ||
                  (instance !== null &&
                    typeof instance.componentDidCatch === 'function' &&
                    !isAlreadyFailedLegacyErrorBoundary(instance)))
              ) {
                (workInProgress2.effectTag |= ShouldCapture),
                  (workInProgress2.expirationTime = renderExpirationTime2);
                const _update2 = createClassErrorUpdate(
                  workInProgress2,
                  errorInfo,
                  renderExpirationTime2
                );
                enqueueCapturedUpdate(workInProgress2, _update2);
                return;
              }
              break;
          }
          workInProgress2 = workInProgress2.return;
        } while (workInProgress2 !== null);
      }
      const { ceil } = Math;
      const ReactCurrentDispatcher$1 =
        ReactSharedInternals.ReactCurrentDispatcher;
      const ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner;
      const { IsSomeRendererActing } = ReactSharedInternals;
      const NoContext = 0;
      const BatchedContext = 1;
      const EventContext = 2;
      const DiscreteEventContext = 4;
      const LegacyUnbatchedContext = 8;
      const RenderContext = 16;
      const CommitContext = 32;
      const RootIncomplete = 0;
      const RootFatalErrored = 1;
      const RootErrored = 2;
      const RootSuspended = 3;
      const RootSuspendedWithDelay = 4;
      const RootCompleted = 5;
      let executionContext = NoContext;
      let workInProgressRoot = null;
      let workInProgress = null;
      let renderExpirationTime$1 = NoWork;
      let workInProgressRootExitStatus = RootIncomplete;
      let workInProgressRootFatalError = null;
      let workInProgressRootLatestProcessedExpirationTime = Sync;
      let workInProgressRootLatestSuspenseTimeout = Sync;
      let workInProgressRootCanSuspendUsingConfig = null;
      let workInProgressRootNextUnprocessedUpdateTime = NoWork;
      let workInProgressRootHasPendingPing = !1;
      let globalMostRecentFallbackTime = 0;
      const FALLBACK_THROTTLE_MS = 500;
      let nextEffect = null;
      let hasUncaughtError = !1;
      let firstUncaughtError = null;
      let legacyErrorBoundariesThatAlreadyFailed = null;
      let rootDoesHavePassiveEffects = !1;
      let rootWithPendingPassiveEffects = null;
      let pendingPassiveEffectsRenderPriority = NoPriority;
      let pendingPassiveEffectsExpirationTime = NoWork;
      let rootsWithPendingDiscreteUpdates = null;
      const NESTED_UPDATE_LIMIT = 50;
      let nestedUpdateCount = 0;
      let rootWithNestedUpdates = null;
      const NESTED_PASSIVE_UPDATE_LIMIT = 50;
      let nestedPassiveUpdateCount = 0;
      let interruptedBy = null;
      let spawnedWorkDuringRender = null;
      let currentEventTime = NoWork;
      function requestCurrentTimeForUpdate() {
        return (executionContext & (RenderContext | CommitContext)) !==
          NoContext
          ? msToExpirationTime(now())
          : (currentEventTime !== NoWork ||
              (currentEventTime = msToExpirationTime(now())),
            currentEventTime);
      }
      function getCurrentTime() {
        return msToExpirationTime(now());
      }
      function computeExpirationForFiber(currentTime, fiber, suspenseConfig) {
        const { mode } = fiber;
        if ((mode & BlockingMode) === NoMode) return Sync;
        const priorityLevel = getCurrentPriorityLevel();
        if ((mode & ConcurrentMode) === NoMode)
          return priorityLevel === ImmediatePriority ? Sync : Batched;
        if ((executionContext & RenderContext) !== NoContext)
          return renderExpirationTime$1;
        let expirationTime;
        if (suspenseConfig !== null)
          expirationTime = computeSuspenseExpiration(
            currentTime,
            suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION
          );
        else
          switch (priorityLevel) {
            case ImmediatePriority:
              expirationTime = Sync;
              break;
            case UserBlockingPriority$1:
              expirationTime = computeInteractiveExpiration(currentTime);
              break;
            case NormalPriority:
            case LowPriority:
              expirationTime = computeAsyncExpiration(currentTime);
              break;
            case IdlePriority:
              expirationTime = Idle;
              break;
            default:
              throw Error('Expected a valid priority level');
          }
        return (
          workInProgressRoot !== null &&
            expirationTime === renderExpirationTime$1 &&
            (expirationTime -= 1),
          expirationTime
        );
      }
      function scheduleUpdateOnFiber(fiber, expirationTime) {
        checkForNestedUpdates(), warnAboutRenderPhaseUpdatesInDEV(fiber);
        const root2 = markUpdateTimeFromFiberToRoot(fiber, expirationTime);
        if (root2 === null) {
          warnAboutUpdateOnUnmountedFiberInDEV(fiber);
          return;
        }
        checkForInterruption(fiber, expirationTime), recordScheduleUpdate();
        const priorityLevel = getCurrentPriorityLevel();
        if (
          (expirationTime === Sync
            ? (executionContext & LegacyUnbatchedContext) !== NoContext &&
              (executionContext & (RenderContext | CommitContext)) === NoContext
              ? (schedulePendingInteractions(root2, expirationTime),
                performSyncWorkOnRoot(root2))
              : (ensureRootIsScheduled(root2),
                schedulePendingInteractions(root2, expirationTime),
                executionContext === NoContext && flushSyncCallbackQueue())
            : (ensureRootIsScheduled(root2),
              schedulePendingInteractions(root2, expirationTime)),
          (executionContext & DiscreteEventContext) !== NoContext &&
            (priorityLevel === UserBlockingPriority$1 ||
              priorityLevel === ImmediatePriority))
        )
          if (rootsWithPendingDiscreteUpdates === null)
            rootsWithPendingDiscreteUpdates = new Map([
              [root2, expirationTime],
            ]);
          else {
            const lastDiscreteTime = rootsWithPendingDiscreteUpdates.get(root2);
            (lastDiscreteTime === void 0 ||
              lastDiscreteTime > expirationTime) &&
              rootsWithPendingDiscreteUpdates.set(root2, expirationTime);
          }
      }
      var scheduleWork = scheduleUpdateOnFiber;
      function markUpdateTimeFromFiberToRoot(fiber, expirationTime) {
        fiber.expirationTime < expirationTime &&
          (fiber.expirationTime = expirationTime);
        let { alternate } = fiber;
        alternate !== null &&
          alternate.expirationTime < expirationTime &&
          (alternate.expirationTime = expirationTime);
        let node = fiber.return;
        let root2 = null;
        if (node === null && fiber.tag === HostRoot) root2 = fiber.stateNode;
        else
          for (; node !== null; ) {
            if (
              ((alternate = node.alternate),
              node.childExpirationTime < expirationTime &&
                (node.childExpirationTime = expirationTime),
              alternate !== null &&
                alternate.childExpirationTime < expirationTime &&
                (alternate.childExpirationTime = expirationTime),
              node.return === null && node.tag === HostRoot)
            ) {
              root2 = node.stateNode;
              break;
            }
            node = node.return;
          }
        return (
          root2 !== null &&
            (workInProgressRoot === root2 &&
              (markUnprocessedUpdateTime(expirationTime),
              workInProgressRootExitStatus === RootSuspendedWithDelay &&
                markRootSuspendedAtTime(root2, renderExpirationTime$1)),
            markRootUpdatedAtTime(root2, expirationTime)),
          root2
        );
      }
      function getNextRootExpirationTimeToWorkOn(root2) {
        const { lastExpiredTime } = root2;
        if (lastExpiredTime !== NoWork) return lastExpiredTime;
        const { firstPendingTime } = root2;
        if (!isRootSuspendedAtTime(root2, firstPendingTime))
          return firstPendingTime;
        const { lastPingedTime } = root2;
        const { nextKnownPendingLevel } = root2;
        const nextLevel =
          lastPingedTime > nextKnownPendingLevel
            ? lastPingedTime
            : nextKnownPendingLevel;
        return nextLevel <= Idle && firstPendingTime !== nextLevel
          ? NoWork
          : nextLevel;
      }
      function ensureRootIsScheduled(root2) {
        const { lastExpiredTime } = root2;
        if (lastExpiredTime !== NoWork) {
          (root2.callbackExpirationTime = Sync),
            (root2.callbackPriority = ImmediatePriority),
            (root2.callbackNode = scheduleSyncCallback(
              performSyncWorkOnRoot.bind(null, root2)
            ));
          return;
        }
        const expirationTime = getNextRootExpirationTimeToWorkOn(root2);
        const existingCallbackNode = root2.callbackNode;
        if (expirationTime === NoWork) {
          existingCallbackNode !== null &&
            ((root2.callbackNode = null),
            (root2.callbackExpirationTime = NoWork),
            (root2.callbackPriority = NoPriority));
          return;
        }
        const currentTime = requestCurrentTimeForUpdate();
        const priorityLevel = inferPriorityFromExpirationTime(
          currentTime,
          expirationTime
        );
        if (existingCallbackNode !== null) {
          const existingCallbackPriority = root2.callbackPriority;
          const existingCallbackExpirationTime = root2.callbackExpirationTime;
          if (
            existingCallbackExpirationTime === expirationTime &&
            existingCallbackPriority >= priorityLevel
          )
            return;
          cancelCallback(existingCallbackNode);
        }
        (root2.callbackExpirationTime = expirationTime),
          (root2.callbackPriority = priorityLevel);
        let callbackNode;
        expirationTime === Sync
          ? (callbackNode = scheduleSyncCallback(
              performSyncWorkOnRoot.bind(null, root2)
            ))
          : (callbackNode = scheduleCallback(
              priorityLevel,
              performConcurrentWorkOnRoot.bind(null, root2),
              { timeout: expirationTimeToMs(expirationTime) - now() }
            )),
          (root2.callbackNode = callbackNode);
      }
      function performConcurrentWorkOnRoot(root2, didTimeout) {
        if (((currentEventTime = NoWork), didTimeout)) {
          const currentTime = requestCurrentTimeForUpdate();
          return (
            markRootExpiredAtTime(root2, currentTime),
            ensureRootIsScheduled(root2),
            null
          );
        }
        const expirationTime = getNextRootExpirationTimeToWorkOn(root2);
        if (expirationTime !== NoWork) {
          const originalCallbackNode = root2.callbackNode;
          if (
            (executionContext & (RenderContext | CommitContext)) !==
            NoContext
          )
            throw Error('Should not already be working.');
          if (
            (flushPassiveEffects(),
            (root2 !== workInProgressRoot ||
              expirationTime !== renderExpirationTime$1) &&
              (prepareFreshStack(root2, expirationTime),
              startWorkOnPendingInteractions(root2, expirationTime)),
            workInProgress !== null)
          ) {
            const prevExecutionContext = executionContext;
            executionContext |= RenderContext;
            const prevDispatcher = pushDispatcher();
            const prevInteractions = pushInteractions(root2);
            startWorkLoopTimer(workInProgress);
            do
              try {
                workLoopConcurrent();
                break;
              } catch (thrownValue) {
                handleError(root2, thrownValue);
              }
            while (!0);
            if (
              (resetContextDependencies(),
              (executionContext = prevExecutionContext),
              popDispatcher(prevDispatcher),
              popInteractions(prevInteractions),
              workInProgressRootExitStatus === RootFatalErrored)
            ) {
              const fatalError = workInProgressRootFatalError;
              throw (
                (stopInterruptedWorkLoopTimer(),
                prepareFreshStack(root2, expirationTime),
                markRootSuspendedAtTime(root2, expirationTime),
                ensureRootIsScheduled(root2),
                fatalError)
              );
            }
            if (workInProgress !== null) stopInterruptedWorkLoopTimer();
            else {
              stopFinishedWorkLoopTimer();
              const finishedWork = (root2.finishedWork =
                root2.current.alternate);
              (root2.finishedExpirationTime = expirationTime),
                finishConcurrentRender(
                  root2,
                  finishedWork,
                  workInProgressRootExitStatus,
                  expirationTime
                );
            }
            if (
              (ensureRootIsScheduled(root2),
              root2.callbackNode === originalCallbackNode)
            )
              return performConcurrentWorkOnRoot.bind(null, root2);
          }
        }
        return null;
      }
      function finishConcurrentRender(
        root2,
        finishedWork,
        exitStatus,
        expirationTime
      ) {
        switch (((workInProgressRoot = null), exitStatus)) {
          case RootIncomplete:
          case RootFatalErrored:
            throw Error('Root did not complete. This is a bug in React.');
          case RootErrored: {
            markRootExpiredAtTime(
              root2,
              expirationTime > Idle ? Idle : expirationTime
            );
            break;
          }
          case RootSuspended: {
            markRootSuspendedAtTime(root2, expirationTime);
            const { lastSuspendedTime } = root2;
            expirationTime === lastSuspendedTime &&
              (root2.nextKnownPendingLevel =
                getRemainingExpirationTime(finishedWork));
            const hasNotProcessedNewUpdates =
              workInProgressRootLatestProcessedExpirationTime === Sync;
            if (hasNotProcessedNewUpdates && !IsThisRendererActing.current) {
              const msUntilTimeout =
                globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
              if (msUntilTimeout > 10) {
                if (workInProgressRootHasPendingPing) {
                  const { lastPingedTime } = root2;
                  if (
                    lastPingedTime === NoWork ||
                    lastPingedTime >= expirationTime
                  ) {
                    (root2.lastPingedTime = expirationTime),
                      prepareFreshStack(root2, expirationTime);
                    break;
                  }
                }
                const nextTime = getNextRootExpirationTimeToWorkOn(root2);
                if (nextTime !== NoWork && nextTime !== expirationTime) break;
                if (
                  lastSuspendedTime !== NoWork &&
                  lastSuspendedTime !== expirationTime
                ) {
                  root2.lastPingedTime = lastSuspendedTime;
                  break;
                }
                root2.timeoutHandle = scheduleTimeout(
                  commitRoot.bind(null, root2),
                  msUntilTimeout
                );
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          case RootSuspendedWithDelay: {
            markRootSuspendedAtTime(root2, expirationTime);
            const _lastSuspendedTime = root2.lastSuspendedTime;
            if (
              (expirationTime === _lastSuspendedTime &&
                (root2.nextKnownPendingLevel =
                  getRemainingExpirationTime(finishedWork)),
              !IsThisRendererActing.current)
            ) {
              if (workInProgressRootHasPendingPing) {
                const _lastPingedTime = root2.lastPingedTime;
                if (
                  _lastPingedTime === NoWork ||
                  _lastPingedTime >= expirationTime
                ) {
                  (root2.lastPingedTime = expirationTime),
                    prepareFreshStack(root2, expirationTime);
                  break;
                }
              }
              const _nextTime = getNextRootExpirationTimeToWorkOn(root2);
              if (_nextTime !== NoWork && _nextTime !== expirationTime) break;
              if (
                _lastSuspendedTime !== NoWork &&
                _lastSuspendedTime !== expirationTime
              ) {
                root2.lastPingedTime = _lastSuspendedTime;
                break;
              }
              let _msUntilTimeout;
              if (workInProgressRootLatestSuspenseTimeout !== Sync)
                _msUntilTimeout =
                  expirationTimeToMs(workInProgressRootLatestSuspenseTimeout) -
                  now();
              else if (workInProgressRootLatestProcessedExpirationTime === Sync)
                _msUntilTimeout = 0;
              else {
                const eventTimeMs = inferTimeFromExpirationTime(
                  workInProgressRootLatestProcessedExpirationTime
                );
                const currentTimeMs = now();
                const timeUntilExpirationMs =
                  expirationTimeToMs(expirationTime) - currentTimeMs;
                let timeElapsed = currentTimeMs - eventTimeMs;
                timeElapsed < 0 && (timeElapsed = 0),
                  (_msUntilTimeout = jnd(timeElapsed) - timeElapsed),
                  timeUntilExpirationMs < _msUntilTimeout &&
                    (_msUntilTimeout = timeUntilExpirationMs);
              }
              if (_msUntilTimeout > 10) {
                root2.timeoutHandle = scheduleTimeout(
                  commitRoot.bind(null, root2),
                  _msUntilTimeout
                );
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          case RootCompleted: {
            if (
              !IsThisRendererActing.current &&
              workInProgressRootLatestProcessedExpirationTime !== Sync &&
              workInProgressRootCanSuspendUsingConfig !== null
            ) {
              const _msUntilTimeout2 = computeMsUntilSuspenseLoadingDelay(
                workInProgressRootLatestProcessedExpirationTime,
                expirationTime,
                workInProgressRootCanSuspendUsingConfig
              );
              if (_msUntilTimeout2 > 10) {
                markRootSuspendedAtTime(root2, expirationTime),
                  (root2.timeoutHandle = scheduleTimeout(
                    commitRoot.bind(null, root2),
                    _msUntilTimeout2
                  ));
                break;
              }
            }
            commitRoot(root2);
            break;
          }
          default:
            throw Error('Unknown root exit status.');
        }
      }
      function performSyncWorkOnRoot(root2) {
        const { lastExpiredTime } = root2;
        const expirationTime =
          lastExpiredTime !== NoWork ? lastExpiredTime : Sync;
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
          throw Error('Should not already be working.');
        if (
          (flushPassiveEffects(),
          (root2 !== workInProgressRoot ||
            expirationTime !== renderExpirationTime$1) &&
            (prepareFreshStack(root2, expirationTime),
            startWorkOnPendingInteractions(root2, expirationTime)),
          workInProgress !== null)
        ) {
          const prevExecutionContext = executionContext;
          executionContext |= RenderContext;
          const prevDispatcher = pushDispatcher();
          const prevInteractions = pushInteractions(root2);
          startWorkLoopTimer(workInProgress);
          do
            try {
              workLoopSync();
              break;
            } catch (thrownValue) {
              handleError(root2, thrownValue);
            }
          while (!0);
          if (
            (resetContextDependencies(),
            (executionContext = prevExecutionContext),
            popDispatcher(prevDispatcher),
            popInteractions(prevInteractions),
            workInProgressRootExitStatus === RootFatalErrored)
          ) {
            const fatalError = workInProgressRootFatalError;
            throw (
              (stopInterruptedWorkLoopTimer(),
              prepareFreshStack(root2, expirationTime),
              markRootSuspendedAtTime(root2, expirationTime),
              ensureRootIsScheduled(root2),
              fatalError)
            );
          }
          if (workInProgress !== null)
            throw Error(
              'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
            );
          stopFinishedWorkLoopTimer(),
            (root2.finishedWork = root2.current.alternate),
            (root2.finishedExpirationTime = expirationTime),
            finishSyncRender(root2),
            ensureRootIsScheduled(root2);
        }
        return null;
      }
      function finishSyncRender(root2) {
        (workInProgressRoot = null), commitRoot(root2);
      }
      function flushDiscreteUpdates() {
        if (
          (executionContext &
            (BatchedContext | RenderContext | CommitContext)) !==
          NoContext
        ) {
          (executionContext & RenderContext) !== NoContext &&
            error(
              'unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.'
            );
          return;
        }
        flushPendingDiscreteUpdates(), flushPassiveEffects();
      }
      function syncUpdates(fn, a, b, c) {
        return runWithPriority$1(ImmediatePriority, fn.bind(null, a, b, c));
      }
      function flushPendingDiscreteUpdates() {
        if (rootsWithPendingDiscreteUpdates !== null) {
          const roots = rootsWithPendingDiscreteUpdates;
          (rootsWithPendingDiscreteUpdates = null),
            roots.forEach((expirationTime, root2) => {
              markRootExpiredAtTime(root2, expirationTime),
                ensureRootIsScheduled(root2);
            }),
            flushSyncCallbackQueue();
        }
      }
      function batchedUpdates$1(fn, a) {
        const prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
          return fn(a);
        } finally {
          (executionContext = prevExecutionContext),
            executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function batchedEventUpdates$1(fn, a) {
        const prevExecutionContext = executionContext;
        executionContext |= EventContext;
        try {
          return fn(a);
        } finally {
          (executionContext = prevExecutionContext),
            executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function discreteUpdates$1(fn, a, b, c, d) {
        const prevExecutionContext = executionContext;
        executionContext |= DiscreteEventContext;
        try {
          return runWithPriority$1(
            UserBlockingPriority$1,
            fn.bind(null, a, b, c, d)
          );
        } finally {
          (executionContext = prevExecutionContext),
            executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function unbatchedUpdates(fn, a) {
        const prevExecutionContext = executionContext;
        (executionContext &= ~BatchedContext),
          (executionContext |= LegacyUnbatchedContext);
        try {
          return fn(a);
        } finally {
          (executionContext = prevExecutionContext),
            executionContext === NoContext && flushSyncCallbackQueue();
        }
      }
      function flushSync2(fn, a) {
        if ((executionContext & (RenderContext | CommitContext)) !== NoContext)
          throw Error(
            'flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.'
          );
        const prevExecutionContext = executionContext;
        executionContext |= BatchedContext;
        try {
          return runWithPriority$1(ImmediatePriority, fn.bind(null, a));
        } finally {
          (executionContext = prevExecutionContext), flushSyncCallbackQueue();
        }
      }
      function prepareFreshStack(root2, expirationTime) {
        (root2.finishedWork = null), (root2.finishedExpirationTime = NoWork);
        const { timeoutHandle } = root2;
        if (
          (timeoutHandle !== noTimeout &&
            ((root2.timeoutHandle = noTimeout), cancelTimeout(timeoutHandle)),
          workInProgress !== null)
        )
          for (
            let interruptedWork = workInProgress.return;
            interruptedWork !== null;

          )
            unwindInterruptedWork(interruptedWork),
              (interruptedWork = interruptedWork.return);
        (workInProgressRoot = root2),
          (workInProgress = createWorkInProgress(root2.current, null)),
          (renderExpirationTime$1 = expirationTime),
          (workInProgressRootExitStatus = RootIncomplete),
          (workInProgressRootFatalError = null),
          (workInProgressRootLatestProcessedExpirationTime = Sync),
          (workInProgressRootLatestSuspenseTimeout = Sync),
          (workInProgressRootCanSuspendUsingConfig = null),
          (workInProgressRootNextUnprocessedUpdateTime = NoWork),
          (workInProgressRootHasPendingPing = !1),
          (spawnedWorkDuringRender = null),
          ReactStrictModeWarnings.discardPendingWarnings();
      }
      function handleError(root2, thrownValue) {
        do {
          try {
            if (
              (resetContextDependencies(),
              resetHooksAfterThrow(),
              resetCurrentFiber(),
              workInProgress === null || workInProgress.return === null)
            )
              return (
                (workInProgressRootExitStatus = RootFatalErrored),
                (workInProgressRootFatalError = thrownValue),
                (workInProgress = null),
                null
              );
            enableProfilerTimer &&
              workInProgress.mode & ProfileMode &&
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, !0),
              throwException(
                root2,
                workInProgress.return,
                workInProgress,
                thrownValue,
                renderExpirationTime$1
              ),
              (workInProgress = completeUnitOfWork(workInProgress));
          } catch (yetAnotherThrownValue) {
            thrownValue = yetAnotherThrownValue;
            continue;
          }
          return;
        } while (!0);
      }
      function pushDispatcher(root2) {
        const prevDispatcher = ReactCurrentDispatcher$1.current;
        return (
          (ReactCurrentDispatcher$1.current = ContextOnlyDispatcher),
          prevDispatcher === null ? ContextOnlyDispatcher : prevDispatcher
        );
      }
      function popDispatcher(prevDispatcher) {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
      function pushInteractions(root2) {
        {
          const prevInteractions = tracing.__interactionsRef.current;
          return (
            (tracing.__interactionsRef.current = root2.memoizedInteractions),
            prevInteractions
          );
        }
      }
      function popInteractions(prevInteractions) {
        tracing.__interactionsRef.current = prevInteractions;
      }
      function markCommitTimeOfFallback() {
        globalMostRecentFallbackTime = now();
      }
      function markRenderEventTimeAndConfig(expirationTime, suspenseConfig) {
        expirationTime < workInProgressRootLatestProcessedExpirationTime &&
          expirationTime > Idle &&
          (workInProgressRootLatestProcessedExpirationTime = expirationTime),
          suspenseConfig !== null &&
            expirationTime < workInProgressRootLatestSuspenseTimeout &&
            expirationTime > Idle &&
            ((workInProgressRootLatestSuspenseTimeout = expirationTime),
            (workInProgressRootCanSuspendUsingConfig = suspenseConfig));
      }
      function markUnprocessedUpdateTime(expirationTime) {
        expirationTime > workInProgressRootNextUnprocessedUpdateTime &&
          (workInProgressRootNextUnprocessedUpdateTime = expirationTime);
      }
      function renderDidSuspend() {
        workInProgressRootExitStatus === RootIncomplete &&
          (workInProgressRootExitStatus = RootSuspended);
      }
      function renderDidSuspendDelayIfPossible() {
        (workInProgressRootExitStatus === RootIncomplete ||
          workInProgressRootExitStatus === RootSuspended) &&
          (workInProgressRootExitStatus = RootSuspendedWithDelay),
          workInProgressRootNextUnprocessedUpdateTime !== NoWork &&
            workInProgressRoot !== null &&
            (markRootSuspendedAtTime(
              workInProgressRoot,
              renderExpirationTime$1
            ),
            markRootUpdatedAtTime(
              workInProgressRoot,
              workInProgressRootNextUnprocessedUpdateTime
            ));
      }
      function renderDidError() {
        workInProgressRootExitStatus !== RootCompleted &&
          (workInProgressRootExitStatus = RootErrored);
      }
      function renderHasNotSuspendedYet() {
        return workInProgressRootExitStatus === RootIncomplete;
      }
      function inferTimeFromExpirationTime(expirationTime) {
        const earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return earliestExpirationTimeMs - LOW_PRIORITY_EXPIRATION;
      }
      function inferTimeFromExpirationTimeWithSuspenseConfig(
        expirationTime,
        suspenseConfig
      ) {
        const earliestExpirationTimeMs = expirationTimeToMs(expirationTime);
        return (
          earliestExpirationTimeMs -
          (suspenseConfig.timeoutMs | 0 || LOW_PRIORITY_EXPIRATION)
        );
      }
      function workLoopSync() {
        for (; workInProgress !== null; )
          workInProgress = performUnitOfWork(workInProgress);
      }
      function workLoopConcurrent() {
        for (; workInProgress !== null && !shouldYield(); )
          workInProgress = performUnitOfWork(workInProgress);
      }
      function performUnitOfWork(unitOfWork) {
        const current2 = unitOfWork.alternate;
        startWorkTimer(unitOfWork), setCurrentFiber(unitOfWork);
        let next;
        return (
          (unitOfWork.mode & ProfileMode) !== NoMode
            ? (startProfilerTimer(unitOfWork),
              (next = beginWork$1(
                current2,
                unitOfWork,
                renderExpirationTime$1
              )),
              stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, !0))
            : (next = beginWork$1(
                current2,
                unitOfWork,
                renderExpirationTime$1
              )),
          resetCurrentFiber(),
          (unitOfWork.memoizedProps = unitOfWork.pendingProps),
          next === null && (next = completeUnitOfWork(unitOfWork)),
          (ReactCurrentOwner$2.current = null),
          next
        );
      }
      function completeUnitOfWork(unitOfWork) {
        workInProgress = unitOfWork;
        do {
          const current2 = workInProgress.alternate;
          const returnFiber = workInProgress.return;
          if ((workInProgress.effectTag & Incomplete) === NoEffect) {
            setCurrentFiber(workInProgress);
            let next = void 0;
            if (
              ((workInProgress.mode & ProfileMode) === NoMode
                ? (next = completeWork(
                    current2,
                    workInProgress,
                    renderExpirationTime$1
                  ))
                : (startProfilerTimer(workInProgress),
                  (next = completeWork(
                    current2,
                    workInProgress,
                    renderExpirationTime$1
                  )),
                  stopProfilerTimerIfRunningAndRecordDelta(workInProgress, !1)),
              stopWorkTimer(workInProgress),
              resetCurrentFiber(),
              resetChildExpirationTime(workInProgress),
              next !== null)
            )
              return next;
            if (
              returnFiber !== null &&
              (returnFiber.effectTag & Incomplete) === NoEffect
            ) {
              returnFiber.firstEffect === null &&
                (returnFiber.firstEffect = workInProgress.firstEffect),
                workInProgress.lastEffect !== null &&
                  (returnFiber.lastEffect !== null &&
                    (returnFiber.lastEffect.nextEffect =
                      workInProgress.firstEffect),
                  (returnFiber.lastEffect = workInProgress.lastEffect));
              const { effectTag } = workInProgress;
              effectTag > PerformedWork &&
                (returnFiber.lastEffect !== null
                  ? (returnFiber.lastEffect.nextEffect = workInProgress)
                  : (returnFiber.firstEffect = workInProgress),
                (returnFiber.lastEffect = workInProgress));
            }
          } else {
            const _next = unwindWork(workInProgress);
            if ((workInProgress.mode & ProfileMode) !== NoMode) {
              stopProfilerTimerIfRunningAndRecordDelta(workInProgress, !1);
              for (
                var { actualDuration } = workInProgress,
                  { child } = workInProgress;
                child !== null;

              )
                (actualDuration += child.actualDuration),
                  (child = child.sibling);
              workInProgress.actualDuration = actualDuration;
            }
            if (_next !== null)
              return (
                stopFailedWorkTimer(workInProgress),
                (_next.effectTag &= HostEffectMask),
                _next
              );
            stopWorkTimer(workInProgress),
              returnFiber !== null &&
                ((returnFiber.firstEffect = returnFiber.lastEffect = null),
                (returnFiber.effectTag |= Incomplete));
          }
          const siblingFiber = workInProgress.sibling;
          if (siblingFiber !== null) return siblingFiber;
          workInProgress = returnFiber;
        } while (workInProgress !== null);
        return (
          workInProgressRootExitStatus === RootIncomplete &&
            (workInProgressRootExitStatus = RootCompleted),
          null
        );
      }
      function getRemainingExpirationTime(fiber) {
        const updateExpirationTime = fiber.expirationTime;
        const { childExpirationTime } = fiber;
        return updateExpirationTime > childExpirationTime
          ? updateExpirationTime
          : childExpirationTime;
      }
      function resetChildExpirationTime(completedWork) {
        if (
          !(
            renderExpirationTime$1 !== Never &&
            completedWork.childExpirationTime === Never
          )
        ) {
          let newChildExpirationTime = NoWork;
          if ((completedWork.mode & ProfileMode) !== NoMode) {
            for (
              var { actualDuration } = completedWork,
                treeBaseDuration = completedWork.selfBaseDuration,
                shouldBubbleActualDurations =
                  completedWork.alternate === null ||
                  completedWork.child !== completedWork.alternate.child,
                { child } = completedWork;
              child !== null;

            ) {
              const childUpdateExpirationTime = child.expirationTime;
              const childChildExpirationTime = child.childExpirationTime;
              childUpdateExpirationTime > newChildExpirationTime &&
                (newChildExpirationTime = childUpdateExpirationTime),
                childChildExpirationTime > newChildExpirationTime &&
                  (newChildExpirationTime = childChildExpirationTime),
                shouldBubbleActualDurations &&
                  (actualDuration += child.actualDuration),
                (treeBaseDuration += child.treeBaseDuration),
                (child = child.sibling);
            }
            (completedWork.actualDuration = actualDuration),
              (completedWork.treeBaseDuration = treeBaseDuration);
          } else
            for (let _child = completedWork.child; _child !== null; ) {
              const _childUpdateExpirationTime = _child.expirationTime;
              const _childChildExpirationTime = _child.childExpirationTime;
              _childUpdateExpirationTime > newChildExpirationTime &&
                (newChildExpirationTime = _childUpdateExpirationTime),
                _childChildExpirationTime > newChildExpirationTime &&
                  (newChildExpirationTime = _childChildExpirationTime),
                (_child = _child.sibling);
            }
          completedWork.childExpirationTime = newChildExpirationTime;
        }
      }
      function commitRoot(root2) {
        const renderPriorityLevel = getCurrentPriorityLevel();
        return (
          runWithPriority$1(
            ImmediatePriority,
            commitRootImpl.bind(null, root2, renderPriorityLevel)
          ),
          null
        );
      }
      function commitRootImpl(root2, renderPriorityLevel) {
        do flushPassiveEffects();
        while (rootWithPendingPassiveEffects !== null);
        if (
          (flushRenderPhaseStrictModeWarningsInDEV(),
          (executionContext & (RenderContext | CommitContext)) !== NoContext)
        )
          throw Error('Should not already be working.');
        const { finishedWork } = root2;
        const expirationTime = root2.finishedExpirationTime;
        if (finishedWork === null) return null;
        if (
          ((root2.finishedWork = null),
          (root2.finishedExpirationTime = NoWork),
          finishedWork === root2.current)
        )
          throw Error(
            'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
          );
        (root2.callbackNode = null),
          (root2.callbackExpirationTime = NoWork),
          (root2.callbackPriority = NoPriority),
          (root2.nextKnownPendingLevel = NoWork),
          startCommitTimer();
        const remainingExpirationTimeBeforeCommit =
          getRemainingExpirationTime(finishedWork);
        markRootFinishedAtTime(
          root2,
          expirationTime,
          remainingExpirationTimeBeforeCommit
        ),
          root2 === workInProgressRoot &&
            ((workInProgressRoot = null),
            (workInProgress = null),
            (renderExpirationTime$1 = NoWork));
        let firstEffect;
        if (
          (finishedWork.effectTag > PerformedWork
            ? finishedWork.lastEffect !== null
              ? ((finishedWork.lastEffect.nextEffect = finishedWork),
                (firstEffect = finishedWork.firstEffect))
              : (firstEffect = finishedWork)
            : (firstEffect = finishedWork.firstEffect),
          firstEffect !== null)
        ) {
          const prevExecutionContext = executionContext;
          executionContext |= CommitContext;
          const prevInteractions = pushInteractions(root2);
          (ReactCurrentOwner$2.current = null),
            startCommitSnapshotEffectsTimer(),
            prepareForCommit(root2.containerInfo),
            (nextEffect = firstEffect);
          do
            if (
              (invokeGuardedCallback(null, commitBeforeMutationEffects, null),
              hasCaughtError())
            ) {
              if (nextEffect === null)
                throw Error('Should be working on an effect.');
              const error2 = clearCaughtError();
              captureCommitPhaseError(nextEffect, error2),
                (nextEffect = nextEffect.nextEffect);
            }
          while (nextEffect !== null);
          stopCommitSnapshotEffectsTimer(),
            recordCommitTime(),
            startCommitHostEffectsTimer(),
            (nextEffect = firstEffect);
          do
            if (
              (invokeGuardedCallback(
                null,
                commitMutationEffects,
                null,
                root2,
                renderPriorityLevel
              ),
              hasCaughtError())
            ) {
              if (nextEffect === null)
                throw Error('Should be working on an effect.');
              const _error = clearCaughtError();
              captureCommitPhaseError(nextEffect, _error),
                (nextEffect = nextEffect.nextEffect);
            }
          while (nextEffect !== null);
          stopCommitHostEffectsTimer(),
            resetAfterCommit(root2.containerInfo),
            (root2.current = finishedWork),
            startCommitLifeCyclesTimer(),
            (nextEffect = firstEffect);
          do
            if (
              (invokeGuardedCallback(
                null,
                commitLayoutEffects,
                null,
                root2,
                expirationTime
              ),
              hasCaughtError())
            ) {
              if (nextEffect === null)
                throw Error('Should be working on an effect.');
              const _error2 = clearCaughtError();
              captureCommitPhaseError(nextEffect, _error2),
                (nextEffect = nextEffect.nextEffect);
            }
          while (nextEffect !== null);
          stopCommitLifeCyclesTimer(),
            (nextEffect = null),
            requestPaint(),
            popInteractions(prevInteractions),
            (executionContext = prevExecutionContext);
        } else
          (root2.current = finishedWork),
            startCommitSnapshotEffectsTimer(),
            stopCommitSnapshotEffectsTimer(),
            recordCommitTime(),
            startCommitHostEffectsTimer(),
            stopCommitHostEffectsTimer(),
            startCommitLifeCyclesTimer(),
            stopCommitLifeCyclesTimer();
        stopCommitTimer();
        const rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
        if (rootDoesHavePassiveEffects)
          (rootDoesHavePassiveEffects = !1),
            (rootWithPendingPassiveEffects = root2),
            (pendingPassiveEffectsExpirationTime = expirationTime),
            (pendingPassiveEffectsRenderPriority = renderPriorityLevel);
        else
          for (nextEffect = firstEffect; nextEffect !== null; ) {
            const nextNextEffect = nextEffect.nextEffect;
            (nextEffect.nextEffect = null), (nextEffect = nextNextEffect);
          }
        const remainingExpirationTime = root2.firstPendingTime;
        if (remainingExpirationTime !== NoWork) {
          if (spawnedWorkDuringRender !== null) {
            const expirationTimes = spawnedWorkDuringRender;
            spawnedWorkDuringRender = null;
            for (let i = 0; i < expirationTimes.length; i++)
              scheduleInteractions(
                root2,
                expirationTimes[i],
                root2.memoizedInteractions
              );
          }
          schedulePendingInteractions(root2, remainingExpirationTime);
        } else legacyErrorBoundariesThatAlreadyFailed = null;
        if (
          (rootDidHavePassiveEffects ||
            finishPendingInteractions(root2, expirationTime),
          remainingExpirationTime === Sync
            ? root2 === rootWithNestedUpdates
              ? nestedUpdateCount++
              : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root2))
            : (nestedUpdateCount = 0),
          onCommitRoot(finishedWork.stateNode, expirationTime),
          ensureRootIsScheduled(root2),
          hasUncaughtError)
        ) {
          hasUncaughtError = !1;
          const _error3 = firstUncaughtError;
          throw ((firstUncaughtError = null), _error3);
        }
        return (
          (executionContext & LegacyUnbatchedContext) !== NoContext ||
            flushSyncCallbackQueue(),
          null
        );
      }
      function commitBeforeMutationEffects() {
        for (; nextEffect !== null; ) {
          const { effectTag } = nextEffect;
          if ((effectTag & Snapshot) !== NoEffect) {
            setCurrentFiber(nextEffect), recordEffect();
            const current2 = nextEffect.alternate;
            commitBeforeMutationLifeCycles(current2, nextEffect),
              resetCurrentFiber();
          }
          (effectTag & Passive) !== NoEffect &&
            (rootDoesHavePassiveEffects ||
              ((rootDoesHavePassiveEffects = !0),
              scheduleCallback(
                NormalPriority,
                () => (flushPassiveEffects(), null)
              ))),
            (nextEffect = nextEffect.nextEffect);
        }
      }
      function commitMutationEffects(root2, renderPriorityLevel) {
        for (; nextEffect !== null; ) {
          setCurrentFiber(nextEffect);
          const { effectTag } = nextEffect;
          if (
            (effectTag & ContentReset && commitResetTextContent(nextEffect),
            effectTag & Ref)
          ) {
            const current2 = nextEffect.alternate;
            current2 !== null && commitDetachRef(current2);
          }
          const primaryEffectTag =
            effectTag & (Placement | Update | Deletion | Hydrating);
          switch (primaryEffectTag) {
            case Placement: {
              commitPlacement(nextEffect), (nextEffect.effectTag &= ~Placement);
              break;
            }
            case PlacementAndUpdate: {
              commitPlacement(nextEffect), (nextEffect.effectTag &= ~Placement);
              const _current = nextEffect.alternate;
              commitWork(_current, nextEffect);
              break;
            }
            case Hydrating: {
              nextEffect.effectTag &= ~Hydrating;
              break;
            }
            case HydratingAndUpdate: {
              nextEffect.effectTag &= ~Hydrating;
              const _current2 = nextEffect.alternate;
              commitWork(_current2, nextEffect);
              break;
            }
            case Update: {
              const _current3 = nextEffect.alternate;
              commitWork(_current3, nextEffect);
              break;
            }
            case Deletion: {
              commitDeletion(root2, nextEffect, renderPriorityLevel);
              break;
            }
          }
          recordEffect(),
            resetCurrentFiber(),
            (nextEffect = nextEffect.nextEffect);
        }
      }
      function commitLayoutEffects(root2, committedExpirationTime) {
        for (; nextEffect !== null; ) {
          setCurrentFiber(nextEffect);
          const { effectTag } = nextEffect;
          if (effectTag & (Update | Callback)) {
            recordEffect();
            const current2 = nextEffect.alternate;
            commitLifeCycles(root2, current2, nextEffect);
          }
          effectTag & Ref && (recordEffect(), commitAttachRef(nextEffect)),
            resetCurrentFiber(),
            (nextEffect = nextEffect.nextEffect);
        }
      }
      function flushPassiveEffects() {
        if (pendingPassiveEffectsRenderPriority !== NoPriority) {
          const priorityLevel =
            pendingPassiveEffectsRenderPriority > NormalPriority
              ? NormalPriority
              : pendingPassiveEffectsRenderPriority;
          return (
            (pendingPassiveEffectsRenderPriority = NoPriority),
            runWithPriority$1(priorityLevel, flushPassiveEffectsImpl)
          );
        }
      }
      function flushPassiveEffectsImpl() {
        if (rootWithPendingPassiveEffects === null) return !1;
        const root2 = rootWithPendingPassiveEffects;
        const expirationTime = pendingPassiveEffectsExpirationTime;
        if (
          ((rootWithPendingPassiveEffects = null),
          (pendingPassiveEffectsExpirationTime = NoWork),
          (executionContext & (RenderContext | CommitContext)) !== NoContext)
        )
          throw Error('Cannot flush passive effects while already rendering.');
        const prevExecutionContext = executionContext;
        executionContext |= CommitContext;
        for (
          var prevInteractions = pushInteractions(root2),
            _effect2 = root2.current.firstEffect;
          _effect2 !== null;

        ) {
          {
            if (
              (setCurrentFiber(_effect2),
              invokeGuardedCallback(
                null,
                commitPassiveHookEffects,
                null,
                _effect2
              ),
              hasCaughtError())
            ) {
              if (_effect2 === null)
                throw Error('Should be working on an effect.');
              const _error5 = clearCaughtError();
              captureCommitPhaseError(_effect2, _error5);
            }
            resetCurrentFiber();
          }
          const nextNextEffect = _effect2.nextEffect;
          (_effect2.nextEffect = null), (_effect2 = nextNextEffect);
        }
        return (
          popInteractions(prevInteractions),
          finishPendingInteractions(root2, expirationTime),
          (executionContext = prevExecutionContext),
          flushSyncCallbackQueue(),
          (nestedPassiveUpdateCount =
            rootWithPendingPassiveEffects === null
              ? 0
              : nestedPassiveUpdateCount + 1),
          !0
        );
      }
      function isAlreadyFailedLegacyErrorBoundary(instance) {
        return (
          legacyErrorBoundariesThatAlreadyFailed !== null &&
          legacyErrorBoundariesThatAlreadyFailed.has(instance)
        );
      }
      function markLegacyErrorBoundaryAsFailed(instance) {
        legacyErrorBoundariesThatAlreadyFailed === null
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([instance]))
          : legacyErrorBoundariesThatAlreadyFailed.add(instance);
      }
      function prepareToThrowUncaughtError(error2) {
        hasUncaughtError ||
          ((hasUncaughtError = !0), (firstUncaughtError = error2));
      }
      var onUncaughtError = prepareToThrowUncaughtError;
      function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error2) {
        const errorInfo = createCapturedValue(error2, sourceFiber);
        const update = createRootErrorUpdate(rootFiber, errorInfo, Sync);
        enqueueUpdate(rootFiber, update);
        const root2 = markUpdateTimeFromFiberToRoot(rootFiber, Sync);
        root2 !== null &&
          (ensureRootIsScheduled(root2),
          schedulePendingInteractions(root2, Sync));
      }
      function captureCommitPhaseError(sourceFiber, error2) {
        if (sourceFiber.tag === HostRoot) {
          captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error2);
          return;
        }
        for (let fiber = sourceFiber.return; fiber !== null; ) {
          if (fiber.tag === HostRoot) {
            captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error2);
            return;
          } else if (fiber.tag === ClassComponent) {
            const ctor = fiber.type;
            const instance = fiber.stateNode;
            if (
              typeof ctor.getDerivedStateFromError === 'function' ||
              (typeof instance.componentDidCatch === 'function' &&
                !isAlreadyFailedLegacyErrorBoundary(instance))
            ) {
              const errorInfo = createCapturedValue(error2, sourceFiber);
              const update = createClassErrorUpdate(fiber, errorInfo, Sync);
              enqueueUpdate(fiber, update);
              const root2 = markUpdateTimeFromFiberToRoot(fiber, Sync);
              root2 !== null &&
                (ensureRootIsScheduled(root2),
                schedulePendingInteractions(root2, Sync));
              return;
            }
          }
          fiber = fiber.return;
        }
      }
      function pingSuspendedRoot(root2, thenable, suspendedTime) {
        const { pingCache } = root2;
        if (
          (pingCache !== null && pingCache.delete(thenable),
          workInProgressRoot === root2 &&
            renderExpirationTime$1 === suspendedTime)
        ) {
          workInProgressRootExitStatus === RootSuspendedWithDelay ||
          (workInProgressRootExitStatus === RootSuspended &&
            workInProgressRootLatestProcessedExpirationTime === Sync &&
            now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS)
            ? prepareFreshStack(root2, renderExpirationTime$1)
            : (workInProgressRootHasPendingPing = !0);
          return;
        }
        if (isRootSuspendedAtTime(root2, suspendedTime)) {
          const { lastPingedTime } = root2;
          (lastPingedTime !== NoWork && lastPingedTime < suspendedTime) ||
            ((root2.lastPingedTime = suspendedTime),
            ensureRootIsScheduled(root2),
            schedulePendingInteractions(root2, suspendedTime));
        }
      }
      function retryTimedOutBoundary(boundaryFiber, retryTime) {
        if (retryTime === NoWork) {
          const suspenseConfig = null;
          const currentTime = requestCurrentTimeForUpdate();
          retryTime = computeExpirationForFiber(
            currentTime,
            boundaryFiber,
            suspenseConfig
          );
        }
        const root2 = markUpdateTimeFromFiberToRoot(boundaryFiber, retryTime);
        root2 !== null &&
          (ensureRootIsScheduled(root2),
          schedulePendingInteractions(root2, retryTime));
      }
      function resolveRetryThenable(boundaryFiber, thenable) {
        const retryTime = NoWork;
        let retryCache;
        (retryCache = boundaryFiber.stateNode),
          retryCache !== null && retryCache.delete(thenable),
          retryTimedOutBoundary(boundaryFiber, retryTime);
      }
      function jnd(timeElapsed) {
        return timeElapsed < 120
          ? 120
          : timeElapsed < 480
          ? 480
          : timeElapsed < 1080
          ? 1080
          : timeElapsed < 1920
          ? 1920
          : timeElapsed < 3e3
          ? 3e3
          : timeElapsed < 4320
          ? 4320
          : ceil(timeElapsed / 1960) * 1960;
      }
      function computeMsUntilSuspenseLoadingDelay(
        mostRecentEventTime,
        committedExpirationTime,
        suspenseConfig
      ) {
        const busyMinDurationMs = suspenseConfig.busyMinDurationMs | 0;
        if (busyMinDurationMs <= 0) return 0;
        const busyDelayMs = suspenseConfig.busyDelayMs | 0;
        const currentTimeMs = now();
        const eventTimeMs = inferTimeFromExpirationTimeWithSuspenseConfig(
          mostRecentEventTime,
          suspenseConfig
        );
        const timeElapsed = currentTimeMs - eventTimeMs;
        if (timeElapsed <= busyDelayMs) return 0;
        const msUntilTimeout = busyDelayMs + busyMinDurationMs - timeElapsed;
        return msUntilTimeout;
      }
      function checkForNestedUpdates() {
        if (nestedUpdateCount > NESTED_UPDATE_LIMIT)
          throw (
            ((nestedUpdateCount = 0),
            (rootWithNestedUpdates = null),
            Error(
              'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
            ))
          );
        nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT &&
          ((nestedPassiveUpdateCount = 0),
          error(
            "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
          ));
      }
      function flushRenderPhaseStrictModeWarningsInDEV() {
        ReactStrictModeWarnings.flushLegacyContextWarning(),
          ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
      }
      function stopFinishedWorkLoopTimer() {
        const didCompleteRoot = !0;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot),
          (interruptedBy = null);
      }
      function stopInterruptedWorkLoopTimer() {
        const didCompleteRoot = !1;
        stopWorkLoopTimer(interruptedBy, didCompleteRoot),
          (interruptedBy = null);
      }
      function checkForInterruption(
        fiberThatReceivedUpdate,
        updateExpirationTime
      ) {
        workInProgressRoot !== null &&
          updateExpirationTime > renderExpirationTime$1 &&
          (interruptedBy = fiberThatReceivedUpdate);
      }
      let didWarnStateUpdateForUnmountedComponent = null;
      function warnAboutUpdateOnUnmountedFiberInDEV(fiber) {
        {
          const { tag } = fiber;
          if (
            tag !== HostRoot &&
            tag !== ClassComponent &&
            tag !== FunctionComponent &&
            tag !== ForwardRef &&
            tag !== MemoComponent &&
            tag !== SimpleMemoComponent &&
            tag !== Block
          )
            return;
          const componentName =
            getComponentName(fiber.type) || 'ReactComponent';
          if (didWarnStateUpdateForUnmountedComponent !== null) {
            if (didWarnStateUpdateForUnmountedComponent.has(componentName))
              return;
            didWarnStateUpdateForUnmountedComponent.add(componentName);
          } else
            didWarnStateUpdateForUnmountedComponent = new Set([componentName]);
          error(
            "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s",
            tag === ClassComponent
              ? 'the componentWillUnmount method'
              : 'a useEffect cleanup function',
            getStackByFiberInDevAndProd(fiber)
          );
        }
      }
      let beginWork$1;
      {
        const dummyFiber = null;
        beginWork$1 = function (current2, unitOfWork, expirationTime) {
          const originalWorkInProgressCopy = assignFiberPropertiesInDEV(
            dummyFiber,
            unitOfWork
          );
          try {
            return beginWork(current2, unitOfWork, expirationTime);
          } catch (originalError) {
            if (
              originalError !== null &&
              typeof originalError === 'object' &&
              typeof originalError.then === 'function'
            )
              throw originalError;
            if (
              (resetContextDependencies(),
              resetHooksAfterThrow(),
              unwindInterruptedWork(unitOfWork),
              assignFiberPropertiesInDEV(
                unitOfWork,
                originalWorkInProgressCopy
              ),
              unitOfWork.mode & ProfileMode && startProfilerTimer(unitOfWork),
              invokeGuardedCallback(
                null,
                beginWork,
                null,
                current2,
                unitOfWork,
                expirationTime
              ),
              hasCaughtError())
            ) {
              const replayError = clearCaughtError();
              throw replayError;
            } else throw originalError;
          }
        };
      }
      let didWarnAboutUpdateInRender = !1;
      let didWarnAboutUpdateInRenderForAnotherComponent;
      didWarnAboutUpdateInRenderForAnotherComponent = new Set();
      function warnAboutRenderPhaseUpdatesInDEV(fiber) {
        if (isRendering && (executionContext & RenderContext) !== NoContext)
          switch (fiber.tag) {
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent: {
              const renderingComponentName =
                (workInProgress && getComponentName(workInProgress.type)) ||
                'Unknown';
              const dedupeKey = renderingComponentName;
              if (
                !didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)
              ) {
                didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                const setStateComponentName =
                  getComponentName(fiber.type) || 'Unknown';
                error(
                  'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://fb.me/setstate-in-render',
                  setStateComponentName,
                  renderingComponentName,
                  renderingComponentName
                );
              }
              break;
            }
            case ClassComponent: {
              didWarnAboutUpdateInRender ||
                (error(
                  'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
                ),
                (didWarnAboutUpdateInRender = !0));
              break;
            }
          }
      }
      var IsThisRendererActing = { current: !1 };
      function warnIfNotScopedWithMatchingAct(fiber) {
        IsSomeRendererActing.current === !0 &&
          IsThisRendererActing.current !== !0 &&
          error(
            `It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);%s`,
            getStackByFiberInDevAndProd(fiber)
          );
      }
      function warnIfNotCurrentlyActingEffectsInDEV(fiber) {
        (fiber.mode & StrictMode) !== NoMode &&
          IsSomeRendererActing.current === !1 &&
          IsThisRendererActing.current === !1 &&
          error(
            `An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`,
            getComponentName(fiber.type),
            getStackByFiberInDevAndProd(fiber)
          );
      }
      function warnIfNotCurrentlyActingUpdatesInDEV(fiber) {
        executionContext === NoContext &&
          IsSomeRendererActing.current === !1 &&
          IsThisRendererActing.current === !1 &&
          error(
            `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`,
            getComponentName(fiber.type),
            getStackByFiberInDevAndProd(fiber)
          );
      }
      var warnIfNotCurrentlyActingUpdatesInDev =
        warnIfNotCurrentlyActingUpdatesInDEV;
      let didWarnAboutUnmockedScheduler = !1;
      function warnIfUnmockedScheduler(fiber) {
        didWarnAboutUnmockedScheduler === !1 &&
          Scheduler.unstable_flushAllWithoutAsserting === void 0 &&
          (fiber.mode & BlockingMode || fiber.mode & ConcurrentMode) &&
          ((didWarnAboutUnmockedScheduler = !0),
          error(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://fb.me/react-mock-scheduler`));
      }
      function computeThreadID(root2, expirationTime) {
        return expirationTime * 1e3 + root2.interactionThreadID;
      }
      function markSpawnedWork(expirationTime) {
        spawnedWorkDuringRender === null
          ? (spawnedWorkDuringRender = [expirationTime])
          : spawnedWorkDuringRender.push(expirationTime);
      }
      function scheduleInteractions(root2, expirationTime, interactions) {
        if (interactions.size > 0) {
          const { pendingInteractionMap } = root2;
          const pendingInteractions = pendingInteractionMap.get(expirationTime);
          pendingInteractions != null
            ? interactions.forEach((interaction) => {
                pendingInteractions.has(interaction) || interaction.__count++,
                  pendingInteractions.add(interaction);
              })
            : (pendingInteractionMap.set(expirationTime, new Set(interactions)),
              interactions.forEach((interaction) => {
                interaction.__count++;
              }));
          const subscriber = tracing.__subscriberRef.current;
          if (subscriber !== null) {
            const threadID = computeThreadID(root2, expirationTime);
            subscriber.onWorkScheduled(interactions, threadID);
          }
        }
      }
      function schedulePendingInteractions(root2, expirationTime) {
        scheduleInteractions(
          root2,
          expirationTime,
          tracing.__interactionsRef.current
        );
      }
      function startWorkOnPendingInteractions(root2, expirationTime) {
        const interactions = new Set();
        if (
          (root2.pendingInteractionMap.forEach(
            (scheduledInteractions, scheduledExpirationTime) => {
              scheduledExpirationTime >= expirationTime &&
                scheduledInteractions.forEach((interaction) =>
                  interactions.add(interaction)
                );
            }
          ),
          (root2.memoizedInteractions = interactions),
          interactions.size > 0)
        ) {
          const subscriber = tracing.__subscriberRef.current;
          if (subscriber !== null) {
            const threadID = computeThreadID(root2, expirationTime);
            try {
              subscriber.onWorkStarted(interactions, threadID);
            } catch (error2) {
              scheduleCallback(ImmediatePriority, () => {
                throw error2;
              });
            }
          }
        }
      }
      function finishPendingInteractions(root2, committedExpirationTime) {
        const earliestRemainingTimeAfterCommit = root2.firstPendingTime;
        let subscriber;
        try {
          if (
            ((subscriber = tracing.__subscriberRef.current),
            subscriber !== null && root2.memoizedInteractions.size > 0)
          ) {
            const threadID = computeThreadID(root2, committedExpirationTime);
            subscriber.onWorkStopped(root2.memoizedInteractions, threadID);
          }
        } catch (error2) {
          scheduleCallback(ImmediatePriority, () => {
            throw error2;
          });
        } finally {
          const { pendingInteractionMap } = root2;
          pendingInteractionMap.forEach(
            (scheduledInteractions, scheduledExpirationTime) => {
              scheduledExpirationTime > earliestRemainingTimeAfterCommit &&
                (pendingInteractionMap.delete(scheduledExpirationTime),
                scheduledInteractions.forEach((interaction) => {
                  if (
                    (interaction.__count--,
                    subscriber !== null && interaction.__count === 0)
                  )
                    try {
                      subscriber.onInteractionScheduledWorkCompleted(
                        interaction
                      );
                    } catch (error2) {
                      scheduleCallback(ImmediatePriority, () => {
                        throw error2;
                      });
                    }
                }));
            }
          );
        }
      }
      let onScheduleFiberRoot = null;
      let onCommitFiberRoot = null;
      let onCommitFiberUnmount = null;
      let hasLoggedError = !1;
      const isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u';
      function injectInternals(internals) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u') return !1;
        const hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook.isDisabled) return !0;
        if (!hook.supportsFiber)
          return (
            error(
              'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools'
            ),
            !0
          );
        try {
          const rendererID = hook.inject(internals);
          typeof hook.onScheduleFiberRoot === 'function' &&
            (onScheduleFiberRoot = function (root2, children) {
              try {
                hook.onScheduleFiberRoot(rendererID, root2, children);
              } catch (err) {
                hasLoggedError ||
                  ((hasLoggedError = !0),
                  error('React instrumentation encountered an error: %s', err));
              }
            }),
            (onCommitFiberRoot = function (root2, expirationTime) {
              try {
                const didError =
                  (root2.current.effectTag & DidCapture) === DidCapture;
                if (enableProfilerTimer) {
                  const currentTime = getCurrentTime();
                  const priorityLevel = inferPriorityFromExpirationTime(
                    currentTime,
                    expirationTime
                  );
                  hook.onCommitFiberRoot(
                    rendererID,
                    root2,
                    priorityLevel,
                    didError
                  );
                } else
                  hook.onCommitFiberRoot(rendererID, root2, void 0, didError);
              } catch (err) {
                hasLoggedError ||
                  ((hasLoggedError = !0),
                  error('React instrumentation encountered an error: %s', err));
              }
            }),
            (onCommitFiberUnmount = function (fiber) {
              try {
                hook.onCommitFiberUnmount(rendererID, fiber);
              } catch (err) {
                hasLoggedError ||
                  ((hasLoggedError = !0),
                  error('React instrumentation encountered an error: %s', err));
              }
            });
        } catch (err) {
          error('React instrumentation encountered an error: %s.', err);
        }
        return !0;
      }
      function onScheduleRoot(root2, children) {
        typeof onScheduleFiberRoot === 'function' &&
          onScheduleFiberRoot(root2, children);
      }
      function onCommitRoot(root2, expirationTime) {
        typeof onCommitFiberRoot === 'function' &&
          onCommitFiberRoot(root2, expirationTime);
      }
      function onCommitUnmount(fiber) {
        typeof onCommitFiberUnmount === 'function' &&
          onCommitFiberUnmount(fiber);
      }
      let hasBadMapPolyfill;
      {
        hasBadMapPolyfill = !1;
        try {
          const nonExtensibleObject = Object.preventExtensions({});
          const testMap = new Map([[nonExtensibleObject, null]]);
          const testSet = new Set([nonExtensibleObject]);
          testMap.set(0, 0), testSet.add(0);
        } catch {
          hasBadMapPolyfill = !0;
        }
      }
      let debugCounter = 1;
      function FiberNode(tag, pendingProps, key, mode) {
        (this.tag = tag),
          (this.key = key),
          (this.elementType = null),
          (this.type = null),
          (this.stateNode = null),
          (this.return = null),
          (this.child = null),
          (this.sibling = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = pendingProps),
          (this.memoizedProps = null),
          (this.updateQueue = null),
          (this.memoizedState = null),
          (this.dependencies = null),
          (this.mode = mode),
          (this.effectTag = NoEffect),
          (this.nextEffect = null),
          (this.firstEffect = null),
          (this.lastEffect = null),
          (this.expirationTime = NoWork),
          (this.childExpirationTime = NoWork),
          (this.alternate = null),
          (this.actualDuration = Number.NaN),
          (this.actualStartTime = Number.NaN),
          (this.selfBaseDuration = Number.NaN),
          (this.treeBaseDuration = Number.NaN),
          (this.actualDuration = 0),
          (this.actualStartTime = -1),
          (this.selfBaseDuration = 0),
          (this.treeBaseDuration = 0),
          (this._debugID = debugCounter++),
          (this._debugIsCurrentlyTiming = !1),
          (this._debugSource = null),
          (this._debugOwner = null),
          (this._debugNeedsRemount = !1),
          (this._debugHookTypes = null),
          !hasBadMapPolyfill &&
            typeof Object.preventExtensions === 'function' &&
            Object.preventExtensions(this);
      }
      const createFiber = function (tag, pendingProps, key, mode) {
        return new FiberNode(tag, pendingProps, key, mode);
      };
      function shouldConstruct(Component) {
        const { prototype } = Component;
        return !!(prototype && prototype.isReactComponent);
      }
      function isSimpleFunctionComponent(type) {
        return (
          typeof type === 'function' &&
          !shouldConstruct(type) &&
          type.defaultProps === void 0
        );
      }
      function resolveLazyComponentTag(Component) {
        if (typeof Component === 'function')
          return shouldConstruct(Component)
            ? ClassComponent
            : FunctionComponent;
        if (Component != null) {
          const { $$typeof } = Component;
          if ($$typeof === REACT_FORWARD_REF_TYPE) return ForwardRef;
          if ($$typeof === REACT_MEMO_TYPE) return MemoComponent;
        }
        return IndeterminateComponent;
      }
      function createWorkInProgress(current2, pendingProps) {
        let workInProgress2 = current2.alternate;
        workInProgress2 === null
          ? ((workInProgress2 = createFiber(
              current2.tag,
              pendingProps,
              current2.key,
              current2.mode
            )),
            (workInProgress2.elementType = current2.elementType),
            (workInProgress2.type = current2.type),
            (workInProgress2.stateNode = current2.stateNode),
            (workInProgress2._debugID = current2._debugID),
            (workInProgress2._debugSource = current2._debugSource),
            (workInProgress2._debugOwner = current2._debugOwner),
            (workInProgress2._debugHookTypes = current2._debugHookTypes),
            (workInProgress2.alternate = current2),
            (current2.alternate = workInProgress2))
          : ((workInProgress2.pendingProps = pendingProps),
            (workInProgress2.effectTag = NoEffect),
            (workInProgress2.nextEffect = null),
            (workInProgress2.firstEffect = null),
            (workInProgress2.lastEffect = null),
            (workInProgress2.actualDuration = 0),
            (workInProgress2.actualStartTime = -1)),
          (workInProgress2.childExpirationTime = current2.childExpirationTime),
          (workInProgress2.expirationTime = current2.expirationTime),
          (workInProgress2.child = current2.child),
          (workInProgress2.memoizedProps = current2.memoizedProps),
          (workInProgress2.memoizedState = current2.memoizedState),
          (workInProgress2.updateQueue = current2.updateQueue);
        const currentDependencies = current2.dependencies;
        switch (
          ((workInProgress2.dependencies =
            currentDependencies === null
              ? null
              : {
                  expirationTime: currentDependencies.expirationTime,
                  firstContext: currentDependencies.firstContext,
                  responders: currentDependencies.responders,
                }),
          (workInProgress2.sibling = current2.sibling),
          (workInProgress2.index = current2.index),
          (workInProgress2.ref = current2.ref),
          (workInProgress2.selfBaseDuration = current2.selfBaseDuration),
          (workInProgress2.treeBaseDuration = current2.treeBaseDuration),
          (workInProgress2._debugNeedsRemount = current2._debugNeedsRemount),
          workInProgress2.tag)
        ) {
          case IndeterminateComponent:
          case FunctionComponent:
          case SimpleMemoComponent:
            workInProgress2.type = resolveFunctionForHotReloading(
              current2.type
            );
            break;
          case ClassComponent:
            workInProgress2.type = resolveClassForHotReloading(current2.type);
            break;
          case ForwardRef:
            workInProgress2.type = resolveForwardRefForHotReloading(
              current2.type
            );
            break;
        }
        return workInProgress2;
      }
      function resetWorkInProgress(workInProgress2, renderExpirationTime2) {
        (workInProgress2.effectTag &= Placement),
          (workInProgress2.nextEffect = null),
          (workInProgress2.firstEffect = null),
          (workInProgress2.lastEffect = null);
        const current2 = workInProgress2.alternate;
        if (current2 === null)
          (workInProgress2.childExpirationTime = NoWork),
            (workInProgress2.expirationTime = renderExpirationTime2),
            (workInProgress2.child = null),
            (workInProgress2.memoizedProps = null),
            (workInProgress2.memoizedState = null),
            (workInProgress2.updateQueue = null),
            (workInProgress2.dependencies = null),
            (workInProgress2.selfBaseDuration = 0),
            (workInProgress2.treeBaseDuration = 0);
        else {
          (workInProgress2.childExpirationTime = current2.childExpirationTime),
            (workInProgress2.expirationTime = current2.expirationTime),
            (workInProgress2.child = current2.child),
            (workInProgress2.memoizedProps = current2.memoizedProps),
            (workInProgress2.memoizedState = current2.memoizedState),
            (workInProgress2.updateQueue = current2.updateQueue);
          const currentDependencies = current2.dependencies;
          (workInProgress2.dependencies =
            currentDependencies === null
              ? null
              : {
                  expirationTime: currentDependencies.expirationTime,
                  firstContext: currentDependencies.firstContext,
                  responders: currentDependencies.responders,
                }),
            (workInProgress2.selfBaseDuration = current2.selfBaseDuration),
            (workInProgress2.treeBaseDuration = current2.treeBaseDuration);
        }
        return workInProgress2;
      }
      function createHostRootFiber(tag) {
        let mode;
        return (
          tag === ConcurrentRoot
            ? (mode = ConcurrentMode | BlockingMode | StrictMode)
            : tag === BlockingRoot
            ? (mode = BlockingMode | StrictMode)
            : (mode = NoMode),
          isDevToolsPresent && (mode |= ProfileMode),
          createFiber(HostRoot, null, null, mode)
        );
      }
      function createFiberFromTypeAndProps(
        type,
        key,
        pendingProps,
        owner,
        mode,
        expirationTime
      ) {
        let fiber;
        let fiberTag = IndeterminateComponent;
        let resolvedType = type;
        if (typeof type === 'function')
          shouldConstruct(type)
            ? ((fiberTag = ClassComponent),
              (resolvedType = resolveClassForHotReloading(resolvedType)))
            : (resolvedType = resolveFunctionForHotReloading(resolvedType));
        else if (typeof type === 'string') fiberTag = HostComponent;
        else
          getTag: switch (type) {
            case REACT_FRAGMENT_TYPE:
              return createFiberFromFragment(
                pendingProps.children,
                mode,
                expirationTime,
                key
              );
            case REACT_CONCURRENT_MODE_TYPE:
              (fiberTag = Mode),
                (mode |= ConcurrentMode | BlockingMode | StrictMode);
              break;
            case REACT_STRICT_MODE_TYPE:
              (fiberTag = Mode), (mode |= StrictMode);
              break;
            case REACT_PROFILER_TYPE:
              return createFiberFromProfiler(
                pendingProps,
                mode,
                expirationTime,
                key
              );
            case REACT_SUSPENSE_TYPE:
              return createFiberFromSuspense(
                pendingProps,
                mode,
                expirationTime,
                key
              );
            case REACT_SUSPENSE_LIST_TYPE:
              return createFiberFromSuspenseList(
                pendingProps,
                mode,
                expirationTime,
                key
              );
            default: {
              if (typeof type === 'object' && type !== null)
                switch (type.$$typeof) {
                  case REACT_PROVIDER_TYPE:
                    fiberTag = ContextProvider;
                    break getTag;
                  case REACT_CONTEXT_TYPE:
                    fiberTag = ContextConsumer;
                    break getTag;
                  case REACT_FORWARD_REF_TYPE:
                    (fiberTag = ForwardRef),
                      (resolvedType =
                        resolveForwardRefForHotReloading(resolvedType));
                    break getTag;
                  case REACT_MEMO_TYPE:
                    fiberTag = MemoComponent;
                    break getTag;
                  case REACT_LAZY_TYPE:
                    (fiberTag = LazyComponent), (resolvedType = null);
                    break getTag;
                  case REACT_BLOCK_TYPE:
                    fiberTag = Block;
                    break getTag;
                }
              let info = '';
              {
                (type === void 0 ||
                  (typeof type === 'object' &&
                    type !== null &&
                    Object.keys(type).length === 0)) &&
                  (info +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                const ownerName = owner ? getComponentName(owner.type) : null;
                ownerName &&
                  (info += `

Check the render method of \`${ownerName}\`.`);
              }
              throw Error(
                `Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${
                  type == null ? type : typeof type
                }.${info}`
              );
            }
          }
        return (
          (fiber = createFiber(fiberTag, pendingProps, key, mode)),
          (fiber.elementType = type),
          (fiber.type = resolvedType),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromElement(element, mode, expirationTime) {
        let owner = null;
        owner = element._owner;
        const { type } = element;
        const { key } = element;
        const pendingProps = element.props;
        const fiber = createFiberFromTypeAndProps(
          type,
          key,
          pendingProps,
          owner,
          mode,
          expirationTime
        );
        return (
          (fiber._debugSource = element._source),
          (fiber._debugOwner = element._owner),
          fiber
        );
      }
      function createFiberFromFragment(elements, mode, expirationTime, key) {
        const fiber = createFiber(Fragment, elements, key, mode);
        return (fiber.expirationTime = expirationTime), fiber;
      }
      function createFiberFromProfiler(
        pendingProps,
        mode,
        expirationTime,
        key
      ) {
        (typeof pendingProps.id !== 'string' ||
          typeof pendingProps.onRender !== 'function') &&
          error(
            'Profiler must specify an "id" string and "onRender" function as props'
          );
        const fiber = createFiber(
          Profiler,
          pendingProps,
          key,
          mode | ProfileMode
        );
        return (
          (fiber.elementType = REACT_PROFILER_TYPE),
          (fiber.type = REACT_PROFILER_TYPE),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromSuspense(
        pendingProps,
        mode,
        expirationTime,
        key
      ) {
        const fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
        return (
          (fiber.type = REACT_SUSPENSE_TYPE),
          (fiber.elementType = REACT_SUSPENSE_TYPE),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromSuspenseList(
        pendingProps,
        mode,
        expirationTime,
        key
      ) {
        const fiber = createFiber(
          SuspenseListComponent,
          pendingProps,
          key,
          mode
        );
        return (
          (fiber.type = REACT_SUSPENSE_LIST_TYPE),
          (fiber.elementType = REACT_SUSPENSE_LIST_TYPE),
          (fiber.expirationTime = expirationTime),
          fiber
        );
      }
      function createFiberFromText(content, mode, expirationTime) {
        const fiber = createFiber(HostText, content, null, mode);
        return (fiber.expirationTime = expirationTime), fiber;
      }
      function createFiberFromHostInstanceForDeletion() {
        const fiber = createFiber(HostComponent, null, null, NoMode);
        return (fiber.elementType = 'DELETED'), (fiber.type = 'DELETED'), fiber;
      }
      function createFiberFromPortal(portal, mode, expirationTime) {
        const pendingProps = portal.children !== null ? portal.children : [];
        const fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
        return (
          (fiber.expirationTime = expirationTime),
          (fiber.stateNode = {
            containerInfo: portal.containerInfo,
            pendingChildren: null,
            implementation: portal.implementation,
          }),
          fiber
        );
      }
      function assignFiberPropertiesInDEV(target, source) {
        return (
          target === null &&
            (target = createFiber(IndeterminateComponent, null, null, NoMode)),
          (target.tag = source.tag),
          (target.key = source.key),
          (target.elementType = source.elementType),
          (target.type = source.type),
          (target.stateNode = source.stateNode),
          (target.return = source.return),
          (target.child = source.child),
          (target.sibling = source.sibling),
          (target.index = source.index),
          (target.ref = source.ref),
          (target.pendingProps = source.pendingProps),
          (target.memoizedProps = source.memoizedProps),
          (target.updateQueue = source.updateQueue),
          (target.memoizedState = source.memoizedState),
          (target.dependencies = source.dependencies),
          (target.mode = source.mode),
          (target.effectTag = source.effectTag),
          (target.nextEffect = source.nextEffect),
          (target.firstEffect = source.firstEffect),
          (target.lastEffect = source.lastEffect),
          (target.expirationTime = source.expirationTime),
          (target.childExpirationTime = source.childExpirationTime),
          (target.alternate = source.alternate),
          (target.actualDuration = source.actualDuration),
          (target.actualStartTime = source.actualStartTime),
          (target.selfBaseDuration = source.selfBaseDuration),
          (target.treeBaseDuration = source.treeBaseDuration),
          (target._debugID = source._debugID),
          (target._debugSource = source._debugSource),
          (target._debugOwner = source._debugOwner),
          (target._debugIsCurrentlyTiming = source._debugIsCurrentlyTiming),
          (target._debugNeedsRemount = source._debugNeedsRemount),
          (target._debugHookTypes = source._debugHookTypes),
          target
        );
      }
      function FiberRootNode(containerInfo, tag, hydrate2) {
        (this.tag = tag),
          (this.current = null),
          (this.containerInfo = containerInfo),
          (this.pendingChildren = null),
          (this.pingCache = null),
          (this.finishedExpirationTime = NoWork),
          (this.finishedWork = null),
          (this.timeoutHandle = noTimeout),
          (this.context = null),
          (this.pendingContext = null),
          (this.hydrate = hydrate2),
          (this.callbackNode = null),
          (this.callbackPriority = NoPriority),
          (this.firstPendingTime = NoWork),
          (this.firstSuspendedTime = NoWork),
          (this.lastSuspendedTime = NoWork),
          (this.nextKnownPendingLevel = NoWork),
          (this.lastPingedTime = NoWork),
          (this.lastExpiredTime = NoWork),
          (this.interactionThreadID = tracing.unstable_getThreadID()),
          (this.memoizedInteractions = new Set()),
          (this.pendingInteractionMap = new Map());
      }
      function createFiberRoot(
        containerInfo,
        tag,
        hydrate2,
        hydrationCallbacks
      ) {
        const root2 = new FiberRootNode(containerInfo, tag, hydrate2);
        const uninitializedFiber = createHostRootFiber(tag);
        return (
          (root2.current = uninitializedFiber),
          (uninitializedFiber.stateNode = root2),
          initializeUpdateQueue(uninitializedFiber),
          root2
        );
      }
      function isRootSuspendedAtTime(root2, expirationTime) {
        const { firstSuspendedTime } = root2;
        const { lastSuspendedTime } = root2;
        return (
          firstSuspendedTime !== NoWork &&
          firstSuspendedTime >= expirationTime &&
          lastSuspendedTime <= expirationTime
        );
      }
      function markRootSuspendedAtTime(root2, expirationTime) {
        const { firstSuspendedTime } = root2;
        const { lastSuspendedTime } = root2;
        firstSuspendedTime < expirationTime &&
          (root2.firstSuspendedTime = expirationTime),
          (lastSuspendedTime > expirationTime ||
            firstSuspendedTime === NoWork) &&
            (root2.lastSuspendedTime = expirationTime),
          expirationTime <= root2.lastPingedTime &&
            (root2.lastPingedTime = NoWork),
          expirationTime <= root2.lastExpiredTime &&
            (root2.lastExpiredTime = NoWork);
      }
      function markRootUpdatedAtTime(root2, expirationTime) {
        const { firstPendingTime } = root2;
        expirationTime > firstPendingTime &&
          (root2.firstPendingTime = expirationTime);
        const { firstSuspendedTime } = root2;
        firstSuspendedTime !== NoWork &&
          (expirationTime >= firstSuspendedTime
            ? (root2.firstSuspendedTime =
                root2.lastSuspendedTime =
                root2.nextKnownPendingLevel =
                  NoWork)
            : expirationTime >= root2.lastSuspendedTime &&
              (root2.lastSuspendedTime = expirationTime + 1),
          expirationTime > root2.nextKnownPendingLevel &&
            (root2.nextKnownPendingLevel = expirationTime));
      }
      function markRootFinishedAtTime(
        root2,
        finishedExpirationTime,
        remainingExpirationTime
      ) {
        (root2.firstPendingTime = remainingExpirationTime),
          finishedExpirationTime <= root2.lastSuspendedTime
            ? (root2.firstSuspendedTime =
                root2.lastSuspendedTime =
                root2.nextKnownPendingLevel =
                  NoWork)
            : finishedExpirationTime <= root2.firstSuspendedTime &&
              (root2.firstSuspendedTime = finishedExpirationTime - 1),
          finishedExpirationTime <= root2.lastPingedTime &&
            (root2.lastPingedTime = NoWork),
          finishedExpirationTime <= root2.lastExpiredTime &&
            (root2.lastExpiredTime = NoWork);
      }
      function markRootExpiredAtTime(root2, expirationTime) {
        const { lastExpiredTime } = root2;
        (lastExpiredTime === NoWork || lastExpiredTime > expirationTime) &&
          (root2.lastExpiredTime = expirationTime);
      }
      let didWarnAboutNestedUpdates;
      let didWarnAboutFindNodeInStrictMode;
      (didWarnAboutNestedUpdates = !1), (didWarnAboutFindNodeInStrictMode = {});
      function getContextForSubtree(parentComponent) {
        if (!parentComponent) return emptyContextObject;
        const fiber = get(parentComponent);
        const parentContext = findCurrentUnmaskedContext(fiber);
        if (fiber.tag === ClassComponent) {
          const Component = fiber.type;
          if (isContextProvider(Component))
            return processChildContext(fiber, Component, parentContext);
        }
        return parentContext;
      }
      function findHostInstanceWithWarning(component, methodName) {
        {
          const fiber = get(component);
          if (fiber === void 0)
            throw typeof component.render === 'function'
              ? Error('Unable to find node on an unmounted component.')
              : Error(
                  `Argument appears to not be a ReactComponent. Keys: ${Object.keys(
                    component
                  )}`
                );
          const hostFiber = findCurrentHostFiber(fiber);
          if (hostFiber === null) return null;
          if (hostFiber.mode & StrictMode) {
            const componentName = getComponentName(fiber.type) || 'Component';
            didWarnAboutFindNodeInStrictMode[componentName] ||
              ((didWarnAboutFindNodeInStrictMode[componentName] = !0),
              fiber.mode & StrictMode
                ? error(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s',
                    methodName,
                    methodName,
                    componentName,
                    getStackByFiberInDevAndProd(hostFiber)
                  )
                : error(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s',
                    methodName,
                    methodName,
                    componentName,
                    getStackByFiberInDevAndProd(hostFiber)
                  ));
          }
          return hostFiber.stateNode;
        }
      }
      function createContainer(
        containerInfo,
        tag,
        hydrate2,
        hydrationCallbacks
      ) {
        return createFiberRoot(containerInfo, tag, hydrate2);
      }
      function updateContainer(element, container, parentComponent, callback) {
        onScheduleRoot(container, element);
        const current$1 = container.current;
        const currentTime = requestCurrentTimeForUpdate();
        typeof jest < 'u' &&
          (warnIfUnmockedScheduler(current$1),
          warnIfNotScopedWithMatchingAct(current$1));
        const suspenseConfig = requestCurrentSuspenseConfig();
        const expirationTime = computeExpirationForFiber(
          currentTime,
          current$1,
          suspenseConfig
        );
        const context = getContextForSubtree(parentComponent);
        container.context === null
          ? (container.context = context)
          : (container.pendingContext = context),
          isRendering &&
            current !== null &&
            !didWarnAboutNestedUpdates &&
            ((didWarnAboutNestedUpdates = !0),
            error(
              `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
              getComponentName(current.type) || 'Unknown'
            ));
        const update = createUpdate(expirationTime, suspenseConfig);
        return (
          (update.payload = { element }),
          (callback = callback === void 0 ? null : callback),
          callback !== null &&
            (typeof callback !== 'function' &&
              error(
                'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
                callback
              ),
            (update.callback = callback)),
          enqueueUpdate(current$1, update),
          scheduleWork(current$1, expirationTime),
          expirationTime
        );
      }
      function getPublicRootInstance(container) {
        const containerFiber = container.current;
        if (!containerFiber.child) return null;
        switch (containerFiber.child.tag) {
          case HostComponent:
            return containerFiber.child.stateNode;
          default:
            return containerFiber.child.stateNode;
        }
      }
      function markRetryTimeImpl(fiber, retryTime) {
        const suspenseState = fiber.memoizedState;
        suspenseState !== null &&
          suspenseState.dehydrated !== null &&
          suspenseState.retryTime < retryTime &&
          (suspenseState.retryTime = retryTime);
      }
      function markRetryTimeIfNotHydrated(fiber, retryTime) {
        markRetryTimeImpl(fiber, retryTime);
        const { alternate } = fiber;
        alternate && markRetryTimeImpl(alternate, retryTime);
      }
      function attemptUserBlockingHydration$1(fiber) {
        if (fiber.tag === SuspenseComponent) {
          const expTime = computeInteractiveExpiration(
            requestCurrentTimeForUpdate()
          );
          scheduleWork(fiber, expTime),
            markRetryTimeIfNotHydrated(fiber, expTime);
        }
      }
      function attemptContinuousHydration$1(fiber) {
        fiber.tag === SuspenseComponent &&
          (scheduleWork(fiber, ContinuousHydration),
          markRetryTimeIfNotHydrated(fiber, ContinuousHydration));
      }
      function attemptHydrationAtCurrentPriority$1(fiber) {
        if (fiber.tag === SuspenseComponent) {
          const currentTime = requestCurrentTimeForUpdate();
          const expTime = computeExpirationForFiber(currentTime, fiber, null);
          scheduleWork(fiber, expTime),
            markRetryTimeIfNotHydrated(fiber, expTime);
        }
      }
      function findHostInstanceWithNoPortals(fiber) {
        const hostFiber = findCurrentHostFiberWithNoPortals(fiber);
        return hostFiber === null
          ? null
          : hostFiber.tag === FundamentalComponent
          ? hostFiber.stateNode.instance
          : hostFiber.stateNode;
      }
      let shouldSuspendImpl = function (fiber) {
        return !1;
      };
      function shouldSuspend(fiber) {
        return shouldSuspendImpl(fiber);
      }
      let overrideHookState = null;
      let overrideProps = null;
      let scheduleUpdate = null;
      let setSuspenseHandler = null;
      {
        const copyWithSetImpl = function (obj, path, idx, value) {
          if (idx >= path.length) return value;
          const key = path[idx];
          const updated = Array.isArray(obj) ? obj.slice() : _assign({}, obj);
          return (
            (updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value)),
            updated
          );
        };
        const copyWithSet = function (obj, path, value) {
          return copyWithSetImpl(obj, path, 0, value);
        };
        (overrideHookState = function (fiber, id, path, value) {
          for (
            var currentHook2 = fiber.memoizedState;
            currentHook2 !== null && id > 0;

          )
            (currentHook2 = currentHook2.next), id--;
          if (currentHook2 !== null) {
            const newState = copyWithSet(
              currentHook2.memoizedState,
              path,
              value
            );
            (currentHook2.memoizedState = newState),
              (currentHook2.baseState = newState),
              (fiber.memoizedProps = _assign({}, fiber.memoizedProps)),
              scheduleWork(fiber, Sync);
          }
        }),
          (overrideProps = function (fiber, path, value) {
            (fiber.pendingProps = copyWithSet(
              fiber.memoizedProps,
              path,
              value
            )),
              fiber.alternate &&
                (fiber.alternate.pendingProps = fiber.pendingProps),
              scheduleWork(fiber, Sync);
          }),
          (scheduleUpdate = function (fiber) {
            scheduleWork(fiber, Sync);
          }),
          (setSuspenseHandler = function (newShouldSuspendImpl) {
            shouldSuspendImpl = newShouldSuspendImpl;
          });
      }
      function injectIntoDevTools(devToolsConfig) {
        const { findFiberByHostInstance } = devToolsConfig;
        const ReactCurrentDispatcher2 =
          ReactSharedInternals.ReactCurrentDispatcher;
        return injectInternals(
          _assign({}, devToolsConfig, {
            overrideHookState,
            overrideProps,
            setSuspenseHandler,
            scheduleUpdate,
            currentDispatcherRef: ReactCurrentDispatcher2,
            findHostInstanceByFiber(fiber) {
              const hostFiber = findCurrentHostFiber(fiber);
              return hostFiber === null ? null : hostFiber.stateNode;
            },
            findFiberByHostInstance(instance) {
              return findFiberByHostInstance
                ? findFiberByHostInstance(instance)
                : null;
            },
            findHostInstancesForRefresh,
            scheduleRefresh,
            scheduleRoot,
            setRefreshHandler,
            getCurrentFiber() {
              return current;
            },
          })
        );
      }
      const IsSomeRendererActing$1 = ReactSharedInternals.IsSomeRendererActing;
      function ReactDOMRoot(container, options) {
        this._internalRoot = createRootImpl(container, ConcurrentRoot, options);
      }
      function ReactDOMBlockingRoot(container, tag, options) {
        this._internalRoot = createRootImpl(container, tag, options);
      }
      (ReactDOMRoot.prototype.render = ReactDOMBlockingRoot.prototype.render =
        function (children) {
          const root2 = this._internalRoot;
          {
            typeof arguments[1] === 'function' &&
              error(
                'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
              );
            const container = root2.containerInfo;
            if (container.nodeType !== COMMENT_NODE) {
              const hostInstance = findHostInstanceWithNoPortals(root2.current);
              hostInstance &&
                hostInstance.parentNode !== container &&
                error(
                  "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
                );
            }
          }
          updateContainer(children, root2, null, null);
        }),
        (ReactDOMRoot.prototype.unmount =
          ReactDOMBlockingRoot.prototype.unmount =
            function () {
              typeof arguments[0] === 'function' &&
                error(
                  'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
                );
              const root2 = this._internalRoot;
              const container = root2.containerInfo;
              updateContainer(null, root2, null, () => {
                unmarkContainerAsRoot(container);
              });
            });
      function createRootImpl(container, tag, options) {
        const hydrate2 = options != null && options.hydrate === !0;
        const hydrationCallbacks =
          (options != null && options.hydrationOptions) || null;
        const root2 = createContainer(container, tag, hydrate2);
        if (
          (markContainerAsRoot(root2.current, container),
          hydrate2 && tag !== LegacyRoot)
        ) {
          const doc =
            container.nodeType === DOCUMENT_NODE
              ? container
              : container.ownerDocument;
          eagerlyTrapReplayableEvents(container, doc);
        }
        return root2;
      }
      function createLegacyRoot(container, options) {
        return new ReactDOMBlockingRoot(container, LegacyRoot, options);
      }
      function isValidContainer(node) {
        return !!(
          node &&
          (node.nodeType === ELEMENT_NODE ||
            node.nodeType === DOCUMENT_NODE ||
            node.nodeType === DOCUMENT_FRAGMENT_NODE ||
            (node.nodeType === COMMENT_NODE &&
              node.nodeValue === ' react-mount-point-unstable '))
        );
      }
      const ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner;
      let topLevelUpdateWarnings;
      let warnedAboutHydrateAPI = !1;
      topLevelUpdateWarnings = function (container) {
        if (
          container._reactRootContainer &&
          container.nodeType !== COMMENT_NODE
        ) {
          const hostInstance = findHostInstanceWithNoPortals(
            container._reactRootContainer._internalRoot.current
          );
          hostInstance &&
            hostInstance.parentNode !== container &&
            error(
              'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
            );
        }
        const isRootRenderedBySomeReact = !!container._reactRootContainer;
        const rootEl = getReactRootElementInContainer(container);
        const hasNonRootReactChild = !!(
          rootEl && getInstanceFromNode$1(rootEl)
        );
        hasNonRootReactChild &&
          !isRootRenderedBySomeReact &&
          error(
            'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
          ),
          container.nodeType === ELEMENT_NODE &&
            container.tagName &&
            container.tagName.toUpperCase() === 'BODY' &&
            error(
              'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
            );
      };
      function getReactRootElementInContainer(container) {
        return container
          ? container.nodeType === DOCUMENT_NODE
            ? container.documentElement
            : container.firstChild
          : null;
      }
      function shouldHydrateDueToLegacyHeuristic(container) {
        const rootElement = getReactRootElementInContainer(container);
        return !!(
          rootElement &&
          rootElement.nodeType === ELEMENT_NODE &&
          rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME)
        );
      }
      function legacyCreateRootFromDOMContainer(container, forceHydrate) {
        const shouldHydrate =
          forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
        if (!shouldHydrate)
          for (
            var warned = !1, rootSibling;
            (rootSibling = container.lastChild);

          )
            !warned &&
              rootSibling.nodeType === ELEMENT_NODE &&
              rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME) &&
              ((warned = !0),
              error(
                'render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.'
              )),
              container.removeChild(rootSibling);
        return (
          shouldHydrate &&
            !forceHydrate &&
            !warnedAboutHydrateAPI &&
            ((warnedAboutHydrateAPI = !0),
            warn(
              'render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.'
            )),
          createLegacyRoot(container, shouldHydrate ? { hydrate: !0 } : void 0)
        );
      }
      function warnOnInvalidCallback$1(callback, callerName) {
        callback !== null &&
          typeof callback !== 'function' &&
          error(
            '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            callerName,
            callback
          );
      }
      function legacyRenderSubtreeIntoContainer(
        parentComponent,
        children,
        container,
        forceHydrate,
        callback
      ) {
        topLevelUpdateWarnings(container),
          warnOnInvalidCallback$1(
            callback === void 0 ? null : callback,
            'render'
          );
        let root2 = container._reactRootContainer;
        let fiberRoot;
        if (root2) {
          if (
            ((fiberRoot = root2._internalRoot), typeof callback === 'function')
          ) {
            const _originalCallback = callback;
            callback = function () {
              const instance = getPublicRootInstance(fiberRoot);
              _originalCallback.call(instance);
            };
          }
          updateContainer(children, fiberRoot, parentComponent, callback);
        } else {
          if (
            ((root2 = container._reactRootContainer =
              legacyCreateRootFromDOMContainer(container, forceHydrate)),
            (fiberRoot = root2._internalRoot),
            typeof callback === 'function')
          ) {
            const originalCallback = callback;
            callback = function () {
              const instance = getPublicRootInstance(fiberRoot);
              originalCallback.call(instance);
            };
          }
          unbatchedUpdates(() => {
            updateContainer(children, fiberRoot, parentComponent, callback);
          });
        }
        return getPublicRootInstance(fiberRoot);
      }
      function findDOMNode(componentOrElement) {
        {
          const owner = ReactCurrentOwner$3.current;
          if (owner !== null && owner.stateNode !== null) {
            const warnedAboutRefsInRender =
              owner.stateNode._warnedAboutRefsInRender;
            warnedAboutRefsInRender ||
              error(
                '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
                getComponentName(owner.type) || 'A component'
              ),
              (owner.stateNode._warnedAboutRefsInRender = !0);
          }
        }
        return componentOrElement == null
          ? null
          : componentOrElement.nodeType === ELEMENT_NODE
          ? componentOrElement
          : findHostInstanceWithWarning(componentOrElement, 'findDOMNode');
      }
      function hydrate(element, container, callback) {
        if (!isValidContainer(container))
          throw Error('Target container is not a DOM element.');
        {
          const isModernRoot =
            isContainerMarkedAsRoot(container) &&
            container._reactRootContainer === void 0;
          isModernRoot &&
            error(
              'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?'
            );
        }
        return legacyRenderSubtreeIntoContainer(
          null,
          element,
          container,
          !0,
          callback
        );
      }
      function render(element, container, callback) {
        if (!isValidContainer(container))
          throw Error('Target container is not a DOM element.');
        {
          const isModernRoot =
            isContainerMarkedAsRoot(container) &&
            container._reactRootContainer === void 0;
          isModernRoot &&
            error(
              'You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?'
            );
        }
        return legacyRenderSubtreeIntoContainer(
          null,
          element,
          container,
          !1,
          callback
        );
      }
      function unstable_renderSubtreeIntoContainer(
        parentComponent,
        element,
        containerNode,
        callback
      ) {
        if (!isValidContainer(containerNode))
          throw Error('Target container is not a DOM element.');
        if (!(parentComponent != null && has(parentComponent)))
          throw Error('parentComponent must be a valid React Component');
        return legacyRenderSubtreeIntoContainer(
          parentComponent,
          element,
          containerNode,
          !1,
          callback
        );
      }
      function unmountComponentAtNode(container) {
        if (!isValidContainer(container))
          throw Error(
            'unmountComponentAtNode(...): Target container is not a DOM element.'
          );
        {
          const isModernRoot =
            isContainerMarkedAsRoot(container) &&
            container._reactRootContainer === void 0;
          isModernRoot &&
            error(
              'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?'
            );
        }
        if (container._reactRootContainer) {
          {
            const rootEl = getReactRootElementInContainer(container);
            const renderedByDifferentReact =
              rootEl && !getInstanceFromNode$1(rootEl);
            renderedByDifferentReact &&
              error(
                "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
              );
          }
          return (
            unbatchedUpdates(() => {
              legacyRenderSubtreeIntoContainer(
                null,
                null,
                container,
                !1,
                () => {
                  (container._reactRootContainer = null),
                    unmarkContainerAsRoot(container);
                }
              );
            }),
            !0
          );
        }
        {
          const _rootEl = getReactRootElementInContainer(container);
          const hasNonRootReactChild = !!(
            _rootEl && getInstanceFromNode$1(_rootEl)
          );
          const isContainerReactRoot =
            container.nodeType === ELEMENT_NODE &&
            isValidContainer(container.parentNode) &&
            !!container.parentNode._reactRootContainer;
          hasNonRootReactChild &&
            error(
              "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
              isContainerReactRoot
                ? 'You may have accidentally passed in a React root node instead of its container.'
                : 'Instead, have the parent component update its state and rerender in order to remove this component.'
            );
        }
        return !1;
      }
      function createPortal(children, containerInfo, implementation) {
        const key =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: key == null ? null : `${key}`,
          children,
          containerInfo,
          implementation,
        };
      }
      const ReactVersion = '16.14.0';
      setAttemptUserBlockingHydration(attemptUserBlockingHydration$1),
        setAttemptContinuousHydration(attemptContinuousHydration$1),
        setAttemptHydrationAtCurrentPriority(
          attemptHydrationAtCurrentPriority$1
        );
      let didWarnAboutUnstableCreatePortal = !1;
      (typeof Map !== 'function' ||
        Map.prototype == null ||
        typeof Map.prototype.forEach !== 'function' ||
        typeof Set !== 'function' ||
        Set.prototype == null ||
        typeof Set.prototype.clear !== 'function' ||
        typeof Set.prototype.forEach !== 'function') &&
        error(
          'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills'
        ),
        setRestoreImplementation(restoreControlledState$3),
        setBatchingImplementation(
          batchedUpdates$1,
          discreteUpdates$1,
          flushDiscreteUpdates,
          batchedEventUpdates$1
        );
      function createPortal$1(children, container) {
        const key =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!isValidContainer(container))
          throw Error('Target container is not a DOM element.');
        return createPortal(children, container, null, key);
      }
      function renderSubtreeIntoContainer(
        parentComponent,
        element,
        containerNode,
        callback
      ) {
        return unstable_renderSubtreeIntoContainer(
          parentComponent,
          element,
          containerNode,
          callback
        );
      }
      function unstable_createPortal(children, container) {
        const key =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        return (
          didWarnAboutUnstableCreatePortal ||
            ((didWarnAboutUnstableCreatePortal = !0),
            warn(
              'The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.'
            )),
          createPortal$1(children, container, key)
        );
      }
      const Internals = {
        Events: [
          getInstanceFromNode$1,
          getNodeFromInstance$1,
          getFiberCurrentPropsFromNode$1,
          injectEventPluginsByName,
          eventNameDispatchConfigs,
          accumulateTwoPhaseDispatches,
          accumulateDirectDispatches,
          enqueueStateRestore,
          restoreStateIfNeeded,
          dispatchEvent,
          runEventsInBatch,
          flushPassiveEffects,
          IsThisRendererActing,
        ],
      };
      const foundDevTools = injectIntoDevTools({
        findFiberByHostInstance: getClosestInstanceFromNode,
        bundleType: 1,
        version: ReactVersion,
        rendererPackageName: 'react-dom',
      });
      if (
        !foundDevTools &&
        canUseDOM &&
        window.top === window.self &&
        ((navigator.userAgent.indexOf('Chrome') > -1 &&
          navigator.userAgent.indexOf('Edge') === -1) ||
          navigator.userAgent.indexOf('Firefox') > -1)
      ) {
        const { protocol } = window.location;
        /^(https?|file):$/.test(protocol) &&
          console.info(
            `%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools${
              protocol === 'file:'
                ? `
You might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq`
                : ''
            }`,
            'font-weight:bold'
          );
      }
      (exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals),
        (exports.createPortal = createPortal$1),
        (exports.findDOMNode = findDOMNode),
        (exports.flushSync = flushSync2),
        (exports.hydrate = hydrate),
        (exports.render = render),
        (exports.unmountComponentAtNode = unmountComponentAtNode),
        (exports.unstable_batchedUpdates = batchedUpdates$1),
        (exports.unstable_createPortal = unstable_createPortal),
        (exports.unstable_renderSubtreeIntoContainer =
          renderSubtreeIntoContainer),
        (exports.version = ReactVersion);
    })();
  },
});
const require_react_dom = __commonJS({
  '../../node_modules/react-dom/index.js': function (exports, module) {
    module.exports = require_react_dom_development();
  },
});
const React3 = __toESM(require_react(), 1);
const import_react = __toESM(require_react(), 1);
const ReactDOM = __toESM(require_react_dom(), 1);
const import_react_dom = __toESM(require_react_dom(), 1);
const import_memoizerific = __toESM(require_memoizerific(), 1);
const require_react_fast_compare = __commonJS2({
  '../../node_modules/react-fast-compare/index.js': function (exports, module) {
    const hasElementType = typeof Element < 'u';
    const hasMap = typeof Map === 'function';
    const hasSet = typeof Set === 'function';
    const hasArrayBuffer =
      typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b) return !0;
      if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) return !1;
        let length;
        let i;
        let keys;
        if (Array.isArray(a)) {
          if (((length = a.length), length != b.length)) return !1;
          for (i = length; i-- !== 0; ) if (!equal(a[i], b[i])) return !1;
          return !0;
        }
        let it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return !1;
          for (it = a.entries(); !(i = it.next()).done; )
            if (!b.has(i.value[0])) return !1;
          for (it = a.entries(); !(i = it.next()).done; )
            if (!equal(i.value[1], b.get(i.value[0]))) return !1;
          return !0;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return !1;
          for (it = a.entries(); !(i = it.next()).done; )
            if (!b.has(i.value[0])) return !1;
          return !0;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          if (((length = a.length), length != b.length)) return !1;
          for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return !1;
          return !0;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (
          a.valueOf !== Object.prototype.valueOf &&
          typeof a.valueOf === 'function' &&
          typeof b.valueOf === 'function'
        )
          return a.valueOf() === b.valueOf();
        if (
          a.toString !== Object.prototype.toString &&
          typeof a.toString === 'function' &&
          typeof b.toString === 'function'
        )
          return a.toString() === b.toString();
        if (
          ((keys = Object.keys(a)),
          (length = keys.length),
          length !== Object.keys(b).length)
        )
          return !1;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1;
        if (hasElementType && a instanceof Element) return !1;
        for (i = length; i-- !== 0; )
          if (
            !(
              (keys[i] === '_owner' ||
                keys[i] === '__v' ||
                keys[i] === '__o') &&
              a.$$typeof
            ) &&
            !equal(a[keys[i]], b[keys[i]])
          )
            return !1;
        return !0;
      }
      return a !== a && b !== b;
    }
    module.exports = function (a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || '').match(/stack|recursion/i))
          return (
            console.warn('react-fast-compare cannot handle circular refs'), !1
          );
        throw error;
      }
    };
  },
});
const fromEntries = function (entries) {
  return entries.reduce((acc, _ref) => {
    const key = _ref[0];
    const value = _ref[1];
    return (acc[key] = value), acc;
  }, {});
};
const useIsomorphicLayoutEffect =
  typeof window < 'u' && window.document && window.document.createElement
    ? React3.useLayoutEffect
    : React3.useEffect;
const top = 'top';
const bottom = 'bottom';
const right = 'right';
const left = 'left';
const auto = 'auto';
const basePlacements = [top, bottom, right, left];
const start = 'start';
const end = 'end';
const clippingParents = 'clippingParents';
const viewport = 'viewport';
const popper = 'popper';
const reference = 'reference';
const variationPlacements = basePlacements.reduce(
  (acc, placement) =>
    acc.concat([`${placement}-${start}`, `${placement}-${end}`]),
  []
);
const placements = []
  .concat(basePlacements, [auto])
  .reduce(
    (acc, placement) =>
      acc.concat([placement, `${placement}-${start}`, `${placement}-${end}`]),
    []
  );
const beforeRead = 'beforeRead';
const read = 'read';
const afterRead = 'afterRead';
const beforeMain = 'beforeMain';
const main = 'main';
const afterMain = 'afterMain';
const beforeWrite = 'beforeWrite';
const write = 'write';
const afterWrite = 'afterWrite';
const modifierPhases = [
  beforeRead,
  read,
  afterRead,
  beforeMain,
  main,
  afterMain,
  beforeWrite,
  write,
  afterWrite,
];
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) return window;
  if (node.toString() !== '[object Window]') {
    const { ownerDocument } = node;
    return (ownerDocument && ownerDocument.defaultView) || window;
  }
  return node;
}
function isElement(node) {
  const OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  const OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot > 'u') return !1;
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  const { state } = _ref;
  Object.keys(state.elements).forEach((name) => {
    const style = state.styles[name] || {};
    const attributes = state.attributes[name] || {};
    const element = state.elements[name];
    !isHTMLElement(element) ||
      !getNodeName(element) ||
      (Object.assign(element.style, style),
      Object.keys(attributes).forEach((name2) => {
        const value = attributes[name2];
        value === !1
          ? element.removeAttribute(name2)
          : element.setAttribute(name2, value === !0 ? '' : value);
      }));
  });
}
function effect(_ref2) {
  const { state } = _ref2;
  const initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0',
    },
    arrow: { position: 'absolute' },
    reference: {},
  };
  return (
    Object.assign(state.elements.popper.style, initialStyles.popper),
    (state.styles = initialStyles),
    state.elements.arrow &&
      Object.assign(state.elements.arrow.style, initialStyles.arrow),
    function () {
      Object.keys(state.elements).forEach((name) => {
        const element = state.elements[name];
        const attributes = state.attributes[name] || {};
        const styleProperties = Object.keys(
          state.styles.hasOwnProperty(name)
            ? state.styles[name]
            : initialStyles[name]
        );
        const style = styleProperties.reduce(
          (style2, property) => ((style2[property] = ''), style2),
          {}
        );
        !isHTMLElement(element) ||
          !getNodeName(element) ||
          (Object.assign(element.style, style),
          Object.keys(attributes).forEach((attribute) => {
            element.removeAttribute(attribute);
          }));
      });
    }
  );
}
const applyStyles_default = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: applyStyles,
  effect,
  requires: ['computeStyles'],
};
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
const { max } = Math;
const { min } = Math;
const { round } = Math;
function getUAString() {
  const uaData = navigator.userAgentData;
  return uaData != null && uaData.brands && Array.isArray(uaData.brands)
    ? uaData.brands.map((item) => `${item.brand}/${item.version}`).join(' ')
    : navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  includeScale === void 0 && (includeScale = !1),
    isFixedStrategy === void 0 && (isFixedStrategy = !1);
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  includeScale &&
    isHTMLElement(element) &&
    ((scaleX =
      (element.offsetWidth > 0 &&
        round(clientRect.width) / element.offsetWidth) ||
      1),
    (scaleY =
      (element.offsetHeight > 0 &&
        round(clientRect.height) / element.offsetHeight) ||
      1));
  const _ref = isElement(element) ? getWindow(element) : window;
  const { visualViewport } = _ref;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x =
    (clientRect.left +
      (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) /
    scaleX;
  const y =
    (clientRect.top +
      (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) /
    scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y,
  };
}
function getLayoutRect(element) {
  const clientRect = getBoundingClientRect(element);
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  return (
    Math.abs(clientRect.width - width) <= 1 && (width = clientRect.width),
    Math.abs(clientRect.height - height) <= 1 && (height = clientRect.height),
    { x: element.offsetLeft, y: element.offsetTop, width, height }
  );
}
function contains(parent, child) {
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) return !0;
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent.isSameNode(next)) return !0;
      next = next.parentNode || next.host;
    } while (next);
  }
  return !1;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return (
    (isElement(element) ? element.ownerDocument : element.document) ||
    window.document
  ).documentElement;
}
function getParentNode(element) {
  return getNodeName(element) === 'html'
    ? element
    : element.assignedSlot ||
        element.parentNode ||
        (isShadowRoot(element) ? element.host : null) ||
        getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  return !isHTMLElement(element) ||
    getComputedStyle(element).position === 'fixed'
    ? null
    : element.offsetParent;
}
function getContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    const elementCss = getComputedStyle(element);
    if (elementCss.position === 'fixed') return null;
  }
  let currentNode = getParentNode(element);
  for (
    isShadowRoot(currentNode) && (currentNode = currentNode.host);
    isHTMLElement(currentNode) &&
    ['html', 'body'].indexOf(getNodeName(currentNode)) < 0;

  ) {
    const css = getComputedStyle(currentNode);
    if (
      css.transform !== 'none' ||
      css.perspective !== 'none' ||
      css.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(css.willChange) !== -1 ||
      (isFirefox && css.willChange === 'filter') ||
      (isFirefox && css.filter && css.filter !== 'none')
    )
      return currentNode;
    currentNode = currentNode.parentNode;
  }
  return null;
}
function getOffsetParent(element) {
  for (
    var window2 = getWindow(element),
      offsetParent = getTrueOffsetParent(element);
    offsetParent &&
    isTableElement(offsetParent) &&
    getComputedStyle(offsetParent).position === 'static';

  )
    offsetParent = getTrueOffsetParent(offsetParent);
  return offsetParent &&
    (getNodeName(offsetParent) === 'html' ||
      (getNodeName(offsetParent) === 'body' &&
        getComputedStyle(offsetParent).position === 'static'))
    ? window2
    : offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  const v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mergePaddingObject(paddingObject) {
  return { ...getFreshSideObject(), ...paddingObject };
}
function expandToHashMap(value, keys) {
  return keys.reduce((hashMap, key) => ((hashMap[key] = value), hashMap), {});
}
const toPaddingObject = function (padding, state) {
  return (
    (padding =
      typeof padding === 'function'
        ? padding({ ...state.rects, placement: state.placement })
        : padding),
    mergePaddingObject(
      typeof padding !== 'number'
        ? padding
        : expandToHashMap(padding, basePlacements)
    )
  );
};
function arrow(_ref) {
  let _state$modifiersData$;
  const { state } = _ref;
  const { name } = _ref;
  const { options } = _ref;
  const arrowElement = state.elements.arrow;
  const popperOffsets2 = state.modifiersData.popperOffsets;
  const basePlacement = getBasePlacement(state.placement);
  const axis = getMainAxisFromPlacement(basePlacement);
  const isVertical = [left, right].indexOf(basePlacement) >= 0;
  const len = isVertical ? 'height' : 'width';
  if (!(!arrowElement || !popperOffsets2)) {
    const paddingObject = toPaddingObject(options.padding, state);
    const arrowRect = getLayoutRect(arrowElement);
    const minProp = axis === 'y' ? top : left;
    const maxProp = axis === 'y' ? bottom : right;
    const endDiff =
      state.rects.reference[len] +
      state.rects.reference[axis] -
      popperOffsets2[axis] -
      state.rects.popper[len];
    const startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    const arrowOffsetParent = getOffsetParent(arrowElement);
    const clientSize = arrowOffsetParent
      ? axis === 'y'
        ? arrowOffsetParent.clientHeight || 0
        : arrowOffsetParent.clientWidth || 0
      : 0;
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min2 = paddingObject[minProp];
    const max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    const offset2 = within(min2, center, max2);
    const axisProp = axis;
    state.modifiersData[name] =
      ((_state$modifiersData$ = {}),
      (_state$modifiersData$[axisProp] = offset2),
      (_state$modifiersData$.centerOffset = offset2 - center),
      _state$modifiersData$);
  }
}
function effect2(_ref2) {
  const { state } = _ref2;
  const { options } = _ref2;
  const _options$element = options.element;
  let arrowElement =
    _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  arrowElement != null &&
    ((typeof arrowElement === 'string' &&
      ((arrowElement = state.elements.popper.querySelector(arrowElement)),
      !arrowElement)) ||
      (contains(state.elements.popper, arrowElement) &&
        (state.elements.arrow = arrowElement)));
}
const arrow_default = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: arrow,
  effect: effect2,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function getVariation(placement) {
  return placement.split('-')[1];
}
const unsetSides = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function roundOffsetsByDPR(_ref, win) {
  const { x } = _ref;
  const { y } = _ref;
  const dpr = win.devicePixelRatio || 1;
  return { x: round(x * dpr) / dpr || 0, y: round(y * dpr) / dpr || 0 };
}
function mapToStyles(_ref2) {
  let _Object$assign2;
  const popper2 = _ref2.popper;
  const { popperRect } = _ref2;
  const { placement } = _ref2;
  const { variation } = _ref2;
  const { offsets } = _ref2;
  const { position } = _ref2;
  const { gpuAcceleration } = _ref2;
  const { adaptive } = _ref2;
  const { roundOffsets } = _ref2;
  const { isFixed } = _ref2;
  const _offsets$x = offsets.x;
  let x = _offsets$x === void 0 ? 0 : _offsets$x;
  const _offsets$y = offsets.y;
  let y = _offsets$y === void 0 ? 0 : _offsets$y;
  const _ref3 =
    typeof roundOffsets === 'function' ? roundOffsets({ x, y }) : { x, y };
  (x = _ref3.x), (y = _ref3.y);
  const hasX = offsets.hasOwnProperty('x');
  const hasY = offsets.hasOwnProperty('y');
  let sideX = left;
  let sideY = top;
  const win = window;
  if (adaptive) {
    let offsetParent = getOffsetParent(popper2);
    let heightProp = 'clientHeight';
    let widthProp = 'clientWidth';
    if (
      (offsetParent === getWindow(popper2) &&
        ((offsetParent = getDocumentElement(popper2)),
        getComputedStyle(offsetParent).position !== 'static' &&
          position === 'absolute' &&
          ((heightProp = 'scrollHeight'), (widthProp = 'scrollWidth'))),
      (offsetParent = offsetParent),
      placement === top ||
        ((placement === left || placement === right) && variation === end))
    ) {
      sideY = bottom;
      const offsetY =
        isFixed && offsetParent === win && win.visualViewport
          ? win.visualViewport.height
          : offsetParent[heightProp];
      (y -= offsetY - popperRect.height), (y *= gpuAcceleration ? 1 : -1);
    }
    if (
      placement === left ||
      ((placement === top || placement === bottom) && variation === end)
    ) {
      sideX = right;
      const offsetX =
        isFixed && offsetParent === win && win.visualViewport
          ? win.visualViewport.width
          : offsetParent[widthProp];
      (x -= offsetX - popperRect.width), (x *= gpuAcceleration ? 1 : -1);
    }
  }
  const commonStyles = { position, ...(adaptive && unsetSides) };
  const _ref4 =
    roundOffsets === !0
      ? roundOffsetsByDPR({ x, y }, getWindow(popper2))
      : { x, y };
  if (((x = _ref4.x), (y = _ref4.y), gpuAcceleration)) {
    let _Object$assign;
    return {
      ...commonStyles,
      ...((_Object$assign = {}),
      (_Object$assign[sideY] = hasY ? '0' : ''),
      (_Object$assign[sideX] = hasX ? '0' : ''),
      (_Object$assign.transform =
        (win.devicePixelRatio || 1) <= 1
          ? `translate(${x}px, ${y}px)`
          : `translate3d(${x}px, ${y}px, 0)`),
      _Object$assign),
    };
  }
  return {
    ...commonStyles,
    ...((_Object$assign2 = {}),
    (_Object$assign2[sideY] = hasY ? `${y}px` : ''),
    (_Object$assign2[sideX] = hasX ? `${x}px` : ''),
    (_Object$assign2.transform = ''),
    _Object$assign2),
  };
}
function computeStyles(_ref5) {
  const { state } = _ref5;
  const { options } = _ref5;
  const _options$gpuAccelerat = options.gpuAcceleration;
  const gpuAcceleration =
    _options$gpuAccelerat === void 0 ? !0 : _options$gpuAccelerat;
  const _options$adaptive = options.adaptive;
  const adaptive = _options$adaptive === void 0 ? !0 : _options$adaptive;
  const _options$roundOffsets = options.roundOffsets;
  const roundOffsets =
    _options$roundOffsets === void 0 ? !0 : _options$roundOffsets;
  const commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === 'fixed',
  };
  state.modifiersData.popperOffsets != null &&
    (state.styles.popper = {
      ...state.styles.popper,
      ...mapToStyles({
        ...commonStyles,
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets,
      }),
    }),
    state.modifiersData.arrow != null &&
      (state.styles.arrow = {
        ...state.styles.arrow,
        ...mapToStyles({
          ...commonStyles,
          offsets: state.modifiersData.arrow,
          position: 'absolute',
          adaptive: !1,
          roundOffsets,
        }),
      }),
    (state.attributes.popper = {
      ...state.attributes.popper,
      'data-popper-placement': state.placement,
    });
}
const computeStyles_default = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {},
};
const passive = { passive: !0 };
function effect3(_ref) {
  const { state } = _ref;
  const { instance } = _ref;
  const { options } = _ref;
  const _options$scroll = options.scroll;
  const scroll = _options$scroll === void 0 ? !0 : _options$scroll;
  const _options$resize = options.resize;
  const resize = _options$resize === void 0 ? !0 : _options$resize;
  const window2 = getWindow(state.elements.popper);
  const scrollParents = [].concat(
    state.scrollParents.reference,
    state.scrollParents.popper
  );
  return (
    scroll &&
      scrollParents.forEach((scrollParent) => {
        scrollParent.addEventListener('scroll', instance.update, passive);
      }),
    resize && window2.addEventListener('resize', instance.update, passive),
    function () {
      scroll &&
        scrollParents.forEach((scrollParent) => {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        }),
        resize &&
          window2.removeEventListener('resize', instance.update, passive);
    }
  );
}
const eventListeners_default = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn() {},
  effect: effect3,
  data: {},
};
const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function getOppositePlacement(placement) {
  return placement.replace(
    /left|right|bottom|top/g,
    (matched) => hash[matched]
  );
}
const hash2 = { start: 'end', end: 'start' };
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash2[matched]);
}
function getWindowScroll(node) {
  const win = getWindow(node);
  const scrollLeft = win.pageXOffset;
  const scrollTop = win.pageYOffset;
  return { scrollLeft, scrollTop };
}
function getWindowScrollBarX(element) {
  return (
    getBoundingClientRect(getDocumentElement(element)).left +
    getWindowScroll(element).scrollLeft
  );
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const { visualViewport } = win;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    (width = visualViewport.width), (height = visualViewport.height);
    const layoutViewport = isLayoutViewport();
    (layoutViewport || (!layoutViewport && strategy === 'fixed')) &&
      ((x = visualViewport.offsetLeft), (y = visualViewport.offsetTop));
  }
  return { width, height, x: x + getWindowScrollBarX(element), y };
}
function getDocumentRect(element) {
  let _element$ownerDocumen;
  const html = getDocumentElement(element);
  const winScroll = getWindowScroll(element);
  const body =
    (_element$ownerDocumen = element.ownerDocument) == null
      ? void 0
      : _element$ownerDocumen.body;
  const width = max(
    html.scrollWidth,
    html.clientWidth,
    body ? body.scrollWidth : 0,
    body ? body.clientWidth : 0
  );
  const height = max(
    html.scrollHeight,
    html.clientHeight,
    body ? body.scrollHeight : 0,
    body ? body.clientHeight : 0
  );
  let x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  const y = -winScroll.scrollTop;
  return (
    getComputedStyle(body || html).direction === 'rtl' &&
      (x += max(html.clientWidth, body ? body.clientWidth : 0) - width),
    { width, height, x, y }
  );
}
function isScrollParent(element) {
  const _getComputedStyle = getComputedStyle(element);
  const { overflow } = _getComputedStyle;
  const { overflowX } = _getComputedStyle;
  const { overflowY } = _getComputedStyle;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  return ['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0
    ? node.ownerDocument.body
    : isHTMLElement(node) && isScrollParent(node)
    ? node
    : getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  let _element$ownerDocumen;
  list === void 0 && (list = []);
  const scrollParent = getScrollParent(element);
  const isBody =
    scrollParent ===
    ((_element$ownerDocumen = element.ownerDocument) == null
      ? void 0
      : _element$ownerDocumen.body);
  const win = getWindow(scrollParent);
  const target = isBody
    ? [win].concat(
        win.visualViewport || [],
        isScrollParent(scrollParent) ? scrollParent : []
      )
    : scrollParent;
  const updatedList = list.concat(target);
  return isBody
    ? updatedList
    : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return {
    ...rect,
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const rect = getBoundingClientRect(element, !1, strategy === 'fixed');
  return (
    (rect.top += element.clientTop),
    (rect.left += element.clientLeft),
    (rect.bottom = rect.top + element.clientHeight),
    (rect.right = rect.left + element.clientWidth),
    (rect.width = element.clientWidth),
    (rect.height = element.clientHeight),
    (rect.x = rect.left),
    (rect.y = rect.top),
    rect
  );
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport
    ? rectToClientRect(getViewportRect(element, strategy))
    : isElement(clippingParent)
    ? getInnerBoundingClientRect(clippingParent, strategy)
    : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  const clippingParents2 = listScrollParents(getParentNode(element));
  const canEscapeClipping =
    ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  const clipperElement =
    canEscapeClipping && isHTMLElement(element)
      ? getOffsetParent(element)
      : element;
  return isElement(clipperElement)
    ? clippingParents2.filter(
        (clippingParent) =>
          isElement(clippingParent) &&
          contains(clippingParent, clipperElement) &&
          getNodeName(clippingParent) !== 'body'
      )
    : [];
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  const mainClippingParents =
    boundary === 'clippingParents'
      ? getClippingParents(element)
      : [].concat(boundary);
  const clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  const firstClippingParent = clippingParents2[0];
  const clippingRect = clippingParents2.reduce(
    (accRect, clippingParent) => {
      const rect = getClientRectFromMixedType(
        element,
        clippingParent,
        strategy
      );
      return (
        (accRect.top = max(rect.top, accRect.top)),
        (accRect.right = min(rect.right, accRect.right)),
        (accRect.bottom = min(rect.bottom, accRect.bottom)),
        (accRect.left = max(rect.left, accRect.left)),
        accRect
      );
    },
    getClientRectFromMixedType(element, firstClippingParent, strategy)
  );
  return (
    (clippingRect.width = clippingRect.right - clippingRect.left),
    (clippingRect.height = clippingRect.bottom - clippingRect.top),
    (clippingRect.x = clippingRect.left),
    (clippingRect.y = clippingRect.top),
    clippingRect
  );
}
function computeOffsets(_ref) {
  const reference2 = _ref.reference;
  const { element } = _ref;
  const { placement } = _ref;
  const basePlacement = placement ? getBasePlacement(placement) : null;
  const variation = placement ? getVariation(placement) : null;
  const commonX = reference2.x + reference2.width / 2 - element.width / 2;
  const commonY = reference2.y + reference2.height / 2 - element.height / 2;
  let offsets;
  switch (basePlacement) {
    case top:
      offsets = { x: commonX, y: reference2.y - element.height };
      break;
    case bottom:
      offsets = { x: commonX, y: reference2.y + reference2.height };
      break;
    case right:
      offsets = { x: reference2.x + reference2.width, y: commonY };
      break;
    case left:
      offsets = { x: reference2.x - element.width, y: commonY };
      break;
    default:
      offsets = { x: reference2.x, y: reference2.y };
  }
  const mainAxis = basePlacement
    ? getMainAxisFromPlacement(basePlacement)
    : null;
  if (mainAxis != null) {
    const len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] =
          offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] =
          offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  options === void 0 && (options = {});
  const _options = options;
  const _options$placement = _options.placement;
  const placement =
    _options$placement === void 0 ? state.placement : _options$placement;
  const _options$strategy = _options.strategy;
  const strategy =
    _options$strategy === void 0 ? state.strategy : _options$strategy;
  const _options$boundary = _options.boundary;
  const boundary =
    _options$boundary === void 0 ? clippingParents : _options$boundary;
  const _options$rootBoundary = _options.rootBoundary;
  const rootBoundary =
    _options$rootBoundary === void 0 ? viewport : _options$rootBoundary;
  const _options$elementConte = _options.elementContext;
  const elementContext =
    _options$elementConte === void 0 ? popper : _options$elementConte;
  const _options$altBoundary = _options.altBoundary;
  const altBoundary =
    _options$altBoundary === void 0 ? !1 : _options$altBoundary;
  const _options$padding = _options.padding;
  const padding = _options$padding === void 0 ? 0 : _options$padding;
  const paddingObject = mergePaddingObject(
    typeof padding !== 'number'
      ? padding
      : expandToHashMap(padding, basePlacements)
  );
  const altContext = elementContext === popper ? reference : popper;
  const popperRect = state.rects.popper;
  const element = state.elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = getClippingRect(
    isElement(element)
      ? element
      : element.contextElement || getDocumentElement(state.elements.popper),
    boundary,
    rootBoundary,
    strategy
  );
  const referenceClientRect = getBoundingClientRect(state.elements.reference);
  const popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement,
  });
  const popperClientRect = rectToClientRect({
    ...popperRect,
    ...popperOffsets2,
  });
  const elementClientRect =
    elementContext === popper ? popperClientRect : referenceClientRect;
  const overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom:
      elementClientRect.bottom -
      clippingClientRect.bottom +
      paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right:
      elementClientRect.right - clippingClientRect.right + paddingObject.right,
  };
  const offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    const offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach((key) => {
      const multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      const axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  options === void 0 && (options = {});
  const _options = options;
  const { placement } = _options;
  const { boundary } = _options;
  const { rootBoundary } = _options;
  const { padding } = _options;
  const { flipVariations } = _options;
  const _options$allowedAutoP = _options.allowedAutoPlacements;
  const allowedAutoPlacements =
    _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  const variation = getVariation(placement);
  const placements2 = variation
    ? flipVariations
      ? variationPlacements
      : variationPlacements.filter(
          (placement2) => getVariation(placement2) === variation
        )
    : basePlacements;
  let allowedPlacements = placements2.filter(
    (placement2) => allowedAutoPlacements.indexOf(placement2) >= 0
  );
  allowedPlacements.length === 0 && (allowedPlacements = placements2);
  const overflows = allowedPlacements.reduce(
    (acc, placement2) => (
      (acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
      })[getBasePlacement(placement2)]),
      acc
    ),
    {}
  );
  return Object.keys(overflows).sort((a, b) => overflows[a] - overflows[b]);
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) return [];
  const oppositePlacement = getOppositePlacement(placement);
  return [
    getOppositeVariationPlacement(placement),
    oppositePlacement,
    getOppositeVariationPlacement(oppositePlacement),
  ];
}
function flip(_ref) {
  const { state } = _ref;
  const { options } = _ref;
  const { name } = _ref;
  if (!state.modifiersData[name]._skip) {
    for (
      var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? !0 : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? !0 : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        { padding } = options,
        { boundary } = options,
        { rootBoundary } = options,
        { altBoundary } = options,
        _options$flipVariatio = options.flipVariations,
        flipVariations =
          _options$flipVariatio === void 0 ? !0 : _options$flipVariatio,
        { allowedAutoPlacements } = options,
        preferredPlacement = state.options.placement,
        basePlacement = getBasePlacement(preferredPlacement),
        isBasePlacement = basePlacement === preferredPlacement,
        fallbackPlacements =
          specifiedFallbackPlacements ||
          (isBasePlacement || !flipVariations
            ? [getOppositePlacement(preferredPlacement)]
            : getExpandedFallbackPlacements(preferredPlacement)),
        placements2 = [preferredPlacement]
          .concat(fallbackPlacements)
          .reduce(
            (acc, placement2) =>
              acc.concat(
                getBasePlacement(placement2) === auto
                  ? computeAutoPlacement(state, {
                      placement: placement2,
                      boundary,
                      rootBoundary,
                      padding,
                      flipVariations,
                      allowedAutoPlacements,
                    })
                  : placement2
              ),
            []
          ),
        referenceRect = state.rects.reference,
        popperRect = state.rects.popper,
        checksMap = new Map(),
        makeFallbackChecks = !0,
        firstFittingPlacement = placements2[0],
        i = 0;
      i < placements2.length;
      i++
    ) {
      const placement = placements2[i];
      const _basePlacement = getBasePlacement(placement);
      const isStartVariation = getVariation(placement) === start;
      const isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      const len = isVertical ? 'width' : 'height';
      const overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding,
      });
      let mainVariationSide = isVertical
        ? isStartVariation
          ? right
          : left
        : isStartVariation
        ? bottom
        : top;
      referenceRect[len] > popperRect[len] &&
        (mainVariationSide = getOppositePlacement(mainVariationSide));
      const altVariationSide = getOppositePlacement(mainVariationSide);
      const checks = [];
      if (
        (checkMainAxis && checks.push(overflow[_basePlacement] <= 0),
        checkAltAxis &&
          checks.push(
            overflow[mainVariationSide] <= 0,
            overflow[altVariationSide] <= 0
          ),
        checks.every((check) => check))
      ) {
        (firstFittingPlacement = placement), (makeFallbackChecks = !1);
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks)
      for (
        let numberOfChecks = flipVariations ? 3 : 1,
          _loop = function (_i2) {
            const fittingPlacement = placements2.find((placement2) => {
              const checks2 = checksMap.get(placement2);
              if (checks2) return checks2.slice(0, _i2).every((check) => check);
            });
            if (fittingPlacement)
              return (firstFittingPlacement = fittingPlacement), 'break';
          },
          _i = numberOfChecks;
        _i > 0;
        _i--
      ) {
        const _ret = _loop(_i);
        if (_ret === 'break') break;
      }
    state.placement !== firstFittingPlacement &&
      ((state.modifiersData[name]._skip = !0),
      (state.placement = firstFittingPlacement),
      (state.reset = !0));
  }
}
const flip_default = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  return (
    preventedOffsets === void 0 && (preventedOffsets = { x: 0, y: 0 }),
    {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x,
    }
  );
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some((side) => overflow[side] >= 0);
}
function hide(_ref) {
  const { state } = _ref;
  const { name } = _ref;
  const referenceRect = state.rects.reference;
  const popperRect = state.rects.popper;
  const preventedOffsets = state.modifiersData.preventOverflow;
  const referenceOverflow = detectOverflow(state, {
    elementContext: 'reference',
  });
  const popperAltOverflow = detectOverflow(state, { altBoundary: !0 });
  const referenceClippingOffsets = getSideOffsets(
    referenceOverflow,
    referenceRect
  );
  const popperEscapeOffsets = getSideOffsets(
    popperAltOverflow,
    popperRect,
    preventedOffsets
  );
  const isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  const hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  (state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped,
  }),
    (state.attributes.popper = {
      ...state.attributes.popper,
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped,
    });
}
const hide_default = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide,
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  const basePlacement = getBasePlacement(placement);
  const invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  const _ref =
    typeof offset2 === 'function' ? offset2({ ...rects, placement }) : offset2;
  let skidding = _ref[0];
  let distance = _ref[1];
  return (
    (skidding = skidding || 0),
    (distance = (distance || 0) * invertDistance),
    [left, right].indexOf(basePlacement) >= 0
      ? { x: distance, y: skidding }
      : { x: skidding, y: distance }
  );
}
function offset(_ref2) {
  const { state } = _ref2;
  const { options } = _ref2;
  const { name } = _ref2;
  const _options$offset = options.offset;
  const offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  const data = placements.reduce(
    (acc, placement) => (
      (acc[placement] = distanceAndSkiddingToXY(
        placement,
        state.rects,
        offset2
      )),
      acc
    ),
    {}
  );
  const _data$state$placement = data[state.placement];
  const { x } = _data$state$placement;
  const { y } = _data$state$placement;
  state.modifiersData.popperOffsets != null &&
    ((state.modifiersData.popperOffsets.x += x),
    (state.modifiersData.popperOffsets.y += y)),
    (state.modifiersData[name] = data);
}
const offset_default = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset,
};
function popperOffsets(_ref) {
  const { state } = _ref;
  const { name } = _ref;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement,
  });
}
const popperOffsets_default = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: popperOffsets,
  data: {},
};
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function preventOverflow(_ref) {
  const { state } = _ref;
  const { options } = _ref;
  const { name } = _ref;
  const _options$mainAxis = options.mainAxis;
  const checkMainAxis = _options$mainAxis === void 0 ? !0 : _options$mainAxis;
  const _options$altAxis = options.altAxis;
  const checkAltAxis = _options$altAxis === void 0 ? !1 : _options$altAxis;
  const { boundary } = options;
  const { rootBoundary } = options;
  const { altBoundary } = options;
  const { padding } = options;
  const _options$tether = options.tether;
  const tether = _options$tether === void 0 ? !0 : _options$tether;
  const _options$tetherOffset = options.tetherOffset;
  const tetherOffset =
    _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  const overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary,
  });
  const basePlacement = getBasePlacement(state.placement);
  const variation = getVariation(state.placement);
  const isBasePlacement = !variation;
  const mainAxis = getMainAxisFromPlacement(basePlacement);
  const altAxis = getAltAxis(mainAxis);
  const popperOffsets2 = state.modifiersData.popperOffsets;
  const referenceRect = state.rects.reference;
  const popperRect = state.rects.popper;
  const tetherOffsetValue =
    typeof tetherOffset === 'function'
      ? tetherOffset({ ...state.rects, placement: state.placement })
      : tetherOffset;
  const normalizedTetherOffsetValue =
    typeof tetherOffsetValue === 'number'
      ? { mainAxis: tetherOffsetValue, altAxis: tetherOffsetValue }
      : { mainAxis: 0, altAxis: 0, ...tetherOffsetValue };
  const offsetModifierState = state.modifiersData.offset
    ? state.modifiersData.offset[state.placement]
    : null;
  const data = { x: 0, y: 0 };
  if (popperOffsets2) {
    if (checkMainAxis) {
      let _offsetModifierState$;
      const mainSide = mainAxis === 'y' ? top : left;
      const altSide = mainAxis === 'y' ? bottom : right;
      const len = mainAxis === 'y' ? 'height' : 'width';
      const offset2 = popperOffsets2[mainAxis];
      const min2 = offset2 + overflow[mainSide];
      const max2 = offset2 - overflow[altSide];
      const additive = tether ? -popperRect[len] / 2 : 0;
      const minLen = variation === start ? referenceRect[len] : popperRect[len];
      const maxLen =
        variation === start ? -popperRect[len] : -referenceRect[len];
      const arrowElement = state.elements.arrow;
      const arrowRect =
        tether && arrowElement
          ? getLayoutRect(arrowElement)
          : { width: 0, height: 0 };
      const arrowPaddingObject = state.modifiersData['arrow#persistent']
        ? state.modifiersData['arrow#persistent'].padding
        : getFreshSideObject();
      const arrowPaddingMin = arrowPaddingObject[mainSide];
      const arrowPaddingMax = arrowPaddingObject[altSide];
      const arrowLen = within(0, referenceRect[len], arrowRect[len]);
      const minOffset = isBasePlacement
        ? referenceRect[len] / 2 -
          additive -
          arrowLen -
          arrowPaddingMin -
          normalizedTetherOffsetValue.mainAxis
        : minLen -
          arrowLen -
          arrowPaddingMin -
          normalizedTetherOffsetValue.mainAxis;
      const maxOffset = isBasePlacement
        ? -referenceRect[len] / 2 +
          additive +
          arrowLen +
          arrowPaddingMax +
          normalizedTetherOffsetValue.mainAxis
        : maxLen +
          arrowLen +
          arrowPaddingMax +
          normalizedTetherOffsetValue.mainAxis;
      const arrowOffsetParent =
        state.elements.arrow && getOffsetParent(state.elements.arrow);
      const clientOffset = arrowOffsetParent
        ? mainAxis === 'y'
          ? arrowOffsetParent.clientTop || 0
          : arrowOffsetParent.clientLeft || 0
        : 0;
      const offsetModifierValue =
        (_offsetModifierState$ = offsetModifierState?.[mainAxis]) != null
          ? _offsetModifierState$
          : 0;
      const tetherMin =
        offset2 + minOffset - offsetModifierValue - clientOffset;
      const tetherMax = offset2 + maxOffset - offsetModifierValue;
      const preventedOffset = within(
        tether ? min(min2, tetherMin) : min2,
        offset2,
        tether ? max(max2, tetherMax) : max2
      );
      (popperOffsets2[mainAxis] = preventedOffset),
        (data[mainAxis] = preventedOffset - offset2);
    }
    if (checkAltAxis) {
      let _offsetModifierState$2;
      const _mainSide = mainAxis === 'x' ? top : left;
      const _altSide = mainAxis === 'x' ? bottom : right;
      const _offset = popperOffsets2[altAxis];
      const _len = altAxis === 'y' ? 'height' : 'width';
      const _min = _offset + overflow[_mainSide];
      const _max = _offset - overflow[_altSide];
      const isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      const _offsetModifierValue =
        (_offsetModifierState$2 = offsetModifierState?.[altAxis]) != null
          ? _offsetModifierState$2
          : 0;
      const _tetherMin = isOriginSide
        ? _min
        : _offset -
          referenceRect[_len] -
          popperRect[_len] -
          _offsetModifierValue +
          normalizedTetherOffsetValue.altAxis;
      const _tetherMax = isOriginSide
        ? _offset +
          referenceRect[_len] +
          popperRect[_len] -
          _offsetModifierValue -
          normalizedTetherOffsetValue.altAxis
        : _max;
      const _preventedOffset =
        tether && isOriginSide
          ? withinMaxClamp(_tetherMin, _offset, _tetherMax)
          : within(
              tether ? _tetherMin : _min,
              _offset,
              tether ? _tetherMax : _max
            );
      (popperOffsets2[altAxis] = _preventedOffset),
        (data[altAxis] = _preventedOffset - _offset);
    }
    state.modifiersData[name] = data;
  }
}
const preventOverflow_default = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset'],
};
function getHTMLElementScroll(element) {
  return { scrollLeft: element.scrollLeft, scrollTop: element.scrollTop };
}
function getNodeScroll(node) {
  return node === getWindow(node) || !isHTMLElement(node)
    ? getWindowScroll(node)
    : getHTMLElementScroll(node);
}
function isElementScaled(element) {
  const rect = element.getBoundingClientRect();
  const scaleX = round(rect.width) / element.offsetWidth || 1;
  const scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  isFixed === void 0 && (isFixed = !1);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const offsetParentIsScaled =
    isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(
    elementOrVirtualElement,
    offsetParentIsScaled,
    isFixed
  );
  let scroll = { scrollLeft: 0, scrollTop: 0 };
  let offsets = { x: 0, y: 0 };
  return (
    (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) &&
      ((getNodeName(offsetParent) !== 'body' ||
        isScrollParent(documentElement)) &&
        (scroll = getNodeScroll(offsetParent)),
      isHTMLElement(offsetParent)
        ? ((offsets = getBoundingClientRect(offsetParent, !0)),
          (offsets.x += offsetParent.clientLeft),
          (offsets.y += offsetParent.clientTop))
        : documentElement &&
          (offsets.x = getWindowScrollBarX(documentElement))),
    {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height,
    }
  );
}
function order(modifiers) {
  const map = new Map();
  const visited = new Set();
  const result = [];
  modifiers.forEach((modifier) => {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    const requires = [].concat(
      modifier.requires || [],
      modifier.requiresIfExists || []
    );
    requires.forEach((dep) => {
      if (!visited.has(dep)) {
        const depModifier = map.get(dep);
        depModifier && sort(depModifier);
      }
    }),
      result.push(modifier);
  }
  return (
    modifiers.forEach((modifier) => {
      visited.has(modifier.name) || sort(modifier);
    }),
    result
  );
}
function orderModifiers(modifiers) {
  const orderedModifiers = order(modifiers);
  return modifierPhases.reduce(
    (acc, phase) =>
      acc.concat(
        orderedModifiers.filter((modifier) => modifier.phase === phase)
      ),
    []
  );
}
function debounce(fn2) {
  let pending;
  return function () {
    return (
      pending ||
        (pending = new Promise((resolve) => {
          Promise.resolve().then(() => {
            (pending = void 0), resolve(fn2());
          });
        })),
      pending
    );
  };
}
function mergeByName(modifiers) {
  const merged = modifiers.reduce((merged2, current) => {
    const existing = merged2[current.name];
    return (
      (merged2[current.name] = existing
        ? {
            ...existing,
            ...current,
            options: { ...existing.options, ...current.options },
            data: { ...existing.data, ...current.data },
          }
        : current),
      merged2
    );
  }, {});
  return Object.keys(merged).map((key) => merged[key]);
}
const DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute',
};
function areValidElements() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  )
    args[_key] = arguments[_key];
  return !args.some(
    (element) =>
      !(element && typeof element.getBoundingClientRect === 'function')
  );
}
function popperGenerator(generatorOptions) {
  generatorOptions === void 0 && (generatorOptions = {});
  const _generatorOptions = generatorOptions;
  const _generatorOptions$def = _generatorOptions.defaultModifiers;
  const defaultModifiers2 =
    _generatorOptions$def === void 0 ? [] : _generatorOptions$def;
  const _generatorOptions$def2 = _generatorOptions.defaultOptions;
  const defaultOptions =
    _generatorOptions$def2 === void 0
      ? DEFAULT_OPTIONS
      : _generatorOptions$def2;
  return function (reference2, popper2, options) {
    options === void 0 && (options = defaultOptions);
    let state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: { ...DEFAULT_OPTIONS, ...defaultOptions },
      modifiersData: {},
      elements: { reference: reference2, popper: popper2 },
      attributes: {},
      styles: {},
    };
    let effectCleanupFns = [];
    let isDestroyed = !1;
    var instance = {
      state,
      setOptions(setOptionsAction) {
        const options2 =
          typeof setOptionsAction === 'function'
            ? setOptionsAction(state.options)
            : setOptionsAction;
        cleanupModifierEffects(),
          (state.options = {
            ...defaultOptions,
            ...state.options,
            ...options2,
          }),
          (state.scrollParents = {
            reference: isElement(reference2)
              ? listScrollParents(reference2)
              : reference2.contextElement
              ? listScrollParents(reference2.contextElement)
              : [],
            popper: listScrollParents(popper2),
          });
        const orderedModifiers = orderModifiers(
          mergeByName([].concat(defaultModifiers2, state.options.modifiers))
        );
        return (
          (state.orderedModifiers = orderedModifiers.filter((m) => m.enabled)),
          runModifierEffects(),
          instance.update()
        );
      },
      forceUpdate() {
        if (!isDestroyed) {
          const _state$elements = state.elements;
          const reference3 = _state$elements.reference;
          const popper3 = _state$elements.popper;
          if (areValidElements(reference3, popper3)) {
            (state.rects = {
              reference: getCompositeRect(
                reference3,
                getOffsetParent(popper3),
                state.options.strategy === 'fixed'
              ),
              popper: getLayoutRect(popper3),
            }),
              (state.reset = !1),
              (state.placement = state.options.placement),
              state.orderedModifiers.forEach(
                (modifier) =>
                  (state.modifiersData[modifier.name] = { ...modifier.data })
              );
            for (
              let index = 0;
              index < state.orderedModifiers.length;
              index++
            ) {
              if (state.reset === !0) {
                (state.reset = !1), (index = -1);
                continue;
              }
              const _state$orderedModifie = state.orderedModifiers[index];
              const fn2 = _state$orderedModifie.fn;
              const _state$orderedModifie2 = _state$orderedModifie.options;
              const _options =
                _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2;
              const { name } = _state$orderedModifie;
              typeof fn2 === 'function' &&
                (state =
                  fn2({ state, options: _options, name, instance }) || state);
            }
          }
        }
      },
      update: debounce(
        () =>
          new Promise((resolve) => {
            instance.forceUpdate(), resolve(state);
          })
      ),
      destroy() {
        cleanupModifierEffects(), (isDestroyed = !0);
      },
    };
    if (!areValidElements(reference2, popper2)) return instance;
    instance.setOptions(options).then((state2) => {
      !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state2);
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach((_ref) => {
        const { name } = _ref;
        const _ref$options = _ref.options;
        const options2 = _ref$options === void 0 ? {} : _ref$options;
        const effect4 = _ref.effect;
        if (typeof effect4 === 'function') {
          const cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2,
          });
          const noopFn = function () {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach((fn2) => fn2()), (effectCleanupFns = []);
    }
    return instance;
  };
}
const defaultModifiers = [
  eventListeners_default,
  popperOffsets_default,
  computeStyles_default,
  applyStyles_default,
  offset_default,
  flip_default,
  preventOverflow_default,
  arrow_default,
  hide_default,
];
const createPopper = popperGenerator({ defaultModifiers });
const import_react_fast_compare = __toESM2(require_react_fast_compare());
const EMPTY_MODIFIERS = [];
const usePopper = function (referenceElement, popperElement, options) {
  options === void 0 && (options = {});
  const prevOptions = React3.useRef(null);
  const optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS,
  };
  const _React$useState = React3.useState({
    styles: {
      popper: { position: optionsWithDefaults.strategy, left: '0', top: '0' },
      arrow: { position: 'absolute' },
    },
    attributes: {},
  });
  const state = _React$useState[0];
  const setState = _React$useState[1];
  const updateStateModifier = React3.useMemo(
    () => ({
      name: 'updateState',
      enabled: !0,
      phase: 'write',
      fn(_ref) {
        const state2 = _ref.state;
        const elements = Object.keys(state2.elements);
        ReactDOM.flushSync(() => {
          setState({
            styles: fromEntries(
              elements.map((element) => [element, state2.styles[element] || {}])
            ),
            attributes: fromEntries(
              elements.map((element) => [element, state2.attributes[element]])
            ),
          });
        });
      },
      requires: ['computeStyles'],
    }),
    []
  );
  const popperOptions = React3.useMemo(() => {
    const newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [
        updateStateModifier,
        { name: 'applyStyles', enabled: !1 },
      ]),
    };
    return (0, import_react_fast_compare.default)(
      prevOptions.current,
      newOptions
    )
      ? prevOptions.current || newOptions
      : ((prevOptions.current = newOptions), newOptions);
  }, [
    optionsWithDefaults.onFirstUpdate,
    optionsWithDefaults.placement,
    optionsWithDefaults.strategy,
    optionsWithDefaults.modifiers,
    updateStateModifier,
  ]);
  const popperInstanceRef = React3.useRef();
  return (
    useIsomorphicLayoutEffect(() => {
      popperInstanceRef.current &&
        popperInstanceRef.current.setOptions(popperOptions);
    }, [popperOptions]),
    useIsomorphicLayoutEffect(() => {
      if (!(referenceElement == null || popperElement == null)) {
        const createPopper2 = options.createPopper || createPopper;
        const popperInstance = createPopper2(
          referenceElement,
          popperElement,
          popperOptions
        );
        return (
          (popperInstanceRef.current = popperInstance),
          function () {
            popperInstance.destroy(), (popperInstanceRef.current = null);
          }
        );
      }
    }, [referenceElement, popperElement, options.createPopper]),
    {
      state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
      styles: state.styles,
      attributes: state.attributes,
      update: popperInstanceRef.current
        ? popperInstanceRef.current.update
        : null,
      forceUpdate: popperInstanceRef.current
        ? popperInstanceRef.current.forceUpdate
        : null,
    }
  );
};
function useGetLatest(val) {
  const ref = React3.useRef(val);
  return (ref.current = val), React3.useCallback(() => ref.current, []);
}
const noop = function () {};
function useControlledState(_ref) {
  const { initial } = _ref;
  const { value } = _ref;
  const _ref$onChange = _ref.onChange;
  const onChange = _ref$onChange === void 0 ? noop : _ref$onChange;
  if (initial === void 0 && value === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined'
    );
  const _React$useState = React3.useState(initial);
  const state = _React$useState[0];
  const setState = _React$useState[1];
  const getLatest = useGetLatest(state);
  const set = React3.useCallback(
    (updater) => {
      const state2 = getLatest();
      const updatedState =
        typeof updater === 'function' ? updater(state2) : updater;
      typeof updatedState.persist === 'function' && updatedState.persist(),
        setState(updatedState),
        typeof onChange === 'function' && onChange(updatedState);
    },
    [getLatest, onChange]
  );
  const isControlled = value !== void 0;
  return [isControlled ? value : state, isControlled ? onChange : set];
}
function generateBoundingClientRect(x, y) {
  return (
    x === void 0 && (x = 0),
    y === void 0 && (y = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: y,
        right: x,
        bottom: y,
        left: x,
        x: 0,
        y: 0,
        toJSON() {
          return null;
        },
      };
    }
  );
}
const _excluded = ['styles', 'attributes'];
const virtualElement = { getBoundingClientRect: generateBoundingClientRect() };
const defaultConfig = {
  closeOnOutsideClick: !0,
  closeOnTriggerHidden: !1,
  defaultVisible: !1,
  delayHide: 0,
  delayShow: 0,
  followCursor: !1,
  interactive: !1,
  mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
  offset: [0, 6],
  trigger: 'hover',
};
function usePopperTooltip(config, popperOptions) {
  let _popperProps$state;
  let _popperProps$state$mo;
  let _popperProps$state$mo2;
  config === void 0 && (config = {}),
    popperOptions === void 0 && (popperOptions = {});
  const finalConfig = Object.keys(defaultConfig).reduce((config2, key) => {
    let _extends2;
    return _extends(
      {},
      config2,
      ((_extends2 = {}),
      (_extends2[key] =
        config2[key] !== void 0 ? config2[key] : defaultConfig[key]),
      _extends2)
    );
  }, config);
  const defaultModifiers2 = React3.useMemo(
    () => [{ name: 'offset', options: { offset: finalConfig.offset } }],
    Array.isArray(finalConfig.offset) ? finalConfig.offset : []
  );
  const finalPopperOptions = _extends({}, popperOptions, {
    placement: popperOptions.placement || finalConfig.placement,
    modifiers: popperOptions.modifiers || defaultModifiers2,
  });
  const _React$useState = React3.useState(null);
  const triggerRef = _React$useState[0];
  const setTriggerRef = _React$useState[1];
  const _React$useState2 = React3.useState(null);
  const tooltipRef = _React$useState2[0];
  const setTooltipRef = _React$useState2[1];
  const _useControlledState = useControlledState({
    initial: finalConfig.defaultVisible,
    value: finalConfig.visible,
    onChange: finalConfig.onVisibleChange,
  });
  const visible = _useControlledState[0];
  const setVisible = _useControlledState[1];
  const timer = React3.useRef();
  React3.useEffect(
    () =>
      function () {
        return clearTimeout(timer.current);
      },
    []
  );
  const _usePopper = usePopper(
    finalConfig.followCursor ? virtualElement : triggerRef,
    tooltipRef,
    finalPopperOptions
  );
  const { styles } = _usePopper;
  const { attributes } = _usePopper;
  const popperProps = _objectWithoutPropertiesLoose(_usePopper, _excluded);
  const { update } = popperProps;
  const getLatest = useGetLatest({
    visible,
    triggerRef,
    tooltipRef,
    finalConfig,
  });
  const isTriggeredBy = React3.useCallback(
    (trigger) =>
      Array.isArray(finalConfig.trigger)
        ? finalConfig.trigger.includes(trigger)
        : finalConfig.trigger === trigger,
    Array.isArray(finalConfig.trigger)
      ? finalConfig.trigger
      : [finalConfig.trigger]
  );
  const hideTooltip = React3.useCallback(() => {
    clearTimeout(timer.current),
      (timer.current = window.setTimeout(
        () => setVisible(!1),
        finalConfig.delayHide
      ));
  }, [finalConfig.delayHide, setVisible]);
  const showTooltip = React3.useCallback(() => {
    clearTimeout(timer.current),
      (timer.current = window.setTimeout(
        () => setVisible(!0),
        finalConfig.delayShow
      ));
  }, [finalConfig.delayShow, setVisible]);
  const toggleTooltip = React3.useCallback(() => {
    getLatest().visible ? hideTooltip() : showTooltip();
  }, [getLatest, hideTooltip, showTooltip]);
  React3.useEffect(() => {
    if (getLatest().finalConfig.closeOnOutsideClick) {
      const handleClickOutside = function (event) {
        let _event$composedPath;
        const _getLatest = getLatest();
        const tooltipRef2 = _getLatest.tooltipRef;
        const triggerRef2 = _getLatest.triggerRef;
        const target =
          (event.composedPath == null ||
          (_event$composedPath = event.composedPath()) == null
            ? void 0
            : _event$composedPath[0]) || event.target;
        target instanceof Node &&
          tooltipRef2 != null &&
          triggerRef2 != null &&
          !tooltipRef2.contains(target) &&
          !triggerRef2.contains(target) &&
          hideTooltip();
      };
      return (
        document.addEventListener('mousedown', handleClickOutside),
        function () {
          return document.removeEventListener('mousedown', handleClickOutside);
        }
      );
    }
  }, [getLatest, hideTooltip]),
    React3.useEffect(() => {
      if (!(triggerRef == null || !isTriggeredBy('click')))
        return (
          triggerRef.addEventListener('click', toggleTooltip),
          function () {
            return triggerRef.removeEventListener('click', toggleTooltip);
          }
        );
    }, [triggerRef, isTriggeredBy, toggleTooltip]),
    React3.useEffect(() => {
      if (!(triggerRef == null || !isTriggeredBy('double-click')))
        return (
          triggerRef.addEventListener('dblclick', toggleTooltip),
          function () {
            return triggerRef.removeEventListener('dblclick', toggleTooltip);
          }
        );
    }, [triggerRef, isTriggeredBy, toggleTooltip]),
    React3.useEffect(() => {
      if (!(triggerRef == null || !isTriggeredBy('right-click'))) {
        const preventDefaultAndToggle = function (event) {
          event.preventDefault(), toggleTooltip();
        };
        return (
          triggerRef.addEventListener('contextmenu', preventDefaultAndToggle),
          function () {
            return triggerRef.removeEventListener(
              'contextmenu',
              preventDefaultAndToggle
            );
          }
        );
      }
    }, [triggerRef, isTriggeredBy, toggleTooltip]),
    React3.useEffect(() => {
      if (!(triggerRef == null || !isTriggeredBy('focus')))
        return (
          triggerRef.addEventListener('focus', showTooltip),
          triggerRef.addEventListener('blur', hideTooltip),
          function () {
            triggerRef.removeEventListener('focus', showTooltip),
              triggerRef.removeEventListener('blur', hideTooltip);
          }
        );
    }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]),
    React3.useEffect(() => {
      if (!(triggerRef == null || !isTriggeredBy('hover')))
        return (
          triggerRef.addEventListener('mouseenter', showTooltip),
          triggerRef.addEventListener('mouseleave', hideTooltip),
          function () {
            triggerRef.removeEventListener('mouseenter', showTooltip),
              triggerRef.removeEventListener('mouseleave', hideTooltip);
          }
        );
    }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]),
    React3.useEffect(() => {
      if (
        !(
          tooltipRef == null ||
          !isTriggeredBy('hover') ||
          !getLatest().finalConfig.interactive
        )
      )
        return (
          tooltipRef.addEventListener('mouseenter', showTooltip),
          tooltipRef.addEventListener('mouseleave', hideTooltip),
          function () {
            tooltipRef.removeEventListener('mouseenter', showTooltip),
              tooltipRef.removeEventListener('mouseleave', hideTooltip);
          }
        );
    }, [tooltipRef, isTriggeredBy, showTooltip, hideTooltip, getLatest]);
  const isReferenceHidden =
    popperProps == null ||
    (_popperProps$state = popperProps.state) == null ||
    (_popperProps$state$mo = _popperProps$state.modifiersData) == null ||
    (_popperProps$state$mo2 = _popperProps$state$mo.hide) == null
      ? void 0
      : _popperProps$state$mo2.isReferenceHidden;
  React3.useEffect(() => {
    finalConfig.closeOnTriggerHidden && isReferenceHidden && hideTooltip();
  }, [finalConfig.closeOnTriggerHidden, hideTooltip, isReferenceHidden]),
    React3.useEffect(() => {
      if (!finalConfig.followCursor || triggerRef == null) return;
      function setMousePosition(_ref) {
        const { clientX } = _ref;
        const { clientY } = _ref;
        (virtualElement.getBoundingClientRect = generateBoundingClientRect(
          clientX,
          clientY
        )),
          update?.();
      }
      return (
        triggerRef.addEventListener('mousemove', setMousePosition),
        function () {
          return triggerRef.removeEventListener('mousemove', setMousePosition);
        }
      );
    }, [finalConfig.followCursor, triggerRef, update]),
    React3.useEffect(() => {
      if (
        !(
          tooltipRef == null ||
          update == null ||
          finalConfig.mutationObserverOptions == null
        )
      ) {
        const observer = new MutationObserver(update);
        return (
          observer.observe(tooltipRef, finalConfig.mutationObserverOptions),
          function () {
            return observer.disconnect();
          }
        );
      }
    }, [finalConfig.mutationObserverOptions, tooltipRef, update]);
  const getTooltipProps = function (args) {
    return (
      args === void 0 && (args = {}),
      _extends(
        {},
        args,
        { style: _extends({}, args.style, styles.popper) },
        attributes.popper,
        { 'data-popper-interactive': finalConfig.interactive }
      )
    );
  };
  const getArrowProps = function (args) {
    return (
      args === void 0 && (args = {}),
      _extends({}, args, attributes.arrow, {
        style: _extends({}, args.style, styles.arrow),
        'data-popper-arrow': !0,
      })
    );
  };
  return _extends(
    {
      getArrowProps,
      getTooltipProps,
      setTooltipRef,
      setTriggerRef,
      tooltipRef,
      triggerRef,
      visible,
    },
    popperProps
  );
}
const match = (0, import_memoizerific.default)(1e3)(
  (requests, actual, value, fallback = 0) =>
    actual.split('-')[0] === requests ? value : fallback
);
const ArrowSpacing = 8;
const Arrow = newStyled.div(
  { position: 'absolute', borderStyle: 'solid' },
  ({ placement }) => {
    let x = 0;
    let y = 0;
    switch (!0) {
      case placement.startsWith('left') || placement.startsWith('right'): {
        y = 8;
        break;
      }
      case placement.startsWith('top') || placement.startsWith('bottom'): {
        x = 8;
        break;
      }
    }
    return { transform: `translate3d(${x}px, ${y}px, 0px)` };
  },
  ({ theme, color, placement }) => ({
    bottom: `${match('top', placement, `${ArrowSpacing * -1}px`, 'auto')}`,
    top: `${match('bottom', placement, `${ArrowSpacing * -1}px`, 'auto')}`,
    right: `${match('left', placement, `${ArrowSpacing * -1}px`, 'auto')}`,
    left: `${match('right', placement, `${ArrowSpacing * -1}px`, 'auto')}`,
    borderBottomWidth: `${match('top', placement, '0', ArrowSpacing)}px`,
    borderTopWidth: `${match('bottom', placement, '0', ArrowSpacing)}px`,
    borderRightWidth: `${match('left', placement, '0', ArrowSpacing)}px`,
    borderLeftWidth: `${match('right', placement, '0', ArrowSpacing)}px`,
    borderTopColor: match(
      'top',
      placement,
      theme.color[color] || color || theme.base === 'light'
        ? lightenColor(theme.background.app)
        : theme.background.app,
      'transparent'
    ),
    borderBottomColor: match(
      'bottom',
      placement,
      theme.color[color] || color || theme.base === 'light'
        ? lightenColor(theme.background.app)
        : theme.background.app,
      'transparent'
    ),
    borderLeftColor: match(
      'left',
      placement,
      theme.color[color] || color || theme.base === 'light'
        ? lightenColor(theme.background.app)
        : theme.background.app,
      'transparent'
    ),
    borderRightColor: match(
      'right',
      placement,
      theme.color[color] || color || theme.base === 'light'
        ? lightenColor(theme.background.app)
        : theme.background.app,
      'transparent'
    ),
  })
);
const Wrapper = newStyled.div(
  ({ hidden }) => ({
    display: hidden ? 'none' : 'inline-block',
    zIndex: 2147483647,
  }),
  ({ theme, color, hasChrome }) =>
    hasChrome
      ? {
          background:
            theme.color[color] || color || theme.base === 'light'
              ? lightenColor(theme.background.app)
              : theme.background.app,
          filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
          borderRadius: theme.appBorderRadius,
          fontSize: theme.typography.size.s1,
        }
      : {}
);
const Tooltip = import_react.default.forwardRef(
  (
    {
      placement,
      hasChrome,
      children,
      arrowProps,
      tooltipRef,
      color,
      withArrows,
      ...props
    },
    ref
  ) =>
    import_react.default.createElement(
      Wrapper,
      { 'data-testid': 'tooltip', hasChrome, ref, ...props, color },
      hasChrome &&
        withArrows &&
        import_react.default.createElement(Arrow, {
          placement,
          ...arrowProps,
          color,
        }),
      children
    )
);
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: 'top',
  arrowProps: {},
};
const { document: document2 } = scope;
const TargetContainer = newStyled.div`
  display: inline-block;
  cursor: ${(props) =>
    props.trigger === 'hover' || props.trigger.includes('hover')
      ? 'default'
      : 'pointer'};
`;
const TargetSvgContainer = newStyled.g`
  cursor: ${(props) =>
    props.trigger === 'hover' || props.trigger.includes('hover')
      ? 'default'
      : 'pointer'};
`;
const WithTooltipPure = ({
  svg,
  trigger,
  closeOnOutsideClick,
  placement,
  hasChrome,
  withArrows,
  offset: offset2,
  tooltip,
  children,
  closeOnTriggerHidden,
  mutationObserverOptions,
  closeOnClick,
  tooltipShown,
  onVisibilityChange,
  defaultVisible,
  delayHide,
  visible,
  interactive,
  delayShow,
  modifiers,
  strategy,
  followCursor,
  onVisibleChange,
  ...props
}) => {
  const Container = svg ? TargetSvgContainer : TargetContainer;
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible: isVisible,
    state,
  } = usePopperTooltip(
    {
      trigger,
      placement,
      defaultVisible: defaultVisible ?? tooltipShown,
      delayHide,
      interactive,
      closeOnOutsideClick: closeOnOutsideClick ?? closeOnClick,
      closeOnTriggerHidden,
      onVisibleChange: (_isVisible) => {
        onVisibilityChange?.(_isVisible), onVisibleChange?.(_isVisible);
      },
      delayShow,
      followCursor,
      mutationObserverOptions,
      visible,
      offset: offset2,
    },
    { modifiers, strategy }
  );
  const tooltipComponent = import_react.default.createElement(
    Tooltip,
    {
      placement: state?.placement,
      ref: setTooltipRef,
      hasChrome,
      arrowProps: getArrowProps(),
      withArrows,
      ...getTooltipProps(),
    },
    typeof tooltip === 'function'
      ? tooltip({ onHide: () => onVisibleChange(!1) })
      : tooltip
  );
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement(
      Container,
      { trigger, ref: setTriggerRef, ...props },
      children
    ),
    isVisible &&
      import_react_dom.default.createPortal(tooltipComponent, document2.body)
  );
};
WithTooltipPure.defaultProps = {
  svg: !1,
  trigger: 'click',
  closeOnOutsideClick: !1,
  placement: 'top',
  modifiers: [
    { name: 'preventOverflow', options: { padding: 8 } },
    { name: 'offset', options: { offset: [8, 8] } },
    { name: 'arrow', options: { padding: 8 } },
  ],
  hasChrome: !0,
  defaultVisible: !1,
};
const WithToolTipState = ({
  startOpen = !1,
  onVisibleChange: onChange,
  ...rest
}) => {
  const [tooltipShown, setTooltipShown] = (0, import_react.useState)(startOpen);
  const onVisibilityChange = (0, import_react.useCallback)(
    (visibility) => {
      (onChange && onChange(visibility) === !1) || setTooltipShown(visibility);
    },
    [onChange]
  );
  return (
    (0, import_react.useEffect)(() => {
      const hide2 = () => onVisibilityChange(!1);
      document2.addEventListener('keydown', hide2, !1);
      const iframes = Array.from(document2.getElementsByTagName('iframe'));
      const unbinders = [];
      return (
        iframes.forEach((iframe) => {
          const bind = () => {
            try {
              iframe.contentWindow.document &&
                (iframe.contentWindow.document.addEventListener('click', hide2),
                unbinders.push(() => {
                  try {
                    iframe.contentWindow.document.removeEventListener(
                      'click',
                      hide2
                    );
                  } catch {}
                }));
            } catch {}
          };
          bind(),
            iframe.addEventListener('load', bind),
            unbinders.push(() => {
              iframe.removeEventListener('load', bind);
            });
        }),
        () => {
          document2.removeEventListener('keydown', hide2),
            unbinders.forEach((unbind) => {
              unbind();
            });
        }
      );
    }),
    import_react.default.createElement(WithTooltipPure, {
      ...rest,
      visible: tooltipShown,
      onVisibleChange: onVisibilityChange,
    })
  );
};
export { require_react_dom, auto, WithTooltipPure, WithToolTipState };
